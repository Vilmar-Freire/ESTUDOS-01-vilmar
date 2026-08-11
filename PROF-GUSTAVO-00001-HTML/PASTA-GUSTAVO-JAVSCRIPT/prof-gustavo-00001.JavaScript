alert('SEJAM-BEM-VINDOS')

//input checkbox max 2
const checkboxInputs = document . querySelectorAll ('input[type="checkbox"] ' )
const limit = 2
checkboxInputs. forEach(input => {
input . onclick = ( ) => {
    console. log("clicou")
        const checkboxInputsChecked = document . querySelectorAll (' input[type="checkbox"] :checked ' )
        if (checkboxInputsChecked. length > limit) {
            alert("Você pode ter no máximo 2 habilidades")
           return false
        }
}
})
