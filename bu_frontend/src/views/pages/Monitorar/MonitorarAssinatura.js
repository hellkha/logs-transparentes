import React, { useEffect,useState } from 'react';
import { Card, CardBody, Col, Row, Button,Table } from 'reactstrap'
import { subscriber } from './logic/subscriber';
import { Loader } from '../../../vibe';

//Crio um state, passo pro subscriber, usar um useeffect com o proofdata, toda vez que o proofdata mudar
// o useffect vai executar oq ta dentro, toda vez q mudar, vai atualizar o que ta sendo exibido.
export default function MonitorarAssinatura() {
  
  const [proofData,setProofData] =  useState([]);
  const [raiz,setRaiz] =  useState([]);
  const [contador,setContador] =  useState([]);
  const [buadd,setBU] =  useState([]);
  const [cor,setCor] =  useState([]);
  subscriber(setProofData,setRaiz,setContador,setCor,setBU)
  const [state,setState] = useState(false);
  const [validate, setValidate] = useState(false);
  const i=0
  validar0(i)
  function validar0(i){
    while(i <= cor.length){
      if (cor[i]==true){
        cor[i]='Validado.'}
      if (cor[i]==false){
        cor[i]='#ERRO#'}
      i++}
  }

  function mostrargap(raiz){
      if (raiz.length===0)
    return '20vw'
      else
      return '0.5vw'
  }
  function mostrardisplay(raiz){
    if (raiz.length===0)
      return 'none'
    else
      return 'flex'
}
function status(){
  if (raiz.length!=0){
    setTimeout(() => {setState(!state)}, 2500);}
    return}

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <h4>Monitorar Raízes</h4>
          <div>
            <div style={{display:mostrardisplay(raiz),margin:'auto', textAlign:'center'}}>
              <div style={{display:'flex',gap:mostrargap(raiz),textAlign:'center',fontSize:'30px',padding:'.3vw',marginTop:'8vh',marginLeft:'auto',marginRight:'auto'}}>
                <div>
                    <h4>ID</h4>
                    {contador.map(contador => <h5 style={{color:'black',backgroundColor:'#c4c4c4',padding:'.4vw',borderRadius:'2px'}}>{contador}</h5>)}
                </div>
                <div>
                    <h4>Raíz</h4>
                    {raiz.map(raiz => <h5 style={{color:'black',backgroundColor:'#c4c4c4',padding:'.4vw',borderRadius:'2px',textAlign:'justify'}}>
                     {raiz}
                     </h5>)}
                </div>
                <div>
                  <h4>Time Stamp</h4>
                  {buadd.map(buadd => 
                    <h5 style={{color:'black',backgroundColor:'#c4c4c4',padding:'.4vw'}}>
                      {buadd}
                    </h5>)}
                </div> 
                <div>
                  <h4>BUs</h4>
                  {buadd.map(buadd => 
                    <h5 style={{color:'black',backgroundColor:'#c4c4c4',padding:'.4vw'}}>
                      {buadd}
                    </h5>)}
                </div> 
                <div>
                  {status()}
                    <h4>Assinatura - Em construção</h4>
                    {cor.map(cor => <h5 style={{color:'black',backgroundColor:'#c4c4c4',padding:'.4vw',borderRadius:'2px',textAlign:'justify'}}>
                     {cor}
                     </h5>)}
                     
                </div>
              </div>
            </div>
          </div>
          
        </CardBody>
      </Card>
      
    </React.Fragment>
  );
}