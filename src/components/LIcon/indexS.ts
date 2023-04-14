// const svgsPath = require.context('./', true, /\.svg$/)
const svgsPath = require.context('./zzz/', true, /\.svg$/)
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
    // let name = item.replace("./", "").replace(".svg", "").split("_")[1]
    let name = item.replace("./", "").replace(".svg", "")
    return fetch(svgsPath(item).default).then((item) => {
        return item.text().then((res) => {
            return {
                name,
                data: res
            }
        })
    })
}))

export const arr = imgs.map((item) => {
    let name = item.replace("./", "").replace(".svg", "")
    return name
})
// svg 字符串 转化 xml
// let svgStrToXml = (new DOMParser()).parseFromString(svg, "text/xml")
// svg xml 转化 字符串
// let svgXmlToStr = (new XMLSerializer()).serializeToString(svgXml);

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
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        background-position: center;
    }`)
    let linkCss = document.createElement("link")
    linkCss.href = "index.css"
    linkCss.rel = "stylesheet"
    linkCss.type = "text/css"
    iconList.then((data) => {
        data.forEach((item) => {
            // let svg = item.data.replaceAll(/#.{6};?/g, "var(--color)").replace('<style type="text/css">','<style type="text/css">\n svg{--color:%23f00;}').replace('<style>','<style type="text/css">\n svg{--color:%23f00;}').replaceAll(/\n/g, " ")
            let svg = item.data.replaceAll(/#.{6};?/g, "%23f00;").replaceAll(/\n/g, " ")
            let svgXml = (new DOMParser()).parseFromString(svg, "text/xml")
            let html = svgXml.documentElement.innerHTML
            html = '<style xmlns="http://www.w3.org/2000/svg" type="text/css">svg{--color:%23f00;} </style>' + html
            svgXml.documentElement.innerHTML = html
            let svgStr = (new XMLSerializer()).serializeToString(svgXml);
            console.log("svgXml", svgXml.documentElement.innerHTML)
            console.log("svgStr", svgStr)
            let style = `.icon.${item.name}{  
                background-image: url('data:image/svg+xml;utf-8,${svg}');
            }`
            _this.add(style)
        })
    })
} 
