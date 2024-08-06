///Utility
function $(id){
    return document.getElementById(id);
}

/// HTML elements

//state
var state={};

//constants
const GameLength    = 28;
const SeasonLength  =  7;

//buttons
const rotateButton = $("rotate");
const mirrorButton = $("mirror");

//cursor
var cursorX;
var cursorY;

//elements
const elementTypes = ["farm", "water", "forest", "building"]; //type of elements

const elements = [ //shape of elements
    {
        time: 2,
        type: 'water',
        shape: [[0,0,0],
                [1,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[0,0,0],
                [1,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[0,0,0],
                [1,1,1],
                [0,0,1]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[0,0,0],
                [1,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[0,0,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[0,0,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[0,0,0],
                [0,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
];

//Missions data
const missions = 
[
    {
    
      title: "Az erdő széle",
      description: "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.",
      image: "assets/missions_hun/Group 69.png",
      score: azerdoszeleScore
    },
    {
      title: "Álmos-völgy",
      description: "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.",
      image: "assets/missions_hun/Group 74.png",
      score: almosvolgyScore
    },
    {
      title: "Krumpliöntözés",
      description: "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.",
      image: "assets/missions_hun/Group 70.png",
      score: krumpliontozesScore
    },
    {
      title: "Határvidék",
      description: "Minden teli sorért vagy oszlopért 6-6 pontot kapsz.",
      image: "assets/missions_hun/Group 78.png",
      score: hatarvidekScore
    },
    {
      title: "Fasor",
      description: "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.",
      image: "assets/missions_hun/Group 68.png",
      score: fasorScore
    },
    {
      title: "Gazdag város",
      description: "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.",
      image: "assets/missions_hun/Group 71.png",
      score: gazdagvarosScore
    },
    {
      title: "Öntözőcsatorna",
      description: "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.",
      image: "assets/missions_hun/Group 75.png",
      score: ontozocsatornaScore
    },
    {
      title: "Mágusok völgye",
      description: "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.",
      image: "assets/missions_hun/Group 76.png",
      score: magusokvolgyeScore
    },
    {
      title: "Üres telek",
      description: "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.",
      image: "assets/missions_hun/Group 77.png",
      score: urestelekScore
    },
    {
      title: "Sorház",
      description: "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.",
      image: "assets/missions_hun/Group 72.png",
      score: sorhazScore
    },
    {
      title: "Páratlan silók",
      description: "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.",
      image: "assets/missions_hun/Group 73.png",
      score: paratlansilokScore
    },
    {
      title: "Gazdag vidék",
      description: "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.",
      image: "assets/missions_hun/Group 79.png",
      score: gazdagvidekScore
    }
];

//mission
const missionsUI = $("missions");

//time
const placeTime = $("placeTime");
const timeLeft = $("currentTimeLeft");
const seasonUI = $("currentSeason");
const seasons = ["Tavasz", "Nyár", "Ősz", "Tél"];

//map
const map = $("map");
state.mapMatrix = [];

//tileprewiev
const tilePreview = $("tilePreview");
var tilePreviewMatrix = []

//mountain tiles
const mountains = ["1-1", "3-8", "5-3", "8-9", "9-5"];

//map size
var mapSize = 11;

/// Eventlisteners
window.addEventListener("load", init);
document.addEventListener("keydown", keyHandler);

/// Game functions

//initialize
function init(){
    //Hide Gameover
    $("gameOverContainer").style.visibility="hidden";
    $("gameOverContainer").removeEventListener("click",init);

    //map init
    let s = "";
    for(let i = 0; i<mapSize; i++){

        state.mapMatrix[i] = []; //declare mapMatrix

        s += `<div class="tr">`;    //tr start
        for(let j = 0; j<mapSize; j++){
            s += `<div class="`;
            
            if( mountains.includes(`${i}-${j}`)){ // if the tile is mountain
                s += `mountain`;  // mountain tile
                state.mapMatrix[i][j] = "mountain";
            }
            else{
                s += `empty`;       // base tile
                state.mapMatrix[i][j] = undefined;
            }

            s += `" id="${i}-${j}-map"></div>`
        }
        s += `</div>`;              //tr end
        
    }
    map.innerHTML = s;

    //add event to all tiles
    for(let i = 0; i < 11; i++){
        for(let j = 0; j < 11; j++){
            let e = $(`${i}-${j}-map`);
            e.addEventListener("mouseover",hoverEvent);
            e.addEventListener("mouseout",hideEvent);
            e.addEventListener("click",placeItem);
        }
    }

    //tilePreview init
    s = "";
    for(let i = 0; i < 3; i++){
        tilePreviewMatrix[i] = []; //declare tilePreviewMatrix

        s += `<div class="tr">`;
        for(let j = 0; j < 3; j++){
            s += `<div class="empty" id="${i}-${j}-pre"></div>`;
        }
        s += `</div>`; 
    }
    tilePreview.innerHTML = s;

    //buttons init
    rotateButton.addEventListener("click",rotate);
    mirrorButton.addEventListener("click",mirror);

    //load saved game state
    initState();
}

//initialize game state
function initState(){
    

    //Nextelement, Nextelement UI, Nextelement display
    state.nextElement = getRandomElementShape();
    placeTime.innerHTML = state.nextElement.time;
    displayElementPre();

    //init score
    state.seasonScore  = [0,0,0,0];
    state.missionScore = [0,0,0,0];
    state.sumScore     = 0;

    //init score UI
    for(let i = 0; i < seasons.length;i++){
        $(`score${i}`).innerHTML = 0;
    }
    $("score").innerHTML = 0;

    //init missions
    setMissions();

    //init time
    state.time = 0;
    manageTime();
}

//get next element
function getRandomElementShape(){
    return elements[Math.floor(Math.random() * elements.length)];
}

//place item
function placeItem(e){
    let s = e.target.id.split('-');
    let ox = parseInt(s[1]);                                 //x
    let oy = parseInt(s[0]);                                 //y
    if(isPlaceable(ox-1,oy-1) ){                             //check if placeable
        hideElementHoverMap(cursorX,cursorY);               //hides hover before placing
        displayElementMap(ox-1,oy-1);                       //places it
        for(let i = 0; i < state.nextElement.time; i++){    //steps the time one by one
            state.time += 1;
            manageTime();                                   //manages timeUI, scores
        }
        state.nextElement = getRandomElementShape();        //next element
        placeTime.innerHTML = state.nextElement.time;       //next element's place time UI
        displayElementPre();                                //display next element
        displayElementHoverMap(cursorX,cursorY);            //hover comes back
        isGameOver();
        
    }

}

///DISPLAY

function do3x3(cb){
    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            cb(i,j);
        }
    }
}

//Iterating throug 3x3 tiles
//needs a callback function (displayTileMap, displayTilePre, isPlaceable, displayHover)
function iterateTiles(ox = 0, oy = 0, callback){
    let mirror = state.nextElement.mirrored ? 2 : 0;                //mirror helper
    if(state.nextElement.rotation===0){                             //no rotation
        do3x3(function(i,j){
            if(state.nextElement.shape[Math.abs(i-mirror)][j]) {
                callback(j+ox,i+oy);
            }
        });
    }
    else if(state.nextElement.rotation===1){                        //rotate 90
        do3x3(function(i,j){
            if(state.nextElement.shape[Math.abs(i-mirror)][j]) {
                callback(2-i+ox,j+oy);
            }
        });
    }
    else if(state.nextElement.rotation===2){                        //rotate 180
        do3x3(function(i,j){
            if(state.nextElement.shape[Math.abs(i-mirror)][j]) {
                callback(2-j+ox,2-i+oy);
            }
        });
    }
    else if(state.nextElement.rotation===3){                        //rotate 270
        do3x3(function(i,j){
            if(state.nextElement.shape[Math.abs(i-mirror)][j]) {
                callback(i+ox,2-j+oy);
            }
        });
    }
}

//Checks if you can place on the tile
//needs x and y target coordinates
//returns a bool -> true: placeable, false: occupied (tile)
function checkTileMap(x,y){
    if(x<0 || x>10 || y<0 || y>10) return false;
    return (state.mapMatrix[y][x] === undefined);         //checks tile
}

//Display 1 tile on the map
//needs x and y target coordinates
function displayTileMap(x,y){
    let e = $(`${y}-${x}-map`);                         //e: target element 
    e.className = state.nextElement.type;               //changing looks
    state.mapMatrix[y][x] = state.nextElement.type;     //store in model
}

//Display 1 tile on the preview
//needs x and y target coordinates
function displayTilePre(x,y){
    let e = $(`${y}-${x}-pre`);                         //e: target element 
    e.className = state.nextElement.type;               //changing looks
}

//Mark 1 tile on the map
//needs x and y target coordinates
function displayTileHoverMap(x,y){
    let e = $(`${y}-${x}-map`);                              //e: target element 
    if(e && checkTileMap(x,y)) e.className = "emptyhover";   //changing looks, e: undefined -> false
}


//Removes mark on 1 tile on the map
//needs x and y target coordinates
function hideTileHoverMap(x,y){
    let e = $(`${y}-${x}-map`);                                    //e: target element 
    if(e && e.className === "emptyhover") e.className = "empty";   //changing looks, e: undefined -> false
}

//Is Placeable on the map
//needs y and x target coordinates
//returns a bool -> true: placeable, false: occupied (element)
function isPlaceable(x,y){
    //if(x<=0 || x>=10 || y<=0 || y>=10) return false;        //check indexing out of array
    var ret = true;
    iterateTiles(x,y,function(x,y){
        ret = ret && checkTileMap(x,y);                 //ret becomes false if atleast 1 return is false
    });
    return ret;
}
//Display element on the map
function displayElementMap(x,y){
    iterateTiles(x,y,displayTileMap);
}

//Display element on the preview
function displayElementPre(){
    do3x3(function(x,y){                                //Clearing out
        $(`${y}-${x}-pre`).className = "empty"
    });
    iterateTiles(0,0,displayTilePre);                   //changing looks 
}

//Display element hover on the map
function displayElementHoverMap(x,y){
    if(x !== undefined) iterateTiles(x,y,displayTileHoverMap);
}

//Hide element hover on the map
function hideElementHoverMap(x,y){
    iterateTiles(x,y,hideTileHoverMap);
}

//keyhandler
function keyHandler(e){
    if(e.keyCode === 82){
        rotate();
    }
    if(e.keyCode === 69){
        mirror();
    }
}
//Hover handler
function hoverEvent(e){
    let xy = e.target.id.split("-");
    cursorX = parseInt(xy[1]) - 1;        //centering the 3x3
    cursorY = parseInt(xy[0]) - 1;        //centering the 3x3
    displayElementHoverMap(cursorX,cursorY);
}
//hide handler
function hideEvent(e){
    let xy = e.target.id.split("-");
    let x = parseInt(xy[1]) - 1;        //centering the 3x3
    let y = parseInt(xy[0]) - 1;        //centering the 3x3
    hideElementHoverMap(x,y);
    cursorX = cursorY = undefined;
}


//mirror element
function mirror(){
    if(cursorX !== undefined) hideElementHoverMap(cursorX,cursorY);    //hides hover
    state.nextElement.mirrored = !state.nextElement.mirrored;
    displayElementPre();                                               //display the element on the preview
    if(cursorX !== undefined) displayElementHoverMap(cursorX,cursorY); //displays mirrored hover
}
//rotate element
function rotate(){
    if(cursorX !== undefined) hideElementHoverMap(cursorX,cursorY);    //hides hover
    state.nextElement.rotation = (state.nextElement.rotation + 1 )%4;
    displayElementPre();                                               //display the element on the preview
    if(cursorX !== undefined) displayElementHoverMap(cursorX,cursorY); //displays rotated hover
}

//Time functions

//Steps the time and manages the time associated values (0 to 27)
function manageTime(){
    //season data
    let season      = Math.floor(state.time/SeasonLength);
    let seasonTime  = state.time % SeasonLength;

    //Start of a season (score, UI update)
    if(seasonTime === 0 && state.time < GameLength) {
        seasonUI.innerHTML = seasons[season];
        if(state.time > 0) evalScore((season+3)%4);
        //mark missions
        markInactiveMission($(`mission${(season+3)%4}`));
        markActiveMission($(`mission${season}`));
        markActiveMission($(`mission${(season+1)%4}`));
        markInactiveMission($(`mission${(season+2)%4}`));
    }

    //writes time to UI
    timeLeft.innerHTML = (7 - seasonTime) + "/" + SeasonLength;
}

//true if game over else false
function isGameOver(){
    //Check if game is over
    if(state.time + state.nextElement.time > GameLength){
        //changing the UI to the last state
        if(state.time === 28 ) timeLeft.innerHTML = "0/" + SeasonLength;
        seasonUI.innerHTML = "Tél"; 
        //MountainScore
        state.sumScore += mountainScore();
        //Reveal Game over
        $("gameOverContainer").style.visibility="visible";
        $("gameOverContainer").addEventListener("click",init);
        //eval final score
        evalScore(3);
        //set game over score
        $("gameOverScore").innerHTML=state.sumScore;
        return true;
    }
    return false;
    
}

///Missions function

//Mark mission
function markActiveMission(mission){
    mission.style.border = "solid 6px green";
    mission.style.borderRadius = "40px";
    mission.style.margin = "0%";
}
function markInactiveMission(mission){
    mission.style.border = "none";
    mission.style.borderRadius = "0%";
    mission.style.margin = "6px";
}

//Evaluate and writes to UI (parameter) score and (parameter)'s missions score
function evalScore(season){

    //writes the mission score + add missionscore to season
    state.seasonScore[season] += evalMissionScore(season) + evalMissionScore((season+1)%4);

    //Write score
    $(`score${season}`).innerHTML = state.seasonScore[season];

    //all score
    state.sumScore += state.seasonScore[season];
    $("score").innerHTML = state.sumScore;
}
//Evaluates and writes (paraneter)'s missons score
function evalMissionScore(season){
    let score = missions[state.missionNumbers[season]].score();

    state.missionScore[season] += score;

    $(`mission${season}`).innerHTML = `${state.missionScore[season]} pont &nbsp;`;

    return score;
}

//set missions
function setMissions(){
    state.missionNumbers = [];
    //fill with different random numbers
    let i = 0;
    while(state.missionNumbers.length<4){
        let r = Math.floor(Math.random() * 12);
        if(!state.missionNumbers.includes(r)){
            state.missionNumbers[i] = r;

            missionsUI.children[i].style.backgroundImage =`url('${missions[r].image}')`;


            i++;
        }
    }

}

///Count score / mission

//passive missions:
function mountainScore(){
    let score = 0;
    mountains.forEach(m => {
        let xy = m.split("-");
        let x = parseInt(xy[0]);
        let y = parseInt(xy[1]);
        //mountain = state.mapMatrix[x][y];
        if(state.mapMatrix[x+1][y] !== undefined 
        && state.mapMatrix[x-1][y] !== undefined
        && state.mapMatrix[x][y+1] !== undefined
        && state.mapMatrix[x][y-1] !== undefined
        ) score+=1;
    });
    return score;
}

//active missions:

//Az erdő Széle
function azerdoszeleScore(){
    let score = 0;
    for(let i = 0; i < 10; i++){
        if(state.mapMatrix[ 0][i] === "forest") score++;
        if(state.mapMatrix[i][10] === "forest") score++;
        if(state.mapMatrix[10][10-i] === "forest") score++;
        if(state.mapMatrix[10-i][0] === "forest") score++;
    }
    return score;
}

//Álmos Völgy
function almosvolgyScore(){
    let score = 0;
    for(let i = 0; i < 11; i++){
        let forestCount = 0;
        for(let j = 0; j < 11; j++){
            if(state.mapMatrix[i][j] === "forest") forestCount++;
        }
        if(forestCount === 3) score += 4;
    }
    return score;
}

//Krumpliöntözés
function krumpliontozesScore(){
    let score = 0;
    for(let y = 0; y < 11; y++){
        for(let x = 0; x < 11; x++){
            if(state.mapMatrix[x][y] === "water"){
                if((x+1 <= 10 && state.mapMatrix[x+1][y] === "farm") ||
                   (x-1 >= 0  && state.mapMatrix[x-1][y] === "farm") ||
                   (y+1 <= 10 && state.mapMatrix[x][y+1] === "farm") ||
                   (y-1 >= 0  && state.mapMatrix[x][y-1] === "farm")
                ) score += 2;
            }
        }
    }
    return score;
}

//Határvidék
function hatarvidekScore(){
    let score=0;
    for(let i = 0; i < 11; i++){
        let columnScore = 6;
        for(let j = 0; j < 11; j++){
            if(state.mapMatrix[j][i] === undefined){
                columnScore = 0;
                break;
            }
        }
        score += columnScore;
        if(!state.mapMatrix[i].includes(undefined)) score += 6; 
    }
    return score;
}

//Fasor
function fasorScore(){
    let score = 0;
    let forestMax = 0;
    for(let i = 0; i < 11; i++){
        let forestCount = 0;
        let connected = false;
        for(let j = 0; j < 11; j++){
            if(state.mapMatrix[j][i] === "forest") {
                forestCount++;
                connected = true;
            }
            else{
                connected = false;
                if(forestMax < forestCount) forestMax = forestCount;
                forestCount = 0;
            }
        }
        if(forestMax < forestCount) forestMax = forestCount;
    }
    score = forestMax * 2;
    return score;
}

//Gazdag város
function gazdagvarosScore(){
    let score = 0;
    for(let y = 0; y < 11; y++){
        for(let x = 0; x < 11; x++){
            let variety = [];
            if(state.mapMatrix[x][y] === "town"){
                variety = [];
                if(x+1 <= 10 && state.mapMatrix[x+1][y] !== undefined) variety.push(state.mapMatrix[x+1][y]); // empty array -> push
                if(x-1 >= 0  && !variety.includes(state.mapMatrix[x-1][y]) && state.mapMatrix[x-1][y] !== undefined) variety.push(state.mapMatrix[x-1][y]);
                if(y+1 <= 10 && !variety.includes(state.mapMatrix[x][y+1]) && state.mapMatrix[x][y+1] !== undefined) variety.push(state.mapMatrix[x][y+1]);
                if(y-1 >= 0  && !variety.includes(state.mapMatrix[x][y-1]) && state.mapMatrix[x][y-1] !== undefined) variety.push(state.mapMatrix[x][y-1]);
            }
            if(variety.length>=3) score += 3;
        }
    }
    return score;
}
//Öntözőcsatorna
function ontozocsatornaScore(){
    let score = 0;
    for(let i = 0; i < 11; i++){
        let farmCount = 0;
        let waterCount = 0;
        for(let j = 0; j < 11; j++){
            if(state.mapMatrix[j][i] === "farm") farmCount++;
            if(state.mapMatrix[j][i] === "water") waterCount++;
        }
        if(farmCount === waterCount && farmCount > 0) score += 4;
    }
    return score;
}

//Mágusok völgye
function magusokvolgyeScore(){
    let score = 0;
    mountains.forEach(m => {
        let xy = m.split("-");
        let x = parseInt(xy[0]);
        let y = parseInt(xy[1]);
        //mountain = state.mapMatrix[x][y];
        if(x+1 <= 10 && state.mapMatrix[x+1][y] === "water") score += 3;
        if(x-1 >= 0  && state.mapMatrix[x-1][y] === "water") score += 3;
        if(y+1 <= 10 && state.mapMatrix[x][y+1] === "water") score += 3;
        if(y-1 >= 0  && state.mapMatrix[x][y-1] === "water") score += 3;
    });
    return score;
}

//Üres telek
function urestelekScore(){
    let score = 0;
    for(let x = 0; x < 11; x++){
        for(let y = 0; y < 11; y++){
            if(state.mapMatrix[x][y] === undefined){
                if(    
                    (x+1 <= 10 && state.mapMatrix[x+1][y] === "town") ||
                    (x-1 >= 0  && state.mapMatrix[x-1][y] === "town") ||
                    (y+1 <= 10 && state.mapMatrix[x][y+1] === "town") ||
                    (y-1 >= 0  && state.mapMatrix[x][y-1] === "town")
                ) score += 2;
            }
        }
    }
    return score;
}

//Sorház
function sorhazScore(){
    let score = 0;
    let townMax = 0;
    for(let i = 0; i < 11; i++){
        let townCount = 0;
        let connected = false;
        for(let j = 0; j < 11; j++){
            if(state.mapMatrix[i][j] === "town") {
                townCount++;
                connected = true;
            }else{
                connected = false;
                if(townMax < townCount) townMax = townCount;
                townCount = 0;
            }
        }
        if(townMax < townCount) townMax = townCount;
    }
    score = townMax * 2;
    return score;
}

//Páratlan silók
function paratlansilokScore(){
    let score = 0;
    for(let i = 0; i < 11; i+=2){
        let columnScore = 10;
        for(let j = 0; j < 11; j++){
            if(state.mapMatrix[j][i] === undefined){
                columnScore = 0;
                break;
            }
        }
        score += columnScore;
    }
    return score;
}

//Gazdag vidék
function gazdagvidekScore(){
    let score = 0;
    for(let i = 0; i < 11; i++){
        let variety = []
        for(let j = 0; j < 11; j++){
            if(state.mapMatrix[i][j] !== undefined &&
               !variety.includes(state.mapMatrix[i][j])
            ){
                variety.push(state.mapMatrix[i][j]);
            }
        }
        if(variety.length >= 5) score+=4;
    }
    return score;
}