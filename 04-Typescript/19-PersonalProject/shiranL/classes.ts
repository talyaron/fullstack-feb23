class Player{
static counter = 0;
playerId:number;
color:string;
constructor(public userName:string, playerId?:number,color?:string)
{
if(playerId)
     this.playerId=playerId;
else  
    this.playerId = ++Player.counter;
if(color)
    this.color=color;
else  
this.color = this.assignColor();
}
private assignColor(): string {
    const colors = ['green', 'yellow', 'red', 'blue'];
    return colors[this.playerId % colors.length];
}
}

