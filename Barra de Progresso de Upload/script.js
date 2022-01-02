const form = document.querySelector("form")
const progress = document.querySelector(".progress .determinate")
const request = new XMLHttpRequest()

form.addEventListener("submit", e => {

    e.preventDefault()

    const formData = new FormData(form)

    request.open("POST", location.href)
    request.send(formData)

})

request.upload.addEventListener("progress", e => {

    const { loaded, total } = e
    const percent = (loaded / total) * 100

    //console.log(`carregado: ${loaded}, tamanho: ${total}, porcentagem: ${percent}%`)

    progress.style.width = `${percent}%`

})