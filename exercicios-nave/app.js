// Definicao de variaveis iniciais

let nome = prompt('Qual o nome da nave?')
let tipo = prompt('Qual o tipo de nave?')
let velMax = parseInt(prompt('Qual a velocidade maxima da nave?'))
var velocidade = 0

// Criacao do objeto nave

let nave = {
  nome: nome, 
  tipo: tipo, 
  velocidadeMax: Number.velMax, 
  velocidade: velocidade, 
  acelerarParar: aceleracao()
  
}

// Criacao da funcao que determina a aceleracao da nave

function aceleracao(){

  let acelerarParar = prompt('Caso queira parar, digite 1.\nCaso queira acelerar, digite 2.')
  //Primeiro if: detemrina se a nave deve parar ou acelerar
  if(acelerarParar != 2 && acelerarParar!= 1){
    alert('Insira uma opcao valida.')
    aceleracao()
  }
  else if(acelerarParar == 1){
    alert('A nave esta parada')
    velocidade = 0
  }else{
    let acelerar = parseInt(prompt('Quanto voce deseja acelerar?'))
    //segundo if: determina se a velocidade da nave esta dentro dos parametros solicitados e atualiza a velocidade atual da mesma
   if(acelerar > velMax){
      alert('A nave está acelerando mais que a velocidade máxima. Vamos estabilizar.')
      velocidade = velMax
    }else{
      velocidade += acelerar
    } //retorna a velocidade ao objeto nave
  } return velocidade
}

//Alerta que exibe o retorno das informacoes da nave

alert(`Nome: ${nave.nome}\nTipo: ${nave.tipo}\nVelocidade Atual: ${velocidade}\nVelocidade Max: ${velMax}\n`)

