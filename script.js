




const currentTime = document.querySelector("#ct1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet,
ringtone = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        


    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}




setAlarmBtn.addEventListener("click", setAlarm);









const currentTime2 = document.querySelector("#ct2"),
content2 = document.querySelector("#content2"),
selectMenu2 = document.querySelectorAll(".select2"),
setAlarmBtn2 = document.querySelector("#button2");

let alarmTime2, isAlarmSet2,
ringtone2 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option2 = `<option value="${i}">${i}</option>`;
    selectMenu2[0].firstElementChild.insertAdjacentHTML("afterend", option2);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option2 = `<option value="${i}">${i}</option>`;
    selectMenu2[1].firstElementChild.insertAdjacentHTML("afterend", option2);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option2 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu2[2].firstElementChild.insertAdjacentHTML("afterend", option2);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime2.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime2 === `${h}:${m} ${ampm}`) {
        ringtone2.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm2() {
    if (isAlarmSet2) {
        alarmTime2 = "";
        ringtone2.pause();
        content2.classList.remove("disable");
        setAlarmBtn2.innerText = "Set Alarm";
        return isAlarmSet2 = false;
    }

    let time = `${selectMenu2[0].value}:${selectMenu2[1].value} ${selectMenu2[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime2 = time;
    isAlarmSet2 = true;
    content2.classList.add("disable");
    setAlarmBtn2.innerText = "Clear Alarm";
}

setAlarmBtn2.addEventListener("click", setAlarm2);






const currentTime3 = document.querySelector("#ct3"),
content3 = document.querySelector("#content3"),
selectMenu3 = document.querySelectorAll(".select3"),
setAlarmBtn3 = document.querySelector("#button3");

let alarmTime3, isAlarmSet3,
ringtone3 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option3 = `<option value="${i}">${i}</option>`;
    selectMenu3[0].firstElementChild.insertAdjacentHTML("afterend", option3);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option3 = `<option value="${i}">${i}</option>`;
    selectMenu3[1].firstElementChild.insertAdjacentHTML("afterend", option3);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option3 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu3[2].firstElementChild.insertAdjacentHTML("afterend", option3);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime3.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime3 === `${h}:${m} ${ampm}`) {
        ringtone3.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm3() {
    if (isAlarmSet3) {
        alarmTime3 = "";
        ringtone3.pause();
        content3.classList.remove("disable");
        setAlarmBtn3.innerText = "Set Alarm";
        return isAlarmSet3 = false;
    }

    let time = `${selectMenu3[0].value}:${selectMenu3[1].value} ${selectMenu3[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime3 = time;
    isAlarmSet3 = true;
    content3.classList.add("disable");
    setAlarmBtn3.innerText = "Clear Alarm";
}

setAlarmBtn3.addEventListener("click", setAlarm3);


const currentTime4 = document.querySelector("#ct4"),
content4 = document.querySelector("#content4"),
selectMenu4 = document.querySelectorAll(".select4"),
setAlarmBtn4 = document.querySelector("#button4");

let alarmTime4, isAlarmSet4,
ringtone4 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option4 = `<option value="${i}">${i}</option>`;
    selectMenu4[0].firstElementChild.insertAdjacentHTML("afterend", option4);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option4 = `<option value="${i}">${i}</option>`;
    selectMenu4[1].firstElementChild.insertAdjacentHTML("afterend", option4);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option4 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu4[2].firstElementChild.insertAdjacentHTML("afterend", option4);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime4.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime4 === `${h}:${m} ${ampm}`) {
        ringtone4.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm4() {
    if (isAlarmSet4) {
        alarmTime4 = "";
        ringtone4.pause();
        content4.classList.remove("disable");
        setAlarmBtn4.innerText = "Set Alarm";
        return isAlarmSet4 = false;
    }

    let time = `${selectMenu4[0].value}:${selectMenu4[1].value} ${selectMenu4[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime4 = time;
    isAlarmSet4 = true;
    content4.classList.add("disable");
    setAlarmBtn4.innerText = "Clear Alarm";
}

setAlarmBtn4.addEventListener("click", setAlarm4);

const currentTime5 = document.querySelector("#ct5"),
content5 = document.querySelector("#content5"),
selectMenu5 = document.querySelectorAll(".select5"),
setAlarmBtn5 = document.querySelector("#button5");

let alarmTime5, isAlarmSet5,
ringtone5 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option5 = `<option value="${i}">${i}</option>`;
    selectMenu5[0].firstElementChild.insertAdjacentHTML("afterend", option5);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option5 = `<option value="${i}">${i}</option>`;
    selectMenu5[1].firstElementChild.insertAdjacentHTML("afterend", option5);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option5 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu5[2].firstElementChild.insertAdjacentHTML("afterend", option5);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime5.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime5 === `${h}:${m} ${ampm}`) {
        ringtone5.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm5() {
    if (isAlarmSet5) {
        alarmTime5 = "";
        ringtone5.pause();
        content5.classList.remove("disable");
        setAlarmBtn5.innerText = "Set Alarm";
        return isAlarmSet5 = false;
    }

    let time = `${selectMenu5[0].value}:${selectMenu5[1].value} ${selectMenu5[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime5 = time;
    isAlarmSet5 = true;
    content5.classList.add("disable");
    setAlarmBtn5.innerText = "Clear Alarm";
}

setAlarmBtn5.addEventListener("click", setAlarm5);

const currentTime6 = document.querySelector("#ct6"),
content6 = document.querySelector("#content6"),
selectMenu6 = document.querySelectorAll(".select6"),
setAlarmBtn6 = document.querySelector("#button6");

let alarmTime6, isAlarmSet6,
ringtone6 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option6 = `<option value="${i}">${i}</option>`;
    selectMenu6[0].firstElementChild.insertAdjacentHTML("afterend", option6);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option6 = `<option value="${i}">${i}</option>`;
    selectMenu6[1].firstElementChild.insertAdjacentHTML("afterend", option6);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option6 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu6[2].firstElementChild.insertAdjacentHTML("afterend", option6);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime6.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime6 === `${h}:${m} ${ampm}`) {
        ringtone6.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm6() {
    if (isAlarmSet6) {
        alarmTime6 = "";
        ringtone6.pause();
        content6.classList.remove("disable");
        setAlarmBtn6.innerText = "Set Alarm";
        return isAlarmSet6 = false;
    }

    let time = `${selectMenu6[0].value}:${selectMenu6[1].value} ${selectMenu6[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime6 = time;
    isAlarmSet6 = true;
    content6.classList.add("disable");
    setAlarmBtn6.innerText = "Clear Alarm";
}

setAlarmBtn6.addEventListener("click", setAlarm6);

const currentTime7 = document.querySelector("#ct7"),
content7 = document.querySelector("#content7"),
selectMenu7 = document.querySelectorAll(".select7"),
setAlarmBtn7 = document.querySelector("#button7");

let alarmTime7, isAlarmSet7,
ringtone7 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option7 = `<option value="${i}">${i}</option>`;
    selectMenu7[0].firstElementChild.insertAdjacentHTML("afterend", option7);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option7 = `<option value="${i}">${i}</option>`;
    selectMenu7[1].firstElementChild.insertAdjacentHTML("afterend", option7);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option7 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu7[2].firstElementChild.insertAdjacentHTML("afterend", option7);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime7.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime7 === `${h}:${m} ${ampm}`) {
        ringtone7.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm7() {
    if (isAlarmSet7) {
        alarmTime7 = "";
        ringtone7.pause();
        content7.classList.remove("disable");
        setAlarmBtn7.innerText = "Set Alarm";
        return isAlarmSet7 = false;
    }

    let time = `${selectMenu7[0].value}:${selectMenu7[1].value} ${selectMenu7[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime7 = time;
    isAlarmSet7 = true;
    content7.classList.add("disable");
    setAlarmBtn7.innerText = "Clear Alarm";
}

setAlarmBtn7.addEventListener("click", setAlarm7);

const currentTime8 = document.querySelector("#ct8"),
content8 = document.querySelector("#content8"),
selectMenu8 = document.querySelectorAll(".select8"),
setAlarmBtn8 = document.querySelector("#button8");

let alarmTime8, isAlarmSet8,
ringtone8 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option8 = `<option value="${i}">${i}</option>`;
    selectMenu8[0].firstElementChild.insertAdjacentHTML("afterend", option8);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option8 = `<option value="${i}">${i}</option>`;
    selectMenu8[1].firstElementChild.insertAdjacentHTML("afterend", option8);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option8 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu8[2].firstElementChild.insertAdjacentHTML("afterend", option8);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime8.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime8 === `${h}:${m} ${ampm}`) {
        ringtone8.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm8() {
    if (isAlarmSet8) {
        alarmTime8 = "";
        ringtone8.pause();
        content8.classList.remove("disable");
        setAlarmBtn8.innerText = "Set Alarm";
        return isAlarmSet8 = false;
    }

    let time = `${selectMenu8[0].value}:${selectMenu8[1].value} ${selectMenu8[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime8 = time;
    isAlarmSet8 = true;
    content8.classList.add("disable");
    setAlarmBtn8.innerText = "Clear Alarm";
}

setAlarmBtn8.addEventListener("click", setAlarm8);

const currentTime9 = document.querySelector("#ct9"),
content9 = document.querySelector("#content9"),
selectMenu9 = document.querySelectorAll(".select9"),
setAlarmBtn9 = document.querySelector("#button9");

let alarmTime9, isAlarmSet9,
ringtone9 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option9 = `<option value="${i}">${i}</option>`;
    selectMenu9[0].firstElementChild.insertAdjacentHTML("afterend", option9);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option9 = `<option value="${i}">${i}</option>`;
    selectMenu9[1].firstElementChild.insertAdjacentHTML("afterend", option9);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option9 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu9[2].firstElementChild.insertAdjacentHTML("afterend", option9);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime9.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime9 === `${h}:${m} ${ampm}`) {
        ringtone9.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm9() {
    if (isAlarmSet9) {
        alarmTime9 = "";
        ringtone9.pause();
        content9.classList.remove("disable");
        setAlarmBtn9.innerText = "Set Alarm";
        return isAlarmSet9 = false;
    }

    let time = `${selectMenu9[0].value}:${selectMenu9[1].value} ${selectMenu9[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime9 = time;
    isAlarmSet9 = true;
    content9.classList.add("disable");
    setAlarmBtn9.innerText = "Clear Alarm";
}

setAlarmBtn9.addEventListener("click", setAlarm9);


const currentTime10 = document.querySelector("#ct10"),
content10 = document.querySelector("#content10"),
selectMenu10 = document.querySelectorAll(".select10"),
setAlarmBtn10 = document.querySelector("#button10");

let alarmTime10, isAlarmSet10,
ringtone10 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option10 = `<option value="${i}">${i}</option>`;
    selectMenu10[0].firstElementChild.insertAdjacentHTML("afterend", option10);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option10 = `<option value="${i}">${i}</option>`;
    selectMenu10[1].firstElementChild.insertAdjacentHTML("afterend", option10);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option10 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu10[2].firstElementChild.insertAdjacentHTML("afterend", option10);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime10.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime10 === `${h}:${m} ${ampm}`) {
        ringtone10.play();
        const alarmTimeout = setTimeout(() => {
    
        }, delay);
        
        clearTimeout(alarmTimeout);
        
    }
});

function setAlarm10() {
    if (isAlarmSet10) {
        alarmTime10 = "";
        ringtone10.pause();
        content10.classList.remove("disable");
        setAlarmBtn10.innerText = "Set Alarm";
        return isAlarmSet10 = false;
    }

    let time = `${selectMenu10[0].value}:${selectMenu10[1].value} ${selectMenu10[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime10 = time;
    isAlarmSet10 = true;
    content10.classList.add("disable");
    setAlarmBtn10.innerText = "Clear Alarm";
}

setAlarmBtn10.addEventListener("click", setAlarm10);

const currentTime11 = document.querySelector("#ct11"),
content11 = document.querySelector("#content11"),
selectMenu11 = document.querySelectorAll(".select11"),
setAlarmBtn11 = document.querySelector("#button11");

let alarmTime11, isAlarmSet11,
ringtone11 = new Audio("handbell-81953 (2).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 11
 ? `0${i}` : i;
    let option11
 = `<option value="${i}">${i}</option>`;
    selectMenu11
[0].firstElementChild.insertAdjacentHTML("afterend", option11
);
}

for (let i = 59; i >= 0; i--) {
    i = i < 11
 ? `0${i}` : i;
    let option11
 = `<option value="${i}">${i}</option>`;
    selectMenu11
[1].firstElementChild.insertAdjacentHTML("afterend", option11
);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option11
 = `<option value="${ampm}">${ampm}</option>`;
    selectMenu11
[2].firstElementChild.insertAdjacentHTML("afterend", option11
);
}

setInterval()  
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 11
 ? "0" + h : h;
    m = m < 11
 ? "0" + m : m;
    s = s < 11
 ? "0" + s : s;
    currentTime11
.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime11
 === `${h}:${m} ${ampm}`) {
        ringtone11
    .play();
    const alarmTimeout = setTimeout(() => {
    
    }, delay);
    
    clearTimeout(alarmTimeout);
    
}

function setAlarm11() {
    if (isAlarmSet11
) {
        alarmTime11
     = "";
        ringtone11
    .pause();
        content11
    .classList.remove("disable");
        setAlarmBtn11
    .innerText = "Set Alarm";
        return isAlarmSet11
     = false;
    }

    let time = `${selectMenu11
[0].value}:${selectMenu11
[1].value} ${selectMenu11
[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime11
 = time;
    isAlarmSet11
 = true;
    content11
.classList.add("disable");
    setAlarmBtn11
.innerText = "Clear Alarm";
}

setAlarmBtn11.addEventListener("click", setAlarm11);












