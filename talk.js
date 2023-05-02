number = 0;
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")
const button5 = document.querySelector(".button5")
const imglist = document.querySelector(".picture_show1")
const buttonlist = document.querySelector(".picture_show2")
var buttonz = [button1, button2, button3, button4, button5];
// 点击切换事件
button1.addEventListener("click", () => {
    imglist.style.top = "0px";
    number = 0;
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");
    button5.classList.remove("active");
});
button2.addEventListener("click", () => {
    imglist.style.top = "-269.6px";
    number = 1;
    button1.classList.remove("active");
    button2.classList.add("active");
    button3.classList.remove("active");
    button4.classList.remove("active");
    button5.classList.remove("active");
});
button3.addEventListener("click", () => {
    imglist.style.top = "-539.2px";
    number = 2;
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");
    button4.classList.remove("active");
    button5.classList.remove("active");
});
button4.addEventListener("click", () => {
    imglist.style.top = "-808.8px";
    number = 3;
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.add("active");
    button5.classList.remove("active");
});
button5.addEventListener("click", () => {
    imglist.style.top = "-1076.8px";
    number = 4;
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");
    button5.classList.add("active");
});
// 克隆第一张图片
let clonefirstImg = imglist.firstElementChild.cloneNode();
imglist.appendChild(clonefirstImg); 
// 导航文字,图片自动轮播
function auto(){
    imglist.style.top = -number * 269.6 + "px";
    number++;
    if (number === 1){
        button1.classList.add("active");
        button5.classList.remove("active");
    };
    if (number === 2){
        button2.classList.add("active");
        button1.classList.remove("active");
    };
    if (number === 3){
        button3.classList.add("active");
        button2.classList.remove("active");
    };
    if (number === 4){
        button4.classList.add("active");
        button3.classList.remove("active");
    };
    if (number === 5 ){
        button5.classList.add("active");
        button4.classList.remove("active");
    };
    if (number === 6){
        button1.classList.add("active");
        button5.classList.remove("active");
    };
    imglist.style.transition = "0.5s ease";
    if (number === 6) {
        number = 0;
        setTimeout(() => {
            imglist.style.top = 0;
            imglist.style.transition = "none";
        } ,500);    
    };
};
// setInterval(auto, 2000);
// 移入鼠标停止轮播
let autoplay = setInterval(auto, 2000);
const stopAuto = document.querySelector(".picture_show");
stopAuto.addEventListener("mouseenter", () => {
    clearInterval(autoplay);
});     
//鼠标移出继续轮播
stopAuto.addEventListener("mouseleave", () => {
    clearInterval(autoplay);
    autoplay = setInterval(auto, 2000);
});