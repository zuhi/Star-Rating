const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');

const ratingDiv = document.querySelector('#rating-result');

function reset() {
    const starDiv = document.querySelectorAll('.star img');
    for(let i =0; i<starDiv.length;i++){
        starDiv[i].src ='./empty-star.png';
    }

}
function hoverChange(starNo){

    const starDiv = document.querySelectorAll('.star img');
    for(let i =0; i<parseInt(starNo);i++){
        starDiv[i].src ='./light-yellow.png';
    }

}

function rating(starNo){
    const starDiv = document.querySelectorAll('.star img');
    for(let i =0; i<parseInt(starNo);i++){
        starDiv[i].src ='./filled-star.png';
    }
    ratingDiv.innerHTML = `You rated ${starNo}/${starDiv.length}`;
}

    
function handler(e) {
  e.stopPropagation();
  e.preventDefault();
}

//Star1 Hover, mouse Out & click
star1.addEventListener('mouseover',(event)=>{
    hoverChange("1");
});

star1.addEventListener("mouseout", event => {
    reset();
  });

star1.addEventListener('click',(event)=>{
    reset();
    rating("1");
    star1.addEventListener("mouseout", handler, true);
    star1.addEventListener("mouseover", handler, true);
});


//Star2 Hover, mouse Out & click
star2.addEventListener('mouseover',(event)=>{
    hoverChange("2"); 
});
star2.addEventListener("mouseout", event => {
    reset();
  });
star2.addEventListener('click',(event)=>{
    reset();
    rating("2");
    star2.addEventListener("mouseout", handler, true);
    star2.addEventListener("mouseover", handler, true);
});


//Star3 Hover, mouse Out & click
star3.addEventListener('mouseover',(event)=>{
    hoverChange("3"); 
});
star3.addEventListener("mouseout", event => {
    reset();
  });
star3.addEventListener('click',(event)=>{
    reset();
    rating("3");
    star3.addEventListener("mouseout", handler, true);
    star3.addEventListener("mouseover", handler, true);
});

//Star4 Hover, mouse Out & click
star4.addEventListener('mouseover',(event)=>{
    hoverChange("4"); 
});
star4.addEventListener("mouseout", event => {
    reset();
  });
star4.addEventListener('click',(event)=>{
    reset()
    rating("4");
    star4.addEventListener("mouseout", handler, true);
    star4.addEventListener("mouseover", handler, true);

});


//Star5 Hover, mouse Out & click
star5.addEventListener('mouseover',(event)=>{
    hoverChange("5"); 
});
star5.addEventListener("mouseout", event => {
    reset();
  });
star5.addEventListener('click',(event)=>{
    reset();
    rating("5");
    star5.addEventListener("mouseout", handler, true);
    star5.addEventListener("mouseover", handler, true);
});