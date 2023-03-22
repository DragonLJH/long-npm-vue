export const getMergeUrl = (url: string, params: { [k: string]: string }) => {
    let data = Object.keys(params).map((item) => {
        return item + "=" + params[item]
    })
    if (url.search(/\?/) !== -1) {
        url += data.join("&")
    } else {
        url += "?" + data.join("&")
    }
    return url
}