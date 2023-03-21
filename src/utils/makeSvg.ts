export default class makeSvg {
    parent: any
    svg: any
    constructor(parent: any) {
        console.log("parent", parent)
        this.parent = parent
        this.svg;
    }
    intiSvg(width: number = 100, height: number = 100) {
        let svg = this.appendSvg("svg", { width, height })
        this.parent.appendChild(svg)
        this.svg = svg
    }
    appendSvg(tag: string, attr: { [k: string]: string | number }) {
        let ns = "http://www.w3.org/2000/svg"
        let item = document.createElementNS(ns, tag)
        Object.keys(attr).forEach((val: string) => {
            item.setAttribute(val, attr[val].toString())
        })
        if (tag === "svg") {
            item.setAttribute("viewBox", "0 0 48 48")
            item.setAttribute("fill", "none")
            return item
        }
        this.svg.appendChild(item)
    }
}



