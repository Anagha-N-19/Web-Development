var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    
    makeSoundForKey(buttonInnerHTML);
    animateButton(buttonInnerHTML);

  });
  document.addEventListener("keydown", function (event){
    
    makeSoundForKey(event.key);
    animateButton(event.key);
  });
}



function makeSoundForKey(key){
 
    switch(key){
      case "w":var t1 = new Audio('./sounds/tom-1.mp3');
        t1.play();
        break;
      case "a":var t2 = new Audio('./sounds/tom-2.mp3');
        t2.play();
        break;
      case "s":var t3 = new Audio('./sounds/tom-3.mp3');
        t3.play();
        break;
      case "d":var t4 = new Audio('./sounds/tom-4.mp3');
        t4.play();
        break;
      case "j":var sn = new Audio('./sounds/snare.mp3');
        sn.play();
        break;
      case "k":var cr = new Audio('./sounds/crash.mp3');
        cr.play();
        break;
      case "l":var kb = new Audio('./sounds/kick-bass.mp3');
        kb.play();
        break;
    }
    
}

function animateButton(currKey){
  var mykey = document.querySelector("." + currKey);
  mykey.classList.add("pressed");
  setTimeout(function (){
    mykey.classList.remove("pressed");
  }, 100)
}