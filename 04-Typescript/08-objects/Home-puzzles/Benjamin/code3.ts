
interface Subject {
    info: string,
    grades: Array<number>,
    calculateaverage: Function
}




const historysub:Subject = {
    info: "history",
    grades: [94,86,85,57,78,68],
    calculateaverage: function ():number {
        let len = (this.grades).length;
        let c = 0;
        for (let i = len - 1; i >= 0; i--) {
            c = c + this.grades[i];
        }
        return Math.floor(c / len);
    
    }
    

}

const mathsub:Subject = {
    info: "math",
    grades: [92,84,82,37,68,100,98],
    calculateaverage: function ():number {

        let len = (this.grades).length;
        let c = 0;
        for (let i = len - 1; i >= 0; i--) {
            c = c + this.grades[i];
        }
        return Math.floor(c / len);
    }

}

const englishsub:Subject = {
    info: "english",
    grades: [95,83,82,56],
    calculateaverage: function ():number {
        let len = (this.grades).length;
        let c = 0;
        for (let i = len - 1; i >= 0; i--) {
            c = c + this.grades[i];
        }
        return Math.floor(c / len);
    }

}
const literaturesub:Subject = {
    info: "literature",
    grades: [94,86,85],
    calculateaverage: function ():number {
        let len = (this.grades).length;
        let c = 0;
        for (let i = len - 1; i >= 0; i--) {
            c = c + this.grades[i];
        }
        return Math.floor(c / len);
    }

}
const finalAvg= (historysub.calculateaverage()+mathsub.calculateaverage()+englishsub.calculateaverage()+literaturesub.calculateaverage())/4
console.log("your current semister average is:" , finalAvg)
console.log("History Avg:", historysub.calculateaverage())
console.log("math Avg:", mathsub.calculateaverage())
console.log("english Avg:", englishsub.calculateaverage())
console.log("literature Avg:", literaturesub.calculateaverage())
const finalAvgAsString= String(finalAvg)
const historyavgg= document.getElementById('history')
if(historyavgg!=null){
historyavgg.textContent= historysub.calculateaverage()}

const mathavgg= document.getElementById('math')
if(mathavgg!=null){
    mathavgg.textContent= mathsub.calculateaverage()}

const englishavgg= document.getElementById('english')
if(englishavgg!=null){
    englishavgg.textContent= englishsub.calculateaverage()}

const literatureavgg= document.getElementById('literature')
if(literatureavgg!=null){
    literatureavgg.textContent= literaturesub.calculateaverage()}
    
    const finalavgg= document.getElementById('finavg')
    if(finalavgg!=null){
        finalavgg.textContent= finalAvgAsString}



        const historyallgrades= document.getElementById('historyall')
        if(historyallgrades!=null){
            historyallgrades.textContent= historysub.grades} 
        const mathallgrades= document.getElementById('mathall')
        if(mathallgrades!=null){
            mathallgrades.textContent= mathsub.grades}
        
            const englishallgrades= document.getElementById('englishall')
        if(englishallgrades!=null){
            englishallgrades.textContent= englishsub.grades} 
            const literatureallgrades= document.getElementById('literatureall')
        if(literatureallgrades!=null){
            literatureallgrades.textContent= literaturesub.grades} 
          