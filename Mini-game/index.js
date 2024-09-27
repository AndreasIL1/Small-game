

//HER ER VARIABLENE SOM BRUKES!


var treeUnits = 0;
var metalUnits = 0;
var house = 0;
var strength = 10;
//Variabler for å telle klikk å hvor mange klikk som trengs for å generere monstre å hvor mange monstre som kommer.
var clickCounter = 0;
var clicksMonsters = GetRandomeNumber(5,15);
var numberOfMonsters = GetRandomeNumber(1,3);
//Livet til monstrene.
var lifemonster0 = 0;
var lifemonster1 = 0;
var lifemonster2 = 0;
//Livet til spilleren.
var lifeOfPlayer = 300;
//Hvor mye verdt treet starter med i verdi.
var tree1count = 0;
var tree2count = 0;
var tree3count = 0;





//HER BEGYNNER FUNKSJONER FOR DET SOM ER KLIKKBART PÅ SKJERMEN!





//Koblet til html for treene
function onTreeCutting(tree){
//Topbar er en felles funskjon som vi har tatt på alle klikkbare funskjoner som gjør at for eks antall metall oppdateres når du miner
    TopBar()
//Denne funskjonen setter vi på alt man kan klikke på som sier at om livet ditt er 0 så skal det ikke gå ann å gjøre mer.
    if(lifeOfPlayer == 0)return;

//Her sier jeg at trærene gir meg 25 wood per klikk og de får pluss et klikk hver gang eg trykker på de.
//De får pluss ett klikk fordi de skal forsvinne etter 10 klikk
treeUnits += 25; 
if(tree.id == "tree-1"){
tree1count += 1;
}
if(tree.id == "tree-2"){
tree2count += 1;
}
if(tree.id == "tree-3"){
tree3count += 1;
}

//Her sier vi at trærene skal forsvinne når de når 10 klikk. Da ber jeg js dokumentet hente riktig tre i html dokumntet.
if(tree1count == 10){
    document.getElementById("tree-1").style.visibility = "hidden";
}

if(tree2count == 10){
    document.getElementById("tree-2").style.visibility = "hidden";
}

if(tree3count == 10){
    document.getElementById("tree-3").style.visibility = "hidden";
}

//Her skriver jeg en melding som skal spyttes ut når jeg trykker på trærene. Jeg har funskjonen TextOutput på alle klikkbare funskjoner 
//TextOutput gjør at det kommer ut tekst når jeg klikker på noe på skjermen.
var msg = tree.id + "was cut<br>";
TextOutput(msg);
}




//Denne er koblet til html dokumentet å handler om gruven. Skriver at spilleren får 10 metall per klikk. 
//Legger å til TopBar, TextOutput og LifeOfPlayer.
function onMining(){
    if(lifeOfPlayer == 0)return;
    TopBar()
    metalUnits += 10;
    TextOutput("+ 10 metal");
}




//Funskjon for hvor mye liv man skal ta av monstrene å når monstrene sine liv = 0 så forsvinner de igjen så begynner clickcountet på nytt.
//Det vil da genereres mellom 1-3 monstre mellom 5-15 nye klikk.
//Vi lagde en variabel som heter strength = 10. -= Strength er derfor - 10 liv når jeg slår monstre.
//Vi skrev strength å ikke -10 fordi når man kjøper sverd får man 40 i strenght å da vil dette autmoatisk oppdateres til å ta 40 liv.
////Legger å til TextOutput og LifeOfPlayer.
function monsterAttacked(monster){
    if(lifeOfPlayer == 0)return;
    
    if(monster.id == "monster0"){
        lifemonster0 -= strength;
        if(lifemonster0 <= 0){
        document.getElementById("monster0").style.visibility = "hidden";
    }
    }
    if(monster.id == "monster1"){
        lifemonster1 -= strength;
        if(lifemonster1 <= 0){
            document.getElementById("monster1").style.visibility = "hidden";
            }
    }
    if(monster.id == "monster2"){
        lifemonster2 -= strength;
        if(lifemonster2 <= 0){
            document.getElementById("monster2").style.visibility = "hidden";
            }
    }
    if(lifemonster0 + lifemonster1 + lifemonster2 == 0){
        clickCounter = 0;
        clicksMonsters = GetRandomeNumber(5,15);
        numberOfMonsters = GetRandomeNumber(1,3);
    }
    TextOutput("Monster -10");
}




