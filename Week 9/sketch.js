function setup() 
{
    createCanvas(400, 400);
}

function draw() 
{
    background(224, 224, 224);
    textSize(22);
    let textWidth = textWidth("SELF PORTRAIT");
    let x = (width - textWidth) / 2;
    let y = height / 2;
    text("SELF PORTRAIT", x, y);

    //head

}