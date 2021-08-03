const inputMask = document.querySelector("#mask")

const isANumber = (key) => !isNaN(key) && key != "" && key != " "

const patternData = (isDeleting, key = "") => {

    const onlyNumbers = inputMask.value.replace(".", "").split("")

    if(isDeleting) {
        onlyNumbers.pop()
        onlyNumbers.splice(0, 0, 0)
    } else {
        onlyNumbers.shift()
        onlyNumbers.push(key)
    }

    onlyNumbers.splice(2, 0, ".")

    inputMask.value = onlyNumbers.join("")

}

inputMask.addEventListener("paste", e => e.preventDefault())

inputMask.addEventListener("keydown", e => {

    const deleteKeys = ["Backspace", "Delete"]
    
    if( !deleteKeys.includes(e.key) ) return

    e.preventDefault()

    patternData(true)

})

inputMask.addEventListener("keypress", e => {

    e.preventDefault()

    if( !isANumber(e.key) ) return

    patternData(false, e.key)

})