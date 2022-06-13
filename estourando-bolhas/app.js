function addQuad(){
    let quadrado = document.createElement('div')
    quadrado.setAttribute('class', 'teste')
    p1 = Math.round(Math.random() * 600)
    p2 = Math.round(Math.random() * 400)
    quadrado.setAttribute('style', 'left:'+p1+'px;top:'+p2+'px;')
   document.body.appendChild(quadrado);
quadrado.setAttribute('onclick', 'removeQuad(this)')
}


function removeQuad(elemento){
    document.body.removeChild(elemento)
}

function iniciar(){
    setInterval(addQuad, 1500)
}
