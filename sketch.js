let stars=[];  //(x,y,z)
let factor=100;
// let starX;
// let starY;
// let starZ;
let speedSlider;
let width, height;

function setup() {
  width=windowWidth;
  height=windowHeight;
  createCanvas(width, height);
  speedSlider=createSlider(0, 20, 1, 1);
  for (let i=0; i<500; i++) {
    stars[i]=createVector(
      random(-width*factor, width*factor), 
      random(-height*factor, height*factor), 
      random(width) );  //x,y,z
    stars[i].pz=stars[i].z;
  } //stars[i] => {x, y, z, pz}
} 

function draw() {
  background(0);
  fill(255);
  translate(width/2, height/2);
  //for star in stars:
  for (let star of stars) {
    let x=star.x/star.z;
    let y=star.y/star.z;
    let px=star.x/star.pz;
    let py=star.y/star.pz;

    let d=map(star.z, 0, width, 10, 1);
    fill(255);
    noStroke();
    circle(x, y, d);
    stroke(255);
    line(x, y, px, py);
    star.pz=star.z;
    //rect(x,y,d);
    //textSize(d*2);
    //text(int(random(1,10)), x, y);
    star.z -= speedSlider.value(); 
    if (star.z<1) {
      star.x=random(-width*factor, width*factor);
      star.y=random(-height*factor, height*factor);
      star.z=width;
      star.pz=width;
    }
  }
  // rectMode(CENTER);
  // rect(mouseX, mouseY, 100);
}
