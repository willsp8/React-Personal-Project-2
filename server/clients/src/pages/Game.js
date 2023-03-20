import React from 'react';
import ReactDOM from 'react-dom/client';
import { Parser } from 'html-to-react'

const rawHTML = `
<div style="display: inline-block; position: relative;">
  <!-- this div will be the rectangle that fills up the entire screen when player goes into battle -->
  <!-- the psotion: absolute in style makes sure that the div is layed over top of the screen -->
  <div id ="overlappingDiv" style="background-color: black; position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0; pointer-events: none; z-index: 10;">

  </div>

  <canvas id="canvas1"></canvas>
  <canvas id="canvas2"></canvas>
  
  <div id="menu" >
      <div  style="background-color: white;  height: 140px; position: absolute; bottom: 0; left: 0; right: 0; border-top: 4px black solid; display: flex; cursor: pointer;">
          <!-- attack options -->
          <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: white; padding: 12px; display: none;"> ashdjfgaskdfgh</div>
         
          <div id="listOfIems"style="width: 66.66%; display: grid; "> 
              <!-- <button id="inventCoffee" > </button>
              
              <button id="inventCheese"> </button>
              <button id="inventGreenTea"> </button> -->
          </div>
          <div style=" align-items: center; justify-content: center; width: 33.33%; border-left: 4px black solid">
              
              <!-- <p id='wallet' style="font-size: 16px;">Attack type</p>
              <p id='healthLevel' style="font-size: 16px;">Attack type</p> -->
          </div>
      </div>

  </div>
  <div id="playersHUB">
      
      <div class="wrapper" style="height: 300px; width: 400;  position: absolute; bottom: 100; right: 100; top: 100; border: 4px; display: flex; cursor: pointer;">
          <div class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: -70; left: -100;  height: px; width: 260;">
              
              <p  id='pHealth'style="font-size: 12px;">Health Level: 100</p>
              <p  id='pMagic'style="font-size: 12px;">magic Level: 1000</p>
              <p  id='pEnergy'style="font-size: 12px;">energy Level: 100</p>
              
              
              
          </div>
          <div id='pWalletDiv'class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: 400; left: -810;  height: 45px; width: 130px;">
              <p id='pWallet' style="font-size: 16px;">$400</p>
              
              
          </div>
          
          <!-- shows you how much items you have when you hover over it -->
          <div id='pStatsDiv' class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: 336; left: -100;  height: 100px; width: 250;">
              <p id='pGreenTea' style="font-size: 16px;">Green Tea: 2</p>
              <p id='pCoffee' style="font-size: 16px;">Coffee: 1</p>
              <p id='catTreats' style="font-size: 16px;">Cat Treats: 2</p>
          </div>
          
          <div id='pWalletTalkingDiv'class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: 260; left: -810;  height: 45px; width: 130px;">
              <p id='pWalletTalking' style="font-size: 16px;">$400</p>
              
              
          </div>
          
          <!-- shows you how much items you have when you hover over it -->
          <div id='pStatsTalkingDiv' class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: 200; left: -100;  height: 100px; width: 250;">
              <p id='pGreenTeaTalking' style="font-size: 16px;">Green Tea: 2</p>
              <p id='pCoffeeTalking' style="font-size: 16px;">Coffee: 1</p>
              <p id='catTreatsTalking' style="font-size: 16px;">Cat Treats: 2</p>
          </div>
          
          
      </div>  
  </div>
  
  
  <div id="menuHUB">
      
      <div class="wrapper" style="height: 200px; width: 400;  position: absolute; bottom: 100; right: 400; top: 100; border: 4px black solid; display: flex; cursor: pointer;">
          <div class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: 240; left: -300;  height: 150px; width: 260;">
              <p id='playersWallet' style="font-size: 12px;">Wallet: $0</p>
              <p id='PlayersHealthLevel' style="font-size: 12px;">Health Level: </p>
              <p id='playersMagicLevel' style="font-size: 12px;">Magic Level:</p>
              <p id="PlayerInventCoffee" style="font-size: 12px;">Coffee: </p>
              <p id="playerInventGreenTea" style="font-size: 12px;">Green Tea: </p>
              
              
              
          </div>
          <div class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: -4; left: -300;  height: 196px; width: 260;">
              
              
              
          </div>
          
          <!-- shows you how much items you have when you hover over it -->
          <div class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: 240; left: -4;  height: 150px; width: 397;">
              <p style="font-size: 16px;">Quest 1: feed Cat </p>
              <p style="font-size: 16px;">Quest 2: Make backpack </p>
              
              
          </div>
          
          <div id="inventBox1" style="width: 33.33%; display: grid; grid-template-columns: repeat(2, 4fr); position: absolute;  left: 0; height: 200px; width: 400"> 
              
              <button  class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >Use: Coffee</button>
              <button  class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >Use: Green Tea</button>
              
              <!-- use for crafting-->
               <!-- <select class="box box2" id="inventGreenTea" style=" border: 2px black solid; border-left: 3px black solid">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option style="background: url(https://media0.giphy.com/media/3og0IGjLXRttYbbtcc/200w.webp?cid=ecf05e4701qrjrukqg7gbe2x5ic8cfprh0ntx1s28hajyxhu&rid=200w.webp&ct=g); value="audi">Audi</option>
                </select>  -->
              
              <!-- <button class="box box2" id="inventGreenTea" style=" border: 2px black solid; border-left: 3px black solid" > </button>
              <button class="box box2" id="inventCheese" style=" border: 2px black solid; border-left: 3px black solid" > </button>
              <button class="box box2" id="inventCoffee" style=" border: 2px black solid; border-left: 3px black solid" > </button>
              <button class="box box2" id="inventkey" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >  </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style="background: 
              url(https://media0.giphy.com/media/3og0IGjLXRttYbbtcc/200w.webp?cid=ecf05e4701qrjrukqg7gbe2x5ic8cfprh0ntx1s28hajyxhu&rid=200w.webp&ct=g); background-size: 12px 12px; border: 2px black solid"> hey</button>         
           -->
          </div>
      </div>  
  </div>
  <div id="inventory">
      
      <div class="wrapper" style="height: 200px; width: 400;  position: absolute; bottom: 100; right: 100; top: 100; border: 4px black solid; display: flex; cursor: pointer;">
          <div class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: 240; left: -300;  height: 150px; width: 260;">
              <p id='wallet' style="font-size: 12px;">Wallet: $0</p>
              <p id='healthLevel' style="font-size: 12px;">Health Level: </p>
              <p id='magicLevel' style="font-size: 12px;">Magic Level:</p>
              <p id="inventCoffee" style="font-size: 12px;">Coffee: </p>
              <p id="inventGreenTea" style="font-size: 12px;">Green Tea: </p>
              
              
              
          </div>
          <div class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: -4; left: -300;  height: 196px; width: 260;">
              <p id='wallet' style="font-size: 16px;">$0</p>
              
              
          </div>
          
          <!-- shows you how much items you have when you hover over it -->
          <div class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute; top: 240; left: -4;  height: 150px; width: 397;">
              <p style="font-size: 16px;">you have this many items of blank </p>
              <p style="font-size: 16px;">restores health</p>
              
          </div>
          
          <div id="inventBox" style="width: 33.33%; display: grid; grid-template-columns: repeat(2, 4fr); position: absolute;  left: 0; height: 200px; width: 400"> 
              
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >  </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              
              <!-- use for crafting-->
               <!-- <select class="box box2" id="inventGreenTea" style=" border: 2px black solid; border-left: 3px black solid">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option style="background: url(https://media0.giphy.com/media/3og0IGjLXRttYbbtcc/200w.webp?cid=ecf05e4701qrjrukqg7gbe2x5ic8cfprh0ntx1s28hajyxhu&rid=200w.webp&ct=g); value="audi">Audi</option>
                </select>  -->
              
              <!-- <button class="box box2" id="inventGreenTea" style=" border: 2px black solid; border-left: 3px black solid" > </button>
              <button class="box box2" id="inventCheese" style=" border: 2px black solid; border-left: 3px black solid" > </button>
              <button class="box box2" id="inventCoffee" style=" border: 2px black solid; border-left: 3px black solid" > </button>
              <button class="box box2" id="inventkey" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >  </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style=" border: 2px black solid; border-left: 3px black solid" >   </button>
              <button class="box box2" style="background: 
              url(https://media0.giphy.com/media/3og0IGjLXRttYbbtcc/200w.webp?cid=ecf05e4701qrjrukqg7gbe2x5ic8cfprh0ntx1s28hajyxhu&rid=200w.webp&ct=g); background-size: 12px 12px; border: 2px black solid"> hey</button>         
           -->
          </div>
      </div>  
  </div>
  <div id="npcUserInterface">
      <div  style="background-color: white;  height: 140px; position: absolute; bottom: 0; left: 0; right: 0; border-top: 4px black solid; display: flex; cursor: pointer;">
          <!-- attack options -->
          <div id='dialogueBoxForNpc' style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: white; padding: 12px; display: none;"> ashdjfgaskdfgh</div>
          
          <div id="answer"style="width: 66.66%; display: grid; grid-template-columns: repeat(2, 1fr); "> 
              <!--options -->
              <button>hey</button>
              <button>where am I?</button>
              <button>how do i beat this game? </button>
              <button>Who Are You?</button>
              <button>Buy Coffee</button>
              <button>Buy Green Tea</button>
              <button>Upgrade Health</button>
              <button>load house</button>
              <button>load coffee shop</button>
              <button>load Town 1</button>
              <button>load libary</button>
              <button>outside</button>
              <button>Bye!</button>
          </div>
          
          
      </div>

  </div>
  <div id="librainanNPCInterface">
      <div  style="background-color: white;  height: 140px; position: absolute; bottom: 0; left: 0; right: 0; border-top: 4px black solid; display: flex; cursor: pointer;">
          <!-- attack options -->
          <div id='dialogueBoxForlibrainan' style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: white; padding: 12px; display: none;"> ashdjfgaskdfgh</div>
          
          <div id="answerLibrainan"style="width: 66.66%; display: grid; grid-template-columns: repeat(2, 1fr); "> 
              <!--options -->
              <button>hey</button>
              <button>heey</button>
          </div>
          
          
      </div>

  </div>
  <div id="officeNPCInterface">
      <div  style="background-color: white;  height: 140px; position: absolute; bottom: 0; left: 0; right: 0; border-top: 4px black solid; display: flex; cursor: pointer;">
          <!-- attack options -->
          <div id='dialogueBoxForoffice' style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: white; padding: 12px; display: none;"> ashdjfgaskdfgh</div>
          
          <div id="answeroffice"style="width: 66.66%; display: grid; grid-template-columns: repeat(2, 1fr); "> 
              <!--options -->
              <button>what do you want</button>
              <button>heey</button>
          </div>
          
          
      </div>

  </div>
  <div id="ComputerInterface">
      <div  style="background-color: white;  height: 140px; position: absolute; bottom: 0; left: 0; right: 0; border-top: 4px black solid; display: flex; cursor: pointer;">
          <!-- attack options -->
          <div id='dialogueBoxForComputer' style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: white; padding: 12px; display: none;"> ashdjfgaskdfgh</div>
          
          <div id="answerComputer"style="width: 66.66%; display: grid; grid-template-columns: repeat(2, 1fr); "> 
              <!--options -->
              <button>look up </button>
              <button>heey</button>
          </div>
          
          
      </div>

  </div>
  <div id="baristaInterface">
      <div class="box box2" style="height: 140px; position: absolute; bottom: 0; left: 0; right: 0; border-top: 4px black solid; display: flex; cursor: pointer;">
          <!-- attack options -->
          <div class="box box2" id='dialogueBoxForBarista' style=" background-color: rgb(0, 0, 0); position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: none;"> ashdjfgaskdfgh</div>
          
          <div class="box box2" id="answerBarista"style="width: 66.66%; display: grid; grid-template-columns: repeat(2, 1fr); "> 
              <!--options -->
              <button class="box box2">Buy Coffee</button>
              <button class="box box2" >Buy Green Tea</button>

          </div>
          
          
      </div>

  </div>
  <div id="catNPCInterface">
      <div class="box box2" style=" height: 140px; position: absolute; bottom: 0; left: 0; right: 0; border-top: 4px black solid; display: flex; cursor: pointer;">
          <!-- attack options -->
          <div  id='dialogueBoxForCat' style="background-color: rgb(0, 0, 0);  position: absolute; top: 0; right: 0; bottom: 0; left: 0;  padding: 12px; display: none;"> ashdjfgaskdfgh</div>
          
          <div class="box box2" id="answerCat"style="width: 66.66%; display: grid; grid-template-columns: repeat(2, 1fr); "> 
              <!--options -->
              <button class="box box2">Feed Cat</button>
              <button class="box box2">Pet Cat</button>
          </div>
          
          
      </div>

  </div>
  <div  id="craftingInterface">
      <div class="wrapper" style="height: 200px; width: 200;  position: absolute; bottom: 50; right: 200; top: 200;  display: flex; cursor: pointer; height: 200px; width: 300">
          <!-- attack options -->
          <div class="box box2" style=" align-items: center; justify-content: center; width: 33.33%; border: 6px black solid; position: absolute;  left: -300;  height: 196px; width: 260;">
              <p id='couldCraft'style="font-size: 16px;">$0</p>
              
              
          </div>
          
          <div class="box box2" style="width: 33.33%; display: grid; grid-template-columns: repeat(3, 1fr); border: 3px black solid;  height: 196px; width: 400;"> 
              <!--options -->
              <!-- this will be used for the crafting system-->
              <a style="border: 5px black solid; background: 
                  url(https://media0.giphy.com/media/3og0IGjLXRttYbbtcc/200w.webp?cid=ecf05e4701qrjrukqg7gbe2x5ic8cfprh0ntx1s28hajyxhu&rid=200w.webp&ct=g);">  
              
                  
                  <label for="vehicle11" style="font-size: 12px; height: 100"> coffee </label><br>
                 
                  <input  type="checkbox" id="vehicle11" name="vehicle11" value="coffee"><br>
              </a>
              <a style="border: 5px black solid; background: 
                  url(https://media0.giphy.com/media/3og0IGjLXRttYbbtcc/200w.webp?cid=ecf05e4701qrjrukqg7gbe2x5ic8cfprh0ntx1s28hajyxhu&rid=200w.webp&ct=g);">  
              
                  
                  <label for="vehicle12" style="font-size: 12px; height: 100"> coffee </label><br>
                 
                  <input  type="checkbox" id="vehicle12" name="vehicle12" value="Bike"><br>
              </a>
             

              <button> submit</button>
              
            
              
              
          </div>
          
          
      </div>

  </div>
  <div id="userInterface">
          <!-- helth interface for emby -->
      <div style="background-color: white; width: 250px; position: absolute; top: 300px; right: 50px; border: 4px black solid; padding: 12px;">
          <p sytle="font-size: 16px;"> emby </p>
          <!-- helth bar-->
          <div styel="position: relative">
              <div style="height: 5px; background-color: #ccc; margin-top: 10px;"></div>
              <p id="playerHealthBar_2"  > 200</p>
              <p id="playerMagicBar_2"  > 200</p>
              <div id="playerHealthBar"  style="height: 5px; background-color: green; top: 0; left: 0; right: 0;"></div>
              <div id="playerMagicBar"  style="height: 5px; background-color: blue; top: 0; left: 0; right: 0;"></div>
          </div>
          
      </div>

      <!-- helth interface for draggle -->
      <div style="background-color: white; width: 250px; position: absolute; top: 50px; left: 50px; border: 4px black solid; padding: 12px;">
          <p sytle="font-size: 16px;"> Draggle</p>
          <!-- helth bar-->
          <div styel="position: relative">
              
              <div style="height: 5px; background-color: #ccc; margin-top: 10px;"></div>
              <p id="enemyHealthBar_2"  > 200</p>
              <div id="enemyHealthBar" style="height: 5px; background-color: green; top: 0; left: 0; right: 0;"></div>
              <!--<div id="enemyMagicBar" style="height: 5px; background-color: blue; top: 0; left: 0; right: 0;"></div> -->
          </div>
          
      </div>
      

      <!-- interface div-->
      <div  style="background-color: white;  height: 140px; position: absolute; bottom: 0; left: 0; right: 0; border-top: 4px black solid; display: flex; cursor: pointer;">
          <!-- attack options -->
          <div id='dialogueBox' style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: white; padding: 12px; display: none;"> ashdjfgaskdfgh</div>
          <div id="attacksBox"style="width: 66.66%; display: grid; grid-template-columns: repeat(2, 1fr); "> 
              <!-- -->
              
              
          </div>
          <!-- all items-->
          <div id="ItemsBox"style="width: 33.33%; display: grid; grid-template-columns: repeat(2, 1fr); "> 
              <!-- -->
              
              
          </div>
          <div style=" display: flex; align-items: center; justify-content: center; width: 33.33%; border-left: 4px black solid">
              <p id='attackType' style="font-size: 16px;">Attack type</p>
          </div>
      </div>
  </div>
  

</div>

</div>


`;

export const Game = () =>{
    document.getElementById("sally").innerHTML = rawHTML
    
    return( 
        
        <div className="App">
        
        </div>
    )
}