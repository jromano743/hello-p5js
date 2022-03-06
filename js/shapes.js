let ShapeItems = []; //array function that holds cherry blossom items
let colors = [
    [255,0,0],
    [0,255,0],
    [0,0,255],
    [0,255,255],
    [255,255,0],
    [255,0,255],
]

function Circle() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(10, 0 * PI);
    this.size = random(5, 25);

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
            let index = ShapeItems.indexOf(this);
            ShapeItems.splice(index, 1);
        }
    };
    this.display = function() {
        fill(this.color[0], this.color[1], this.color[2])
        ellipse(this.posX, this.posY, this.size);
    };
}

function Heart(){
    this.x = 0;
    this.y = random(-50, 0);;
    this.size = random(5, 30);

    this.initialangle = random(10, 0 * PI);
    this.color = colors[Math.floor(Math.random() * (colors.length - 0)) + 0];
    this.radius = sqrt(random(pow(width / 1, 2)));

    this.update = function(time) {
        // x position follows a circle
        let w = 0.1; // angular speed
        let angle = w * time + this.initialangle;
        this.x = width / 1 + this.radius * tan(angle); //calculates tangent of the angle the items fall
        this.y += pow(this.size, 0.5);

        // delete item if past end of screen
        if (this.y > height) {
            let index = ShapeItems.indexOf(this);
            ShapeItems.splice(index, 1);
        }
    };

    this.display = function() {
        fill(this.color[0], this.color[1], this.color[2])
        beginShape();
        vertex(this.x, this.y);
        bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
        bezierVertex(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
        endShape(CLOSE);
    };
}