const storyData = [
  {
    sceneId: "1",
    sceneDetails: { 
      sceneImage: "images/background/backgroundImage1.jpg",
      storyText: "some story text",
      name: "character name",
      characterIcon: "character Icon",
      option: {
        choice1: "choice text 1",
        choice2: "choice text 2",
      }
    }
  },

  {
  sceneId: "2",
  sceneDetails: {
    sceneImage: "scene image 2",
    storyText: "some story text 2",
    name: "character name 2",
    characterIcon: "character Icon 2",
    option: {
      choice1 : "choice text 1.1",
      choice2 : "choice text 2.1",
    }
  }
}, 

{
  sceneId: "3",
  sceneDetails: {
    sceneImage: "scene image 3",
    storyText: "some story text 3",
    name: "character name 3",
    characterIcon: "character Icon 3",
    option: {
      choice1 : "choice text 1.2",
      choice2 : "choice text 2.2",
    }
  }
}, 

];

let currentSceneIndex = -1; //Track the current scene
let currentScene = storyData.length

//The test of appearing in the console 


function displayScene(scene) {
  const previousSceneDiv = document.getElementById("scene-container");
  if (document.getElementById(`scene-${scene.sceneId}`)) {// Adjust the delay as needed
    return; // Skip displaying the scene if it's already displayed
  }
 
  // Create a div element for the scene
  const sceneDiv = document.createElement("div");
  sceneDiv.id = "scene-container";
  // Add scene details to the div
  sceneDiv.innerHTML = `
  <div id="whole-game">
  <div id="game-container">
    <img id="background-image">${scene.sceneDetails.sceneImage}
    <img id="character-icon">${scene.sceneDetails.characterIcon}
    </div>
  <div id="textbox">
    <h2>${scene.sceneDetails.name}</h2>
    <p>${scene.sceneDetails.storyText}</p>
    <p>${scene.sceneDetails.option.choice1}</p>
    <p>${scene.sceneDetails.option.choice2}</p>
    </div>
    </div>
  `;

  // Append the div to the document body
  document.body.appendChild(sceneDiv);
}


//The loop to show the storyData of each nested object in the array
  for(let i = 0; i < storyData.length; i++){
    //Create a div element here
  }

  function startButton() {
      document.getElementById("default-setting").style.display = "none";
      startGame();
      const spaceKeyEvent = new KeyboardEvent('keydown', { key: ' ' });
    document.dispatchEvent(spaceKeyEvent);
  };


  function startGame(){
    // Space bar to skip dialogue
    document.addEventListener('keydown', function(event) {
      if (event.key === ' ') {
        // Spacebar: Continue the scene
        if (currentSceneIndex < storyData.length - 1) {
          currentSceneIndex++; // Move to the next scene
          const currentScene = storyData[currentSceneIndex];
          displayScene(currentScene);   
          //Displays on the console the number of an array
          console.log(currentSceneIndex); 

          //Win condition
          if (currentSceneIndex === 2){
            console.log('you find a key');
          };
        }}
    });
  };

// Key 'R' resets the scene to the begging
document.addEventListener("keydown", function(event) {
  if (event.key === 'r') {
    location.reload();
  }
});

//create the winning condition