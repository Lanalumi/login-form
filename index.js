// menu abrir, fechar
const button = document.querySelector("[data-button]")
console.log(button)
const list = document.querySelector("[data-list]")
button.addEventListener("click", function(){
    list.classList.toggle("open")
    console.log(button.innerHTML) 
    if (button.innerHTML.trim() === "Abrir"){
        button.innerHTML = "Fechar"
    } else {button.innerHTML = "Abrir"}

})

// login
// selecionar o main,
const main = document.querySelector("[data-main]")
//seleciona form
const form = document.querySelector("[data-form]")
// qnd login for submetido ->  
form.addEventListener("submit",function(event){
    event.preventDefault()
    console.log(event)
    // trocar conteudo p submetido 
    const mainContent = main.innerHTML
    main.innerHTML = "Sucesso"
    // e add logout no menu
    const logout = document.createElement("li")
    logout.innerHTML = "<p>logout</p>"
    logout.addEventListener("click", function (){
        main.innerHTML = mainContent
        logout.remove()
    })
    list.appendChild(logout)
})
