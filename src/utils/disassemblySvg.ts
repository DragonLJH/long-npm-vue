class disassemblySvg {
    svg: any;
    constructor(svg: any) {
        this.svg = svg
    }
    toData() {
        // {
        //  className: "user", tagList: [{
        //     tag: "circle", attr: {
        //       cx: "24", cy: "12", r: "8", fill: "none", stroke: "#333", "stroke-width": "4", "stroke-linecap": "round",
        //       "stroke-linejoin": "round"
        //     }
        //   }, {
        //     tag: "path", attr: {
        //       d: "M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44",
        //       "fill": "none", stroke: "#333", "stroke-width": "4", "stroke-linejoin": "round"
        //     }
        //   }]
        // }
        return Array.from(this.svg).map((item: any) => {
            let className = item.id
            let tagList = item.children
            return {
                className,
                tagList
            }
        }).map((item: any) => {
            item.tagList = Array.from(item.tagList).map((val: any) => {
                // 获取 svg 内部的底下的元素
                // tag 名标签
                let tag = val.tagName
                let attr = {} as { [key: string]: string }
                // attr 属性
                for (let i = 0; i < val.attributes.length; i++) {
                    let key = val.attributes[i].name
                    let value = val.attributes[i].value
                    attr[key] = value
                }
                return {
                    tag, attr
                }
            })
            return item
        })

    }
}