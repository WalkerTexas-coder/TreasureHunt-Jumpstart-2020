var treasureChest= Math.ceil(Math.random() * 25)
var bomb = Math.ceil(Math.random() * 25);

var counter = 10

while(bomb === treasureChest){
    bomb = Math.ceil(Math.random() * 25);
};


/*var changeChar = (location) => {
    if (location ==  bomb){
        document.getElementById(location).innerHTML = "BOMB"
        alert("Youre'dead!")
    } else if ( location === treasureChest) {
        document.getElementById(location).innerHTML = "MONIES"
        alert("YOU WIN")
    } else { document.getElementById(location).innerHTML = "Tree"
 }
}
*/

var changeChar = ( location ) => {
    counter = counter - 1 
        document.getElementById("counter").innerHTML = counter
    
     if ( location == bomb ) {
        document.getElementById( location ).innerHTML = "BOOM!"
        alert ( "ded ded" );
          window.location.reload();
    } else if ( location === treasureChest ) {
        document.getElementById(location).innerHTML = "Treasure Chest"
        alert ("YOU FOUND THE TREASURE. YOU WIN!!!!!!!!"); 
        window.location.reload();
        } else if ( counter === 0 ){ 
          alert ( "Game Over" );
          window.location.reload();
          
             
   }  else { document.getElementById(location).innerHTML = "&#x1f332" 
    } 
}



   
    


var reloadPage = () => {
    location.reload()
}