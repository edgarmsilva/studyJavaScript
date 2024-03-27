// alert('Olá')

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano || fano.value.length < 4) {
        window.alert('verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Sua idade é: ${idade} Anos`
        var genero = ''

        // criação dinâmica de elementos:

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        // o comando acima é a mesma coisa de criar no html: <img id="foto">

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.src = 'foto-bebe-m.png'
            } else if (idade < 21) {
                //jovem
                img.src = 'foto-jovem-m.png'
            } else if (idade < 50) {
                //Adulto
                img.src = 'foto-adulto-m.png'
            } else {
                // idoso
                img.src = 'foto-idoso-m.png'
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.src = 'foto-bebe-f.png'
            } else if (idade < 21) {
                //jovem
                img.src = 'foto-jovem-f.png'
            } else if (idade < 50) {
                //Adulto
                img.src = 'foto-adulto-f.png'
            } else {
                // idoso
                img.src = 'foto-idoso-f.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`

        res.appendChild(img)

    }

}