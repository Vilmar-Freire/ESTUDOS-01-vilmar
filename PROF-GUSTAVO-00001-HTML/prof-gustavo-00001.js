alert('SEJAM-BEM-VINDOS')
//Input checkbox max 2
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]')
const limit = 2
checkboxInputs. forEach(input => {
  input. onclick = () => {
    const checkboxInputsChecked = document.querySelectorAll('input[type="checkbox"]:checked')
    if (checkboxInputsChecked.length>limit) {
      alert("Você pode ter no máximo 2 habilidades")
      return false
    }
  }
})

//Input range
const inputsRangeType=document.querySelectorAll (".input-range")
inputsRangeType.forEach(input =>{
   const inputValue = input.nextSibling
    inputValue.textContent = input.value

    input.addEventListener("input", () =>{
      inputValue.textContent = input.value
    })
})


document.querySelector(".create-character-form").addEventListener("submit", (event) =>{
    event.preventDefault()

    const charName = event.target["character-name"].value
    const charName = event.target["last-name"].value
    const birthdate = event.target.birthdate.value
    const level = event.target.level.value
    const charClass = event.target["character-class"].value

    const specificSkillsInput = document.querySelectorAll("input[name=skill]:checked")
    const  specificSkills = Array.from(specificSkillsInput).map(skill => {
      return skill.value
    })

    const data = {
      charName,
      lastName,
      birthdate,
      level,
      charClass,
      specificSkills,
    }


    console.log(data)
})
