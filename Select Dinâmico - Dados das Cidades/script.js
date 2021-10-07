const pegarCidades = async (estados) => {

    const cidades = document.querySelector("#cidades")
    const link = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`

    cidades.setAttribute("disabled", true)

    const dados = await fetch(link)
        .then(resp => resp.json())
        .catch(error => false)

    if(!dados) return

    cidades.removeAttribute("disabled")

    inserirCidades(dados)

}

const inserirCidades = (dados = []) => {

    const cidades = document.querySelector("#cidades")

    cidades.innerHTML = `<option value="">Selecione</option>`

    dados.forEach(cidade => {

        cidades.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`

    })

}

const abrirWikipedia = (cidades) => {

    const semEspacos = cidades.value.replaceAll(" ", "_")

    window.open(`https://pt.wikipedia.org/wiki/${semEspacos}`)

}

const inserirNoIframe = (cidades) => {

    const iframe = document.querySelector("iframe")
    const semEspacos = cidades.value.replaceAll(" ", "_")

    iframe.src = `https://pt.wikipedia.org/wiki/${semEspacos}`

}
