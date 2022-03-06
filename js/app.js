function setup() {
    let width = window.screen.width;
    let height = window.screen.height;
    createCanvas(width, height);
    //stroke(127,63,120);
    fill(0,0,0);
    noStroke();
}

function draw() {
    background(0, 0, 0);
    let t = frameCount / 100; //updates time

    for (var i = 0; i < 10; i++) {
        if(ShapeItems.length > 1500) break;
        ShapeItems.push(new Circle()); //append petal object
    } //random number of ShapeItems each frame

    //loop through ShapeItems
    for (let item of ShapeItems) {
        item.update(t); //update petal position
        item.display(); //draw petal
    }
}