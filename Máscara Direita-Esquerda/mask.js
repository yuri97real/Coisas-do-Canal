const inputMask = document.querySelector("#mask")

const isANumber = (key) => !isNaN(key) && key != "" && key != " "

inputMask.addEventListener("keypress", e => {

    e.preventDefault()

    if( !isANumber(e.key) ) return

    const onlyNumbers = inputMask.value.replace(".", "").split("")

    onlyNumbers.shift()
    onlyNumbers.push(e.key)

    onlyNumbers.splice(1, 0, ".")

    inputMask.value = onlyNumbers.join("")

})