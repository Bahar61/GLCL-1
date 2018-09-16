let titleCarousel = () => {

  let titleCarousel = document.getElementById('title-carousel');
  let left = document.createElement("p");
    left.className = ('leftArrow');
  let right = document.createElement("p");
    right.className = ('righArrow');
  let titleP = document.createElement("p");
    titleP.className = ('title');
    titleCarousel.appendChild(left);
    titleCarousel.appendChild(right);
    titleCarousel.appendChild(titleP);

  let title = document.getElementById("title","rightArrow","leftArrow");

let titleSetter = (newTitle) => {
  title = newTitle;
};
titleSetter('September');
let titleArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
console.log(titleArr[0]);

let titleIndex = 8;
left.addEventListener('click', ()=>{
  if(titleIndex > 0){
    titleIndex--;
    titleSetter(titleArr[titleIndex]);
  }
});
right.addEventListener('click', ()=>{
  if(titleIndex < titleArr.length-1){
    titleIndex++;
    titleSetter(titleArr[titleIndex]);
    }
  });
};

document.addEventListener('DOMContentLoaded', titleCarousel, false);
