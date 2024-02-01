const btnPlay = document.querySelector("#play")
const popUp = document.querySelector("#popUp")
const telaJogo = document.querySelector("#tela1")
const mensageError = document.querySelector("#errou")
const input = document.querySelector('#app input')
const btnReset = document.querySelector("#popUp button")
const Wallpaper = document.querySelector("body video")
const randomNumber = Math.round(Math.random() * 10)

function trocarFundo(){
    Wallpaper.src = 'asssets/particles_-_102436 (1080p).mp4'
}

function trocarTela(){
    popUp.classList.toggle('hide')
telaJogo.classList.toggle('hide')
}

function Verify0a10(){
    const {value} = document.querySelector("#app input")
    if(value > 10 || value <0){
        alert('Digite um número válido!')
    }
}

function VerifyRandomNumber(){
const {value} = document.querySelector("#app input")
console.log(value, randomNumber)
Verify0a10()
if(Number(value) === randomNumber){
trocarTela()
trocarFundo()
}else{
input.value = ""
    mensageError.classList.remove('hide')
}
}

 function removePopUp(){
trocarTela()
location.reload()

}



btnReset.addEventListener("click", removePopUp)
btnPlay.addEventListener("click", VerifyRandomNumber)
input.addEventListener('click' ,() => {mensageError.classList.add('hide')})

