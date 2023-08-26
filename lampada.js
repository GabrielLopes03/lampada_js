/* Criando variaveis com D.O.M */

const turnOn = document.getElementById('turOn');
const turnOff = document.getElementById('turOff');
const lamp = document.getElementById('lamp');

/* Criando evento do botão */

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

/* Evento mouseOver quando o ponteiro estiver sobre a lâmpada  */
lamp.addEventListener('mouseover', lampOn);

lamp.addEventListener('dblclick', lampBrokem);

function isLampBrokem() {
    return lamp.src.indexOf('quebrada') > -1

}

function lampOn() {
    if (!isLampBrokem()) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff() {
    if (!isLampBrokem()) {
        lamp.src = './img/desligada.jpg'
    }
}

function lampBrokem() {
    lamp.src = '.img/quebrada.jpg'
}