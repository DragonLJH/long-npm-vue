import { createApp, h } from 'vue'
const Message = {
    props: {
        title: { type: String },
        msg: { type: String }
    },
    render(option: any) {
        const { $props, $emit } = option
        console.log("render-option", $emit)
        return h('div', { class: "message", onClick: () => { $emit("close") } }, $props.title)
    },
}

type msgProps = {
    title: string
    msg: string
}

export function showMsg(option: msgProps, fun?: Function) {
    const { title, msg } = option
    let div = document.createElement("div")
    div.setAttribute("class", "message-div")
    createApp(Message, {
        title, msg, onClose: () => {
            console.log("onClose-asd")
        }
    }).mount(div)
    document.body.append(div)
}

