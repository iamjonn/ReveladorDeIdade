function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'https://user-images.githubusercontent.com/110827553/212450741-6d08dc0f-7705-449b-8307-763de6ef96ad.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'https://user-images.githubusercontent.com/110827553/212451044-12fe2fd2-2bc7-4ad7-9f54-90b77e532f75.jpg')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'https://user-images.githubusercontent.com/110827553/212452237-d256ae96-2f1e-47ea-948d-36c14acb5693.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'https://user-images.githubusercontent.com/110827553/212452639-37b1e563-1b01-4394-8662-72cf290a69a9.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'https://user-images.githubusercontent.com/110827553/212450758-a305c637-b454-4a64-bd77-9ad5ace1d67b.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'https://user-images.githubusercontent.com/110827553/212451101-0a34996c-25ed-4408-90e7-3a50df2d1458.jpg')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'https://user-images.githubusercontent.com/110827553/212451635-06f6d2d5-ed1e-4cc8-8f29-3ae6b4a757e0.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'https://user-images.githubusercontent.com/110827553/212452927-b85087a1-fc39-4c6d-9c19-a5c3d3887fa0.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
