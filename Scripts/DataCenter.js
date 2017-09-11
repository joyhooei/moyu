// define a user behaviour
var DataCenter = qc.defineBehaviour('qc.engine.DataCenter', qc.Behaviour, function() {
    DataCenter.$ = this;

    this.myFish = 0;
    this.aliveFish = 0;
    this.maxAliveFish = 5;
    this.fishGenerateRate = 100;
    this.multiplier = 1;
}, {
    // fields need to be serialized
});
