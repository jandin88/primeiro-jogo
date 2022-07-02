var altura=0
var largura=0
var vidas=1
var tempo=15
var criaMosquitoTempo=1500
var nivel= window.location.search   /*search*///essa linha ta pegando o link da informação do index,o seach pega depois da interogação do link(da um console.log na variavel)

nivel=(nivel.replace('?',''))

if(nivel=='normal')
{
    //1500ms
    criaMosquitoTempo=1500

}
else if(nivel=='dificil')
{   //1000ms
    criaMosquitoTempo=1000
}
else if(nivel=='Chucknorris')
{   //750ms
    criaMosquitoTempo=750
}

function ajustaTamanhoTelaJogo()
{
     altura = window.innerHeight;
     largura = window.innerWidth;       //buscar largura e ecaltura 

     console.log(largura,altura)
}

ajustaTamanhoTelaJogo()

var cronometro = setInterval(function(){

    tempo-=1

    if(tempo<0)
    {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href='vitoria.html'
    }
    else
    {
        document.getElementById('cronometro').innerHTML=tempo
    }    },1000)
    

function posicaoRandomica()
{
    //remover mosquito anterior(caso exita)
    if(document.getElementById('mosquito'))
    {
        document.getElementById('mosquito').remove()
     //   console.log('vendo v: '+vidas)
        if(vidas>3)
        {
            window.location.href='fim_do_jogo.html'
        }
        else
        {
            document.getElementById('v'+vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
    }
    //posiçao do mosquito em ordem aleatoria
    var posicaox = Math.floor(Math.random()*largura)-40
    var posicaoy = Math.floor(Math.random()*altura)-40

    posicaox=posicaox<0 ? 0: posicaox               //operedor ternário leitura abaixo
    posicaoy=posicaoy<0 ? 0: posicaoy              // se a posicaoy recebe 0  caso for menor q 0 caso  n for recebe ela msm

    console .log(posicaox,posicaoy)


    //criar elemento html
    var mosquito = document.createElement('img')            // criando a variavel para adicionar no Child
    mosquito.src='imagens/mosca.png'                    //e tipo adicionando img em html
    mosquito.className=tamanhoAleatorio()+' '+  ladoAleatorio()                //adicionando classe do css no script//obs\\ nota depois, adicionou uma função pois ela vai dar o nome da classe
    mosquito.style.left =posicaox +'px'
    mosquito.style.top =posicaoy +'px'
    mosquito.style.position ='absolute'
    mosquito.id='mosquito'
    mosquito.onclick=function(){
        this.remove()
    }


    document.body.appendChild(mosquito)


    /*adicionando função*/
    //console.log(tamanhoAleatorio()) //obs\\ ta comentada pq chamou em cima em className              //colocar aqui dentro pois quando essa função for realizada ela será tbm      
    //console.log(ladoAleatorio())
}

// tamanho do mosquito aleatoria
function tamanhoAleatorio()
{
    var classe = Math.floor(Math.random()*3)            

    //poderia usar o if mais decide fazer igual ele gosto mais do if
    switch(classe)
    {
        case 0:
            return 'mosquito1'          // n esta usando o break pq a umtima linnha do progrma e o return ele interrope o programa para mandar o resulatdo para onde foi chamado
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio()
{
    var classe = Math.floor(Math.random()*2)

    switch(classe)
    {
        case 0:
            return 'ladoA'          // n esta usando o break pq a umtima linnha do progrma e o return ele interrope o programa para mandar o resulatdo para onde foi chamado
        case 1:
            return 'ladoB'
    }
}
