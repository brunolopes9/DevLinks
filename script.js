function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/bruno1.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
