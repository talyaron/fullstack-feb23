interface student{
    name:string,
    gender:string,
    midMgrade:number,
    finalMgrade:number,
    midHgrade:number,
    finalHgrade:number,
    avgM:Function,
    avgH:Function

}

const yuval:student = {
    name:"yuval",
    gender:"male",
    midMgrade:80,
    finalMgrade:90,
    midHgrade:90,
    finalHgrade:100,
    avgM:function(){
        return (this.midMgrade + this.finalMgrade)/2
    },
    avgH:function(){
        return (this.midHgrade + this.finalHgrade)/2
    }
}

console.log(yuval.avgH())