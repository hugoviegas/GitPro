function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
            if (i < f){
                for(let c = i; c <= f; c += p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
                res.innerHTML += ` \u{1F3C1}`
            } else {
                for (let c = i; c >= f; c -= p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
                res.innerHTML += ` \u{1F3C1} `
            }
        
    }



    /*
    inicio + passo até fim
    enquanto inicio < fim faça inicio + passo
    ini 1
    fim 10
    passo 2
    do while 1+2=3 verif se < faz de novo... 9+2=11 
    while se < 1+2=3 
    */
}