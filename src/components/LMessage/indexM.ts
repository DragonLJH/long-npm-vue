import { createApp, h } from 'vue'
import "./index.css"
const Message = {
    props: {
        title: { type: String },
        msg: { type: String }
    },
    render(option: any) {
        const { $props, $emit } = option
        return h("div", { class: "message-com-item" },
            [
                h("div", { class: "head" }, $props.title),
                h("div", { class: "msg" }, $props.msg),
                h("div", { class: "footer" }, [
                    h("div", { class: "close", onClick: () => $emit("close") }, "close")
                ]),
            ])
    },
}

type msgProps = {
    title: string
    msg: string
}

export function showMsg(option: msgProps, onClick: Function) {
    const { title, msg } = option
    let div = document.createElement("div")
    div.setAttribute("class", "message-com")
    document.body.append(div)
    let app = createApp(Message, {
        title, msg, onClose: () => {
            // 将关闭弹窗的方法 返回
            onClick(() => {
                app.unmount()
                div.remove()
            })
        }
    })
    app.mount(div)
}

