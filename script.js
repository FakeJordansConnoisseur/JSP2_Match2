function initialize() {
    score = 0;  //score of user
    flipped = 0; //how many images are flipped over
    const image1 = new Image();
    img2 = "";
    img3 = "";
    img4 = "";
    img5 = "";
    img6 = "";
    img7 = "";
    img8 = "";
    img9 = "";
    img10 = "";
    img11 = "";
    img12 = "";
    img13 = "";
    img14 = "";
    img15 = "";
    img16 = "";

    hiddenImages();
    
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




// //counts the moves of the user
// function moves() {
//     score++;
// }