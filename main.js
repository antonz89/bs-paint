/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

let brush = document.querySelector(".current-brush");
let brushClassList = brush.classList;

let app = document.querySelector(".app");
let isMouseDown = false;

let canvas = document.querySelectorAll('.canvas div');


let color1 = document.querySelector(".color-1");
let color1ClassList = color1.classList;
  color1.addEventListener("click", function(){
  brushClassList.replace(brushClassList[1],color1ClassList[1]);
});

let color2 = document.querySelector(".color-2");
let color2ClassList = color2.classList;
    color2.addEventListener("click", function(){
  brushClassList.replace(brushClassList[1],color2ClassList[1]);
});

let color3 = document.querySelector(".color-3");
let color3ClassList = color3.classList;
  color3.addEventListener("click", function(){
  brushClassList.replace(brushClassList[1],color3ClassList[1]);
});

let color4 = document.querySelector(".color-4");
let color4ClassList = color4.classList;
  color4.addEventListener("click", function(){
  brushClassList.replace(brushClassList[1],color4ClassList[1]);
});

let color5 = document.querySelector(".color-5");
let color5ClassList = color5.classList;
  color5.addEventListener("click", function(){
  brushClassList.replace(brushClassList[1],color5ClassList[1]);
});


for(let i = 0; i<canvas.length;i++){
   

    canvas[i].addEventListener("mouseover", function(){
      if (isMouseDown === true){
      let canvasClassList = canvas[i].classList;
      canvasClassList.replace(canvasClassList[1],brushClassList[1]);
      }
    })    
}

app.addEventListener("mousedown",function(){
  isMouseDown = true;
})

app.addEventListener("mouseup",function(){
  isMouseDown = false;
})









    
  
          











/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
