const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');

const ratingDiv = document.querySelector('#rating-result');

function rating(starNo){
    const starDiv = document.querySelectorAll('.star img');
    console.log(starDiv.length);
    for(let i =0; i<parseInt(starNo);i++){
        starDiv[i].src ='./filled-star.png';
    }
    ratingDiv.innerHTML = `You rated ${starNo}/${starDiv.length}`;
}

star1.addEventListener('click',(event)=>{
    rating("1");
});

star2.addEventListener('click',(event)=>{
    rating("2");
});

star3.addEventListener('click',(event)=>{
    rating("3");
});
star4.addEventListener('click',(event)=>{
    rating("4");
});
star5.addEventListener('click',(event)=>{
    rating("5");
});