//Funksjon for å kjøpe det minste huset. Skriver å at spilleren mister 50 tre å 10 metall om spilleren kjøper huset. Å så legges det til et hus
//i TopBar for hver gang spilleren kjøper et stort eller lite hus.
//Hvis spilleren ikke har nok ressurser så kommer det en melding som sier at du ikke har nok ressurser.
//Legger å til TopBar, TextOutput og LifeOfPlayer.
function Building(){
    if(lifeOfPlayer == 0)return
    
    if(treeUnits >= 50 && metalUnits >= 10){
        TextOutput("You bought a house")
        treeUnits -=50;
        metalUnits -=10;
        house +=1;
        TopBar()
        document.getElementById("building-div").innerHTML += "<img src=\"images/building-1.png\">";
    }else{
        TextOutput("You don't have enough resources two buy a house")
    }

}




//Funksjon for det største huset. Helt lik som det lille huset.
//Legger å til TopBar, TextOutput og LifeOfPlayer.
function Building2(){
    if(lifeOfPlayer == 0)return;

    if(treeUnits >= 150 && metalUnits >= 30){
        TextOutput("You bought a big house")
        treeUnits -=150;
        metalUnits -=30;
        house +=1;
        TopBar()
        document.getElementById("building-div").innerHTML += "<img src=\"images/building-3.png\">";
    }else{
    TextOutput("You don't have enough resources to buy a big house")
    }
}




//Funskjon for sverdet. Likt oppsett som husene. Her oppdateres å strength som nevnt tidligere til 40.
//Legger å til TopBar, TextOutput og LifeOfPlayer.
function Sword(){
    if(lifeOfPlayer == 0)return;

    if(metalUnits >= 200){
        TextOutput("You bought a sword")
        metalUnits -=200;
        strength = 40;
        TopBar()
    }else{
        TextOutput("You don't have enough resources to buy a sword.");
    }
}




//Funksjon som er der for å generere monstere random å for å få random antall monstre.
function GetRandomeNumber(min, max){
    return Math.floor(Math.random() * max) + min;
}




//Gjør at du kan velge mellom to karakterer
function onChangeWarrior (button){
    if(button.id == "Man"){
        document.getElementById("warrior-1").src = "images/warrior.png";
        TextOutput("You picked a man")
    }else{
        document.getElementById("warrior-1").src = "images/warrior2.png";
        TextOutput("You picked a woman")
    }
}





// HER BEGYNNER FUNKSJONER SOM ER ATTRIBUTER TIL FUNSKJONENE OVER!






//En funskjon for hvordan topbaren skal endre seg iforhold til ressursene jeg har.
function TopBar(){
    document.getElementById("material-info").innerHTML = " Wood: " + treeUnits + " units. Metal: " + metalUnits + " units. Number of buildings: " + house + ". Strength: " + strength; 
}




//En funksjon for hvilke meldinger som skal bli spyttet ut når jeg trykker på ting.
function TextOutput(message){
   
var msg = message + "<br>" + document.getElementById("output-div").innerHTML;
document.getElementById("output-div").innerHTML = msg; 


//En funskjon som gjør at hvert klikk jeg gjør blir registrert å gjør monstrene synlig mellom 5-15 klikk.
//Jeg gir å monstrene 40 liv hver.
     clickCounter++;
 
 
     if(clickCounter == clicksMonsters){
 //Hvis 1 monster viser så er det monster 0 som vises. hvis to vises er det monster 0 og 1.
 //Hvis i == 0 så er det monster 0 som vises å har 40 liv. Antall monstre som blir generert + i gjør riktig antall monstre synlig.
         for(i=0; i<numberOfMonsters;i++){
             document.getElementById("monster" + i).style.visibility = "visible"
 
             if(i == 0){
                 lifemonster0 = 40;
             }
             if(i == 1){
                 lifemonster1 = 40;
             }
             if(i == 2){
                 lifemonster2 = 40;
             }
         }
         TextOutput("The monsters are coming")
     }
 //Hvis noen av monstrene har mer en 0 liv så skal spilleren miste 10 liv.
     if(lifemonster0 + lifemonster1 + lifemonster2 > 0){
         lifeOfPlayer -= 10;
         document.getElementById("life-bar").innerHTML = lifeOfPlayer + "hp";
         

 //Funskjon for at når livet går ned til null så kommer det alert med game over som ikke lar deg spille mer
     if(lifeOfPlayer <= 0){
        lifeOfPlayer = 0;
        alert("Game over");
        TextOutput("Game Over")
         }
     }
 }
 