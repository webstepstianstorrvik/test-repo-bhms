export const isValidURL = (str: string) => {
    var a = document.createElement('a')
    a.href = str
    return a.host && a.host !== window.location.host
}
