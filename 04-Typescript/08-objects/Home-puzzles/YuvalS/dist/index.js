var yuval = {
    name: "yuval",
    gender: "male",
    midMgrade: 80,
    finalMgrade: 90,
    midHgrade: 90,
    finalHgrade: 100,
    avgM: function () {
        return (this.midMgrade + this.finalMgrade) / 2;
    },
    avgH: function () {
        return (this.midHgrade + this.finalHgrade) / 2;
    }
};
console.log(yuval.avgH());
