const hamburguer= document.querySelector('.hamburguer')
const menu =  document.querySelector('.menu-navegacion')
//evento o metodo click , es decir es mi escuchador 
hamburguer.addEventListener('click',()=>{

    menu.classList.toggle("spraed") //define la velocidad del menu
})

window.addEventListener('click', e=>{
    if (menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguer
    ){
        console.log('cerrar')
        menu.classList.toggle("spread")

    }
    
})