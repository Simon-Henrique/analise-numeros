var txtn1 = document.getElementById('txtn') // informação preenchida 
var list = document.getElementById('list') //lista
var res = document.getElementById('res') // resultado
var Valor = [] // vetor
function isnumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true                               
    } else {                                     //observe que neste formato, retornamos uma validação verdadeira ou falsa
        return false
    }
}
function inlista(n, l){  // a chamada considera dois parametros, poriso na elaboração da função também podemos 'criar' dois elementos de parametro
    if(l.indexOf(Number(n)) != -1) { //verificando se ja existe o dado numerico da txtn1 dentro do vetor n1, lembrando que retorno == -1 significa que indexOf não encontrou o dado procurado.
        return true
    } else {           //validação verificando se o dado numérico já esta dentro do vetor
        return false
    }   
}
function adcionar(){
    res.innerHTML = ''    
    if (isnumber(txtn1.value) && !inlista(txtn1.value, Valor)){    
        Valor.push(Number(txtn1.value))    
        var item = document.createElement('option') 
        item.text = `O valor ${txtn1.value} adicionado` 
        list.appendChild(item) 
    } else {
        window.alert('Valor invalido ou já encontrado na lista') }
        
        txtn1.value = '' 
        txtn1.focus() 
}

function calcular () {
    var tm = Valor.length
    var maiorN = Valor[0]  
    var menorN = Valor[0]
    var soma = 0
    var media = 0
    for (var pos in Valor)
        soma += Valor[pos]
        if (Valor[pos] > maiorN) {
            maiorN = Valor[pos]
        }
        if (Valor[pos] < menorN) {
            menorN = Valor[pos]
        }
    media = soma / tm     
    res.innerHTML = ''     
    res.innerHTML += `Ao todo temos temos ${tm} números cadastrados.</br>` 
    res.innerHTML += `O maior valor informado foi ${maiorN}. </br>` 
    res.innerHTML += `O menor valor informado foi ${menorN}. </br>` 
    res.innerHTML += `A soma de todos os valores é ${soma}.</br>`
    res.innerHTML += `A media de todos os valores é ${media}`

}