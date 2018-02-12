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
 
var long = false;
 for (var i = 0; i < words.length; i++){
 if(words[i].length > 4){
  long = true;
  }
   }
   return long;
  }		  


function findTheCheese (foods) {
 
var cheese = ["cheddar", "gouda", "thyme"];
for (var i = 0; i < cheese.length; i++) {
  if (foods.includes(cheese[i])) {
    return cheese[i];
  }
  }
  return "no cheese!";
  
  }

