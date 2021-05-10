var canvas=document.getElementById("Can")
var ctx= canvas.getContext("2d")
car="car.jfif"
background="https://i.pinimg.com/originals/7c/f6/32/7cf632aed6bd21606d27d9d84064ff3a.png"
car_x=10
car_y=50
car_width=200
car_height=90

function add(){
    background_Img=new Image(); //defining a var with a new image
    background_Img.onload= uploadBg; //calling a function on screen load
    background_Img.src=background; //adding the img source

    car_Img=new Image(); //defining a var with a new image
    car_Img.onload= uploadcar; //calling a function on screen load
    car_Img.src=car; //adding the img source
}
function uploadBg(){
    ctx.drawImage(background_Img, 0,0, canvas.width, canvas.height)
}
function uploadcar(){
    ctx.drawImage(car_Img, car_x, car_y, car_width, car_height)
}
window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    keypress = e.keyCode;
    if (keypress == "37") {
        left()
    }
    if (keypress == "38") {
        up()
    }
    if (keypress == "39") {
        right()
    }
    if (keypress == "40") {
        down()
    }
}

function left() {
    if (car_x > 0) {
        car_x = car_x - 10
        uploadBg()
        uploadcar()
    }
}
function right() {
    if (car_x < 700) {
        car_x = car_x + 10
        uploadBg()
        uploadcar()
    }
}
function up() {
    if (car_y > 0) {
        car_y = car_y - 10
        uploadBg()
        uploadcar()
    }
}
function down() {
    if (car_y < 400) {
        car_y = car_y + 10
        uploadBg()
        uploadcar()
    }
}