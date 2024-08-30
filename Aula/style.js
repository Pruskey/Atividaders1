const Paragrafo1 = document.getElementById('Paragrafo1')
const Paragrafo2 = document.getElementsByClassName('Paragrafo2')[0]
const botao = document.querySelector('#botao')

const link = document.getElementById('link')
const imagem = document.getElementById('dollar')
const botaoImagem = document.getElementById('botaoImg')

link.setAttribute('href', 'https://store.steampowered.com/?l=portuguese')
link.textContent = 'videogame'

link.style.color = 'red'

var imgAtual = 1

botaoImagem.addEventListener('click', function(){
    if(imgAtual ===1 ){
        imagem.setAttribute('src', 'grama.jpeg')
        imgAtual = 2
    }else {
        imgAtual.setAttribute('src', 'dollar.jpeg')
        imgAtual = 1
    }
})