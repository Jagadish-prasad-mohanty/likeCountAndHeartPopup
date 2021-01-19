const myArea=document.querySelector(".inner-div");
const clickCount=document.querySelector(".clickCount");

const showHeart = (e) =>{
    const heart=document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    heart.classList.add("transformHeart");
    myArea.appendChild(heart);

    setTimeout((e) => {
        heart.remove()
    }, 800);

}

let likeCount=0;

myArea.addEventListener('dblclick',(e) => {
    clickCount.innerHTML= ++likeCount;
    showHeart(e);
});