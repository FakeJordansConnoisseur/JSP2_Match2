score = 0;
flippedOver = 0;    //how many cards are flipped
square1 = 0;
square2 = 0;


function flipSquare(id) {
    //changes the image of the squares
    if(id == 1 || id == 9) {
        document.getElementById(id).src = "panda1.jpeg";
    }
    if(id == 2 || id == 10) {
        document.getElementById(id).src = "panda2.jpeg";
    }
    if(id == 3 || id == 11) {
        document.getElementById(id).src = "panda3.jpeg";
    }
    if(id == 4 || id == 12) {
        document.getElementById(id).src = "panda4.jpeg";
    }
    if(id == 5 || id == 13) {
        document.getElementById(id).src = "grabbedrat.jpeg";
    }
    if(id == 6 || id == 14) {
        document.getElementById(id).src = "staringrat.jpeg";
    }
    if(id == 7 || id == 15) {
        document.getElementById(id).src = "fluffyrat.gif.MOV";
    }
    if(id == 8 || id == 16) {
        document.getElementById(id).src = "torpedorat.gif.MOV";
    }

    if(flippedOver == 0) {
        if(square1 !== id) {   
            square1 = id;
            flippedOver++;
        }
    } else if(flippedOver == 1) {
        square2 = id;
        flippedOver++;
        matchSquares(square1, square2);
    }
}

//checks to see if the squares match
function matchSquares() {
    flippedOver = 0;    //sets the flipped squares to 0
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
    if(document.getElementById(square1).src == document.getElementById(square2).src) {
        return
    } else {        //sets the image back to the question mark
        document.getElementById(square1).src = "question.png";
        document.getElementById(square2).src = "question.png";
        square1 = square2 = "";
    }
}

//resets the game
function reset() {
    score = 0;
    flippedOver = 0;
    square1 = square2 = "";
    document.getElementById("score").innerHTML = "Score: " + score;
    //resets all grid images to question marks
    for(let i = 1; i <= 16; i++) {
        document.getElementById(i).src = "question.png";
    }
}



//shuffles the images on the grid
function hiddenImages(){
    storage = ["panda1.jpeg","panda2.jpeg", "panda3.jpeg", "panda4.jpeg","fluffyrat.gif.MOV","torpedorat.gif.MOV","grabbedrat.jpeg","staringrat.jpeg"];
    usage = [2,2,2,2,2,2,2,2];
    counter = 1;
    while (counter <= 16){
        var temp = Math.random()*8;
        eval("image"+counter).src =  storage[temp];
        usage[temp]--;
        if (usage[temp]==0){
            usage.splice(temp,1);
        }
    }
    document.getElementById("1").innerHTML.src = img1;
    
}