import "./index.css"
import Svg from './index.svg';



let div = document.createElement("div")
div.setAttribute("class", "app")
div.innerText = "ASD"

let img = document.createElement("img")
img.setAttribute("src", Svg)



document.body.appendChild(div)
document.body.appendChild(img)