let petals = []; //array function that holds cherry blossom petals
let colors = [
    [255,0,0],
    [0,255,0],
    [0,0,255],
    [0,255,255],
    [255,255,0],
    [255,0,255],
]

function setup() {
    createCanvas(1980, 1080);
    //stroke(127,63,120);
    fill(0,0,0);
    noStroke();
}

function draw() {
    background(0, 0, 0);
    let t = frameCount / 100; //updates time

    for (var i = 0; i < 10; i++) {
        petals.push(new Petal()); //append petal object
    } //random number of petals each frame

    //loop through petals
    for (let blossom of petals) {
        blossom.update(t); //update petal position
        blossom.display(); //draw petal
    }
}

function Petal() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(10, 0 * PI);
    this.size = random(5, 25);
    ellipse(10, 20, 20, 7);
    this.color = colors[Math.floor(Math.random() * (colors.length - 0)) + 0];

    this.radius = sqrt(random(pow(width / 1, 2)));
    this.update = function(time) {
        // x position follows a circle
        let w = 0.1; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = width / 1 + this.radius * tan(angle); //calculates tangent of the angle the petals fall
        this.posY += pow(this.size, 0.5);

        // delete petal if past end of screen
        if (this.posY > height) {
            let index = petals.indexOf(this);
            petals.splice(index, 1);
        }
    };
    this.display = function() {
        fill(this.color[0], this.color[1], this.color[2])
        ellipse(this.posX, this.posY, this.size);
    };
}

function ellipseLoop(){
    if (mouseIsPressed) {
        fill(214,35,35);
    } else {
        fill(4,39,30);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

function loadBar(){
    background(255,100,0);
    rect(99, 180, width, 20);
    width++;
    if(width > 200) width = 20;
}