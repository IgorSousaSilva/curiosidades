const inputText = document.querySelectorAll(".itens")


inputText.forEach((inputs)=> {
    inputs.addEventListener('click', () =>{
    const itemAtivo = document.querySelector(".ativo")
    
          itemAtivo.classList.remove('ativo')
          inputs.classList.add('ativo')
    })
})