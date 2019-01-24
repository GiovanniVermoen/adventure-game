document.getElementsByTagName("body")[0].setAttribute("style", "background: #d9d9d9");

var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var img = document.getElementById("inventoryItem");

var dagger = false
var bow = false
var sword = false

function setText(button1,button2,button3){
	if(button1 != null){
		btn1.style.display = "inline";
		btn1.innerHTML = button1;
	}else{
		btn1.style.display = "none";
	}
	if(button2 != null){
		btn2.style.display = "inline";
		btn2.innerHTML = button2;
	}else{
		btn2.style.display = "none";
	}

	if(button3 != null){
		btn3.style.display = "inline";
	btn3.innerHTML = button3;
	}else{
		btn3.style.display = "none";
	}
}

function Beginscherm(){
	img.src = "images/Begingame.png"
	setText("StartGame", null, null)
	btn1.onclick = StartGame;
	
	title.innerHTML = "Welkom bij: A clicky way to heaven."
	description.innerHTML = "Het doel van dit spel is om bij de duivel te komen en hem dan zo snel mogelijk naar de hemel te brengen."
}
	Beginscherm();

 function StartGame(){
 	img.src = "images/Berg.png"
 	setText("Go to the mountain", "Go back", "Stay")
 	btn1.onclick = Mountain;
 	btn2.onclick = Beginscherm;
 	btn3.onclick = GameOver;

 	title.innerHTML = "The Mountain"
 	description.innerHTML = "You see a mountain what are you gonna do choose between the following options."
 } 

 function GameOver(){
 	img.src = "images/Eindgame.png"
 	setText("Try again", null, null)
 	btn1.onclick = Beginscherm;

 	title.innerHTML = ""

 }

 function Mountain(){
 	img.src = "images/Grot.png"
 	setText("Go into the cave", "Go back", "Stay")
 	btn1.onclick = Cave;
 	btn2.onclick = StartGame;

 	title.innerHTML = "The Cave"
 	description.innerHTML = "The cave choose whisely."
 }

 function Cave(){
 	img.src = "images/Cave.png"
 	setText("Open the chest", "Go back", null)
 	btn1.onclick = Chest;
 	btn2.onclick = Mountain;
 	btn3.onclick = GameOver;

 	title.innerHTML = "The chest of fortune"
 	description.innerHTML = "Open it and see whats inside."
 }

 function Chest(){
 	img.src = "images/Kist.png"
 	setText("Take the dagger", "Take the bow and arrows", "Take the sword")
 	btn1.onclick = DaggerTrue;
 	btn2.onclick = BowTrue;
 	btn3.onclick = SwordTrue;

 	title.innerHTML = "Weapons"
 	description.innerHTML = "choose whise"

 }

function DaggerTrue(){
	Dagger = true
	if (Dagger){
		setText("Go further", null, null)
		img.src = 'images/DaggerGekozen.png'
		
		image = document.createElement("img");
		image.src = 'images/Dagger.png'
		image.setAttribute("id", "dagger");

		description.appendChild(image);
		
		btn1.onclick = bridge;
	}	
}

 function BowTrue(){
	bow = true
	if (bow){
		setText("Go further", null, null)
		img.src = 'images/BowGekozen.png'
		
		image = document.createElement("img");
		image.src = 'images/Bow.png'
		image.setAttribute("id", "bow");

		description.appendChild(image);
		
		btn1.onclick = bridge;
	}	
}

function SwordTrue(){
	sword = true
	if (sword){
		setText("Go further", null, null)
		img.src = 'images/SwordGekozen.png'
		
		image = document.createElement("img");
		image.src = 'images/LongSword.png'
		image.setAttribute("id", "sword");

		description.appendChild(image);
		
		btn1.onclick = bridge;
	}	
}

 function bridge(){
    setText("Keep moving",  (bow ? "Shoot the skull" : null), null)
 	img.src = "images/Brug.png"
 	btn1.onclick = WakeUp;
 	btn2.onclick = Campfire;

 	title.innerHTML = "The bridge"
 	description.innerHTML = "Walk over it."
 }   

 function WakeUp(){
 	setText("Walk towarts the campfire", null, null)
 	img.src = "images/kamp.png"
 	btn1.onclick = Campfire;

 	title.innerHTML = "The camp part 1"
 	description.innerHTML = "Walk it like you talk it."
 }

 function Campfire(){
 	setText("Go further", "Stay", null)
 	img.src = "images/Stakamp.png"
 	btn1.onclick = Omgekeerd;
 	btn2.onclick = GameOver;

 	title.innerHTML = "The camp part 2"
 	description.innerHTML = "see it your self."
 }

 function Omgekeerd(){
 	setText("Ga further", "Go back", null)
 	img.src = "images/Omgekeerd.png"
    btn1.onclick = Campfire;
    btn2.onclick = Castle;

    title.innerHTML = "The strange"
    description.innerHTML = "remember everyting is different so be smart and look at the chooses."
 }

 function Castle(){
 	setText("Enter the castle", "Go back", null)
 	img.src = "images/Kasteel.png"
 	btn1.onclick = Devil;
 	btn2.onclick = Omgekeerd;

 	title.innerHTML = "The castle"
 	description.innerHTML = "Are you afraid to enter or not?"
 }

 function Devil(){
 	setText("Kill the devil", "help the devil the hard and long way", "Go back")
 	img.src = "images/Devil.png"
 	btn1.onclick = KillDevi;
 	btn2.onclick = HelpDevil;
 	btn3.onclick = Castle;

 	title.innerHTML = "The devil"
 	description.innerHTML = "what is the shortest way??"
 }

 function KillDevi(){
 	setText(null, null, null)
 	img.src = "images/Victory.png"

 	title.innerHTML = "Wel done you've won the game"
 	description.innerHTML = " "
 } 

 function HelpDevil(){
 	setText("Try again", null, null)
 	img.src = "images/Eindgame.png"
 	btn1.onclick = Beginscherm;

 }

