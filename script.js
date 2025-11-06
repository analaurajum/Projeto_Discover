function toggleMode() {
  const html = document.documentElement

  //altera a posição e o símbolo do botão
  /*html.classList.toggle("light")
  html.classList.toggle("dark")*/

  /* MANEIRA MAIS ABERTA DO FUNCIONAMENTO DO TOGGLE PARA ALTERAR O BOTÃO

  if(html.classList.contains('light')){
    html.classList.remove('light')
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
    html.classList.add('light')
  }
    */

  //FAZER ALTERAÇÃO DA IMAGEM CONFORME A CONFIGURAÇÃO DA PÁGINA EM LIGHT OU DARK

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  const isLightMode = html.classList.toggle("light")
  /*
  // substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //Se tiver dark, adicionar imagem dark
    img.setAttribute("src", "./assets/Avatar.png")
  }*/

  if (isLightMode) {
    html.classList.remove("dark")
  } else {
    html.classList.add("dark")
  }

  if (isLightMode) {
    //modo light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //modo dark
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
