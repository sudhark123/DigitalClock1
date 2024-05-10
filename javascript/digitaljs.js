function currentDate(){
    var date=new Date();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var dy=date.getDay();
    if(dd<=9){
        dd="0"+dd;
    }
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    mo=month[mo];
var days=[
    "ఆదివారం",
    "సోమవారం",
    "మంగళవారం",
    "బుధవారం",
    "గురువారం",
    "శుక్రవారం",
    "శనివారం",
];
dy=days[dy];
var curDate=dd+"/"+mo+"/"+yy;
document.getElementById("date").innerHTML=curDate;
document.getElementById("day").innerHTML=dy;
}
setInterval(currentDate,1000);
function dateoutput(){
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var am_pm="Am";
    
    if(hh>=12){
        am_pm="Pm";
        if(hh>=13){
            hh=hh-12;
        }
    }
    if(hh==0){
        hh=12;
    }
    if(hh<=9){
        hh="0"+hh;
    }
    if(mm<=9){
        mm="0"+mm;
    }
    if(ss<=9){
        ss="0"+ss;
    }
    var time=hh+":"+mm+ " " + am_pm;
    document.getElementById("hours12").innerHTML=time;
    document.getElementById("sec").innerHTML=ss;
    setTimeout(dateoutput,1000);
}
dateoutput();
function dateoutput24(){
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var currentHr=hh+":"+mm;
    document.getElementById("hours24").innerHTML=currentHr;
}
setInterval(dateoutput24,1000);
var num=0;
function toggleButton(){
    num++;
    if(num%2==0){
        document.getElementById("button").style.left="0px";
        document.getElementById("button").style.backgroundColor="black";
        document.getElementById("toggle").style.backgroundColor="white";
        document.getElementById("hours12").style.display="block";
        document.getElementById("hours24").style.display="none";
    }
    else{
        document.getElementById("button").style.left="3vw";
        document.getElementById("button").style.backgroundColor="white";
        document.getElementById("toggle").style.backgroundColor="black";
        document.getElementById("hours12").style.display="none";
        document.getElementById("hours24").style.display="block";

    }
}
function bgImage(){
    var date=new Date();
    var dy=date.getDay();
    console.log(dy);
    var arrImage=["sun.jpg","mon.jpg","tue.jpg","wed.jpg","thur.jpg","fri.jpg","sat.jpg"];
    console.log(arrImage[dy])
    document.body.style.backgroundImage=`url(../Asset/${arrImage[dy]})`
}


var audio=new Audio("../Asset/sound.mp3")

var  allinp=document.querySelectorAll("input");
// console.log("allinp");
function userData(){
    var currentDate=new Date();
    var dd=currentDate.getDate();
    var mo=currentDate.getMonth()+1;
    var yy=currentDate.getFullYear();
    var hh=currentDate.getHours();
    var mm=currentDate.getMinutes();
    if(mo<=9){
        mo="0"+mo;
    }
    if(mm<=9){
        mm="0"+mm;
    }
    if(dd<=9){
        dd="0"+dd;
    }
    if(hh<=9){
        hh="0"+hh;
    }
    var currentddmmyy=`${yy}-${mo}-${dd}`
    var currentTime=`${hh}:${mm}`
    var userDate=allinp[1].value;
    // console.log(userDate);
    var userTime=allinp[2].value;
    // console.log(userTime);

    if(currentddmmyy==userDate && userTime==currentTime){
        // window.alert("wake up !!!");

        audio.play();
    }
}
setInterval(userData,1000);

function  closeAlarmWindow(){
    document.querySelector("#containerAlarm").style.display="none"
}
function openAlarmWindow(){
    document.querySelector("#containerAlarm").style.display="flex"
}
