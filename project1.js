let a;
let date;
let time;
let wrdTime;
let NYtime;
let LDtime;
let TItime;
let DAtime;
let YMtime;

function worldTime (hrs){
    if(a.getHours() < hrs){
        wrdTime = 24 - hrs + a.getHours();
    }
    else{
        wrdTime = a.getHours() - hrs;
    }
    if(wrdTime > 24){
        wrdTime = wrdTime - 24;
    }
    return wrdTime;
}


const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("time").innerHTML = time + "<br> on " + date;
  
  NYtime = worldTime(10) + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("NYtime").innerHTML = NYtime;

  LDtime = worldTime(5) + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("LDtime").innerHTML = LDtime;

  TItime = worldTime(2) + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("TItime").innerHTML = TItime;

  DAtime = worldTime(-4) + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("DAtime").innerHTML = DAtime;

  YMtime = worldTime(-1) + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("YMtime").innerHTML = YMtime;
}, 1000);
