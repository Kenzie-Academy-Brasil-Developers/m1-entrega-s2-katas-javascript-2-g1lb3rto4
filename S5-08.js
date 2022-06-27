function soma(a, b){
    return  a + b
}
let resultado = soma(2,4)
console.log(soma(2,4))


function multiplicacao(c,d){  
    let resultadoM = 0
    for(let i = 0;i < c; i = soma(i, 1)){
    resultadoM = soma(resultadoM, d)
}
return resultadoM
}
console.log(multiplicacao(6,8))


function potencia(e,f){  
    let resultadoP = e
    for(let i = 1; i < f;i = soma(i, 1)){
    resultadoP = multiplicacao(resultadoP, e) 
}
return resultadoP 
}
console.log(potencia(2,8))


function fatorial(g){  
    let resultadoF = g
    for(let i = 0; i < g; i = soma(i, 1)){
    resultadoF = multiplicacao(g, resultadoF = multiplicacao(i,2))
}
return resultadoF 
}
console.log(fatorial(4))



function fibonacci(h){
  if (h <= 2) {
    return 1
  } 
  else { 
    i = (fibonacci(h - 1) + fibonacci(h - 2)) 
}
return i
}
 console.log(fibonacci(7))