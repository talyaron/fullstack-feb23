interface MyStudent {
    name:string;
    gender: string;
    mathMidTermGrade:number;
    historyMidTermGrade:number;
    mathFinalTermGrade:number;
    historyFinalTermGrade:number;
    avg:Function;
  }

  const shiran:MyStudent = {
    name:"shiran",
    gender: "Femail",
    mathMidTermGrade:85,
    historyMidTermGrade:85,
    mathFinalTermGrade:95,
    historyFinalTermGrade:100,
    avg: function calaAVG():number|undefined
    {
        try{
            if (!isNaN(this.historyFinalTermGrade) && !isNaN(this.historyMidTermGrade) && !isNaN(this.mathFinalTermGrade) && !isNaN(this.mathMidTermGrade)) {
                return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade
                    +this.historyFinalTermGrade)/4
            }
            else throw new Error("input is NaN");

        }
        catch (error) {
            console.error(error);
            return undefined;
          }
        
    }
  };

  const moshe:MyStudent = {
    name:"moshe",
    gender: "mail",
    mathMidTermGrade:89,
    historyMidTermGrade:70,
    mathFinalTermGrade:65,
    historyFinalTermGrade:90,
    avg: function calaAVG():number|undefined
    {
        try{
            if (!isNaN(this.historyFinalTermGrade) && !isNaN(this.historyMidTermGrade) && !isNaN(this.mathFinalTermGrade) && !isNaN(this.mathMidTermGrade)) {
                return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade
                    +this.historyFinalTermGrade)/4
            }
            else throw new Error("input is NaN");

        }
        catch (error) {
            console.error(error);
            return undefined;
          }
        
    }
  };

  const liran:MyStudent = {
    name:"liran",
    gender: "mail",
    mathMidTermGrade:89,
    historyMidTermGrade:90,
    mathFinalTermGrade:95,
    historyFinalTermGrade:57,
    avg: function calaAVG():number|undefined
    {
        try{
           
            if (!isNaN(this.historyFinalTermGrade) && !isNaN(this.historyMidTermGrade) && !isNaN(this.mathFinalTermGrade) && !isNaN(this.mathMidTermGrade)) {
                return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade
                    +this.historyFinalTermGrade)/4
            }
            else throw new Error("input is NaN");

        }
        catch (error) {
            console.error(error);
            return undefined;
          }
        
    }
  };


  console.log(shiran);
  console.log(shiran.avg());

  let SudentArray: MyStudent[]= [];
  SudentArray.push(moshe);
  SudentArray.push(shiran);
  SudentArray.push(liran);
  console.log(SudentArray);

  function AllStudentAVG(SudentArray:MyStudent[]):number|undefined
  {
    try{
         debugger;
        let avgs:number[]=[];
        let count=0;
        for (let i = 0; i < SudentArray.length; i++) {
        if(SudentArray[i].avg())
            avgs.push(SudentArray[i].avg())
        else throw new Error(`input is NaN ${SudentArray[i]}`);
        }
        for(let i = 0; i < avgs.length; i++){
            count+= avgs[i]
        }
        return count/ avgs.length+1;
        
    }
 
    catch (error) {
        console.error(error);
        return undefined;
      }
  }

  const AllSutdentAVG= AllStudentAVG(SudentArray);
  console.log(AllSutdentAVG);
  