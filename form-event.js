function save(){
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang'] option:checked").text
    alert(`Nome: ${name} \nLinguagem de Programação: ${programmingLang}`)
}