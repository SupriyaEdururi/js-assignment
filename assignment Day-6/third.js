var name=prompt("Enter your name");
const wish=document.getElementById('wish');
wish.innerHTML=`Hi ${name} Welcome To My Page `;
const ctime=document.getElementById('time')
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
//clock()
setInterval(clock, 1000);

const page=document.body;
//document.write(page)
page.classList.toggle('background')

