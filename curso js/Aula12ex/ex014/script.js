function carregar () {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 1
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12) {
        //BOM DIA #e2cd9f
        img.src = 'Foto-manha.png'
        msg.innerHTML += 'O Hugo é o amor da minha vida'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE #b9846f
        img.src = 'Foto-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'Foto-noite.png'
        document.body.style.background = '#515154'
    }
}