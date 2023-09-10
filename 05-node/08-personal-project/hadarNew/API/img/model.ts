export class Exercise{
    exercise: string;
    sets?: number;
    repetitions?: number;
    weight?: number;
    timer?: number;
    id?: string;
    constructor({exercise}:{exercise: string;}, sets?: number, repetitions?: number, weight?: number, timer?: number){
        this.exercise = exercise;
        this.sets = sets;
        this.repetitions = repetitions;
        this.weight = weight;
        this.timer = timer;
        this.id = Math.random().toString();
    }
}

