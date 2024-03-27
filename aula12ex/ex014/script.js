function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var hora= 21

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += ' Bom Dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#eecd93'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += ' Boa Tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#bd6f21'
    } else {
        msg.innerHTML += ' Boa Noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#41324a'
    }
}
