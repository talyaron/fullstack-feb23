//classes.ts
// Models

class Character{
    
    static counter = 0;
    characterId: number;
    constructor(public characterName:string ,public characterImgPath:string, characterId?:number){
        
        if(characterId)
            this.characterId=characterId;
        else  
            this.characterId = ++Character.counter;
    }
} 
class City {
    static counter = 0;
    cityId:number;
    monetaryValue:number;
    rentValue:number;
    cityOwner:Player|null=null;
    constructor(public cityName:string,public cityHotels:Hotel[]|undefined,public cityImg:string,cityId?:number ){
        if(cityId)
            this.cityId=cityId;
        else  
            this.cityId = ++City.counter;
        this.monetaryValue=getRandomNumber(50,200);
        this.rentValue=getRandomNumber(20,100);
    }
}
class Hotel {
    static counter = 0;
    hotelId:number;
    monetaryValue:number;
    rentValue:number;
    hotelOwner:Player|null=null;
    constructor(public hotelName:string,public cityId:number ,public hotelImg:string,hotelId?:number ){
        if(hotelId)
            this.hotelId=hotelId;
        else  
            this.hotelId = ++City.counter;
        this.monetaryValue=getRandomNumber(150,2500);
        this.rentValue=getRandomNumber(250,400);
    }
}
class QuestionGoodThings {
    static counter = 0;
    goodThingsId:number;
    constructor(public goodThingsTitel:string,public goodThingsDescription:string,public winningPrice:number,
        goodThingsId?:number){
        if(goodThingsId)
        this.goodThingsId=goodThingsId;
   else  
       this.goodThingsId = ++QuestionGoodThings.counter;
    }
    
}
class QuestionBadThings {
    static counter = 0;
    badThingsId:number;
    constructor(public badThingsTitel:string,public badThingsDescription:string,public purchasePrice:number,
        badThingsId?:number){
        if(badThingsId)
        this.badThingsId=badThingsId;
   else  
       this.badThingsId = ++QuestionBadThings.counter;
    }
    
}
class Jail{
    static counter = 0;
    jailId:number;
    earlyReleaseCost:number= getRandomNumber(500,100);
    constructor(public jailName:string,public jailImg:string, jailId?:number){
        if(jailId)
     this.jailId=jailId;
else  
    this.jailId = ++Player.counter;
    }
}
class Player{
static counter = 0;
playerId:number;
color:string;
jailIndex:number=0;
cellId:string='cell5';
Pbank:number=1500;
character:Character | undefined;
constructor(public userName:string,public isJail:boolean,public status:boolean,
     playerId?:number,color?:string,character?:Character)
{
if(playerId)
     this.playerId=playerId;
else  
    this.playerId = ++Player.counter;
if(color)
    this.color=color;
else  
this.color = this.assignColor();
if(character)
     this.character=character;
else  
    this.character = undefined;
}
private assignColor(): string {
    const colors = ['green', 'yellow', 'red', 'blue'];
    return colors[this.playerId % colors.length];
}
}
class Board {
    static counter = 0;
    boardID:number;
    startDate:Date=new Date();  
    gameStatus:boolean;
    luckyCube:number=0;
    cities: City[];
   // hotels: Hotel[];
    goodThings: QuestionGoodThings[];
    badThings: QuestionBadThings[];
    players: Player[];
    jails: Jail[]; // Changed to an array
    winner:Player|undefined=undefined;
  
    constructor(bordId?:number,startdate?:Date,gameStatus?:boolean,luckyCube?:number,
        cities?:City[],goodThings?:QuestionGoodThings[],badThings?:QuestionBadThings[],
        players?:Player[],jails?:Jail[]) {
        if(bordId)  
            this.boardID=bordId;
        else
            this.boardID=++Board.counter;
        if(startdate)
            this.startDate=startdate;
        else    
            this.startDate=new Date();
        if(gameStatus)
            this.gameStatus=gameStatus;
        else    
            this.gameStatus=false;
        if(luckyCube)
            this.luckyCube=luckyCube;
        else    
            this.luckyCube=0;
        if(cities)
            this.cities=cities;
        else    
            this.cities=[];
        if(goodThings)
            this.goodThings=goodThings;
        else    
            this.goodThings=[];
        if(badThings)
            this.badThings=badThings;
        else    
            this.badThings=[];
        if(players)
            this.players=players;
        else    
            this.players=[];
        if(jails) 
            this.jails=jails;
        else    
            this.jails=[];

      
    }
  
    addCity(city: City) {
      this.cities.push(city);
    }
  
    addGoodThing(goodThing: QuestionGoodThings) {
      this.goodThings.push(goodThing);
    }
  
    addBadThing(badThing: QuestionBadThings) {
      this.badThings.push(badThing);
    }
  
    addPlayer(player: Player) {
      this.players.push(player);
    }
    addJail(jail: Jail) {
        this.jails.push(jail);
      }
  }
  
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }