function dwarfRollCall(dwarves) {
var array = []

for (let i = 0; i < dwarves.length; i++) {
array.push( `${i+1}. ${dwarves[i]} `)

}
return array.join(``)
}

function summonCaptainPlanet(planeteerCalls) {
 let array = []
   for (let i = 0; i < planeteerCalls.length; i++) {
  array.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return array
  }	
  

function longPlaneteerCalls(words) {
 
var longword = false;
 for (var i = 0; i < words.length; i++){
 if(words[i].length > 4){
  longword = true;
  }
   }
   return longword;
  }		  


function findTheCheese (foods) {
 
<<<<<<< HEAD
var cheese = ["cheddar", "gouda", "camembert"];
=======
var cheese = ["blue", "gouda", "swiss"];
>>>>>>> 0c861a0bcec7f232b92409a0e20db6a35e287b15
for (var i = 0; i < cheese.length; i++) {
  if (foods.includes(cheese[i])) {
    return cheese[i];
  }
  }
  return "no cheese!";
  
  }

