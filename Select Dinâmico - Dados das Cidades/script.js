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

const abrirWikipedia = async (cidades) => {

    const estados = document.querySelector("#estados")
    const estadoSelecionado = estados.selectedOptions[0].innerText

    const estadoSemEspacos = estadoSelecionado.replaceAll(" ", "%20")
    const cidadeSemEspacos = cidades.value.replaceAll(" ", "%20")

    const linkComEstado = `https://pt.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${cidadeSemEspacos}|${estadoSemEspacos}`
    const linkSemEstado = `https://pt.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${cidadeSemEspacos}`

    let dados = await pegarRotas(linkComEstado)

    if(dados[3].length == 0) {
        dados = await pegarRotas(linkSemEstado)
    }

    if(!dados || dados.length != 4) return

    window.open(dados[3][0], "_blank")

}

const pegarRotas = async (link) => {

    const dados = await fetch(link)
        .then(resp => resp.json())
        .catch(error => false)

    console.log(dados)

    return dados

}

/*const inserirNoIframe = (cidades) => {

    const iframe = document.querySelector("iframe")
    const semEspacos = cidades.value.replaceAll(" ", "_")

    iframe.src = `https://pt.wikipedia.org/wiki/${semEspacos}`

}*/
