const clockTitle = document.querySelector(".js-clock");
const message = document.querySelector(".message");

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    if(h.toString().length==1) h = "0" + h;
    if(m.toString().length==1) m = "0" + m;
    if(s.toString().length==1) s = "0" + s;
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerText = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

message.innerText = "I am glad to reach to this point. Though CSS is the thing I should do, I have gained much hope from the fact that I do understand what I am doing now. Whatever the result would be, I have no regret. Thank you."