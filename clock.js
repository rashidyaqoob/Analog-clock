const secondhand=document.querySelector(".sec-hand");
const minshand=document.querySelector(".min-hand");
const hourhand=document.querySelector(".hour-hand");
function setDate(){
    const now= new Date();
    const sec=now.getSeconds();
    const secDegree= ((sec/60)*360)+90;
    const mins=now.getMinutes();
    const minDegree=((mins/60)*360)+90;
    const hour=now.getHours();
    console.log(hour);
    const hourDegree=((hour/12)*360)+90;
    secondhand.style.transform=`rotate(${secDegree}deg)`;
    minshand.style.transform=`rotate(${minDegree}deg)`;
    hourhand.style.transform=`rotate(${hourDegree}deg)`;
    console.log(sec);
}
setInterval(setDate,1000);