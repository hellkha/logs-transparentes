const mqtt = require('mqtt')
const mosquitto_url = require('../../../../config.json').mosquitto_url

/* ---------------------- Configuração mqtt ------------------------- */
const client  = mqtt.connect(mosquitto_url)

client.on('connect', function () {
  client.subscribe('logs-transparentes/consistencyCheck', {qos: 0}, function (err) {
    if (!err) 
      console.log("Conectado ao tópico consistencyCheck")
  })
  client.subscribe('logs-transparentes/consistencyProof', {qos: 0}, function (err) {
    if (!err) 
      console.log("Conectado ao tópico consistencyProof")
  })
})
/* ----------------------------------------------------------------- */

export default (client)
