interface student {
    name: string;
    gender: string;
    mthmidtermgrade: number;
    mthfinaltermgrade: number;
    historymidtermgrade: number;
    historyfinaltermgrade: number;
    average: Function
        
    
}

const tom: student = {
    name: "tom",
    gender: "male",
    mthmidtermgrade: 87,
    mthfinaltermgrade: 85,
    historymidtermgrade: 90,
    historyfinaltermgrade: 92,
    average: function(){
        return(this.mthmidtermgrade+this.mthfinaltermgrade+this.historyfinaltermgrade+this.historymidtermgrade)/4;
    }


}
console.log(tom.average())