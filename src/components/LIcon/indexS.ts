const svgsPath = require.context('./', true, /\.svg$/)
const imgs = svgsPath.keys()
// const iconList = [] as Array<{ name: string, data: string }>

// for (let i = 0; i < imgs.length; i++) {
//     let name = imgs[i].replace("./", "").replace(".svg", "").split("_")[1]
//     fetch(svgsPath(imgs[i]).default).then((item) => {
//         item.text().then((res) => {
//             iconList.push({
//                 name,
//                 data: res
//             })
//         })
//     })
// }

const iconList = Promise.all(imgs.map((item) => {
    let name = item.replace("./", "").replace(".svg", "").split("_")[1]
    return fetch(svgsPath(item).default).then((item) => {
        return item.text().then((res) => {
            return {
                name,
                data: res
            }
        })
    })
}))


export class svgStyle {
    style: HTMLStyleElement
    constructor() {
        this.style;
    }
    init() {
        let style = document.createElement("style"), head = document.head || document.getElementsByTagName("head")[0]
        style.type = "text/css"
        head.appendChild(style)
        this.style = style
        console.log("init()", this.style)
    }
    add(cssText: string) {
        let textNode = document.createTextNode(cssText)
        this.style.appendChild(textNode)
    }
}

export const initSvg = () => {
    let _this = new svgStyle()
    _this.init()
    _this.add(`.icon {
        display: inline-block;
        width: 44px;
        height: 44px;
        background-repeat: no-repeat;
        background-position: center;
    }`)
    iconList.then((data) => {
        data.forEach((item) => {
            let svg = item.data.replaceAll(/#.{3};?/g, "%23000")
            let style = `.icon.${item.name}{
                background-image: url('data:image/svg+xml;utf-8,${svg}')
            }`
            _this.add(style)
        })
    })
} 