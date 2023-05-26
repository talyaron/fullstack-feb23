
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
        return c / len;
    
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
        return c / len;
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
        return c / len;
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
        return c / len;
    }

}
const finalAvg= (historysub.calculateaverage()+mathsub.calculateaverage()+englishsub.calculateaverage()+literaturesub.calculateaverage())/4
console.log("your current semister average is:" , finalAvg)
console.log("History Avg:", historysub.calculateaverage())
console.log("math Avg:", mathsub.calculateaverage())
console.log("english Avg:", englishsub.calculateaverage())
console.log("literature Avg:", literaturesub.calculateaverage())