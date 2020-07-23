let colors = ['Red','orange','green','pink','blue'];
const color = document.querySelector('#colornames');
colors.forEach(colornames=>{
    color.innerHTML += `${colornames}<br/>`;
})
function background(){
    setTimeout(()=>{
        document.body.style.backgroundColor="lightblue";
        document.body.style.color='white';
},5000)
}
background()
