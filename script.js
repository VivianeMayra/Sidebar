//Função responsável pela abertura do menu

let myButton=document.querySelector('button');
let sidebar=document.querySelector('.sidebar');

console.log(sidebar)
myButton.addEventListener('click', () => {
if(sidebar.getAttribute('class') ==='closed'){
    console.log("oii")
    sidebar.setAttribute('class', 'open');
}else{
    console.log("teteuuu")
    sidebar.setAttribute('class', 'closed');

}



})

