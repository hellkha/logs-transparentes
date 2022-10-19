const axios = require('axios')
const merkletree_adapter = require("../../../api/merkletree.adapter")
const merkletree_api = require("../../../api/merkletree.api")

const backendHostname = "http://localhost"
const backendPort = 8080
const bu_api_url = require('../../../config.json').bu_api_url

export async function RetotalizacaoDeBus(){
    console.log("Download de BUs iniciado")
    const BUs = await baixarBUs()
    console.log("Download de " + BUs.length + " BUs terminado")
    console.log(await verificarBUs(BUs))
    let numerodebusadicionados =  BUs.length;
    if (BUs==0){
        numerodebusadicionados=0
    }
    const verificarbus = await verificarBUs(BUs) // variavel para verificar os bus (true ou false)
    const verificarbusquantidade = verificarbus.verificacao_qtd
    console.log(verificarbusquantidade)
    const verificarbusinclusao = verificarbus.verificacao_inclusao
    const votosretotalizacao = retotalizar(BUs)
    const teste = await PegarRoot(BUs)
    return [numerodebusadicionados,verificarbusquantidade,votosretotalizacao,verificarbusinclusao,teste]
}

const a = RetotalizacaoDeBus()
console.log(a)

async function baixarBUs(){
    return await axios.get(`${bu_api_url}/bu/get_all`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return 0
    })
}

async function verificarBUs(BUs){ 
    return {
        verificacao_inclusao: await verificarInclusao(BUs),
        verificacao_qtd: await verificarQtdBUS(BUs)
    }
}

async function verificarQtdBUS(BUs){
    return await axios.get(`${bu_api_url}/tree/leaves/qtd`)
    .then(res => {
        return res.data == BUs.length
    })
    .catch((err) => {
        console.log(err)
    })
}
async function PegarRoot(BUs){
    return await axios.get(`${bu_api_url}/tree/root`)
    .then(res => {
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}

async function verificarInclusao(BUs){
    for (let i = 0; i < BUs.length; i++) { //percorre BUs
        const res = await merkletree_api.verify(BUs[i].id)
        if(!res.isTrue){
            return {
                isTrue: false,
                res: res
            }
        }
    }
    return {
        isTrue: true
    }
}

function retotalizar(BUs){
    const ret = []
    for (let i = 0; i < BUs.length; i++) { //percorre BUs
        const candidatos = BUs[i].votos;
        for (let j = 0; j < candidatos.length; j++) { //percorre registros dos candidatos em um BU
            const element = candidatos[j];
            let aux = ret.findIndex(candidato => candidato.nome == element.nome)
            
            if(aux != -1) //se encontrado candidato no array
                ret[aux].votos += element.votos //soma os votos
            else
                ret.push(element) //insere no array
        }   
    }

    ret.sort((a, b) => b.votos - a.votos) //ordena por qtd de votos
    return ret
}

