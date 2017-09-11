// define a user behaviour
var GameManager = qc.defineBehaviour('qc.engine.GameManager', qc.Behaviour, function() {
   GameManager.$ = this;

   this.tick = 0;
   this.nextGenerateTick = 0;
   this.generated = false;
}, {
   gameArea: qc.Serializer.NODE,
   fishPrefab: qc.Serializer.PREFAB,
   phantomFishPrefab: qc.Serializer.PREFAB
});

GameManager.prototype.awake = function() {
   this.calcNextGenerateFishTick();
};


GameManager.prototype.update = function() {
   if(this.tick >= this.nextGenerateTick && DataCenter.$.aliveFish < DataCenter.$.maxAliveFish){
      this.generateFish();
      this.calcNextGenerateFishTick();
   }
   this.tick++;
};

GameManager.prototype.calcNextGenerateFishTick = function() {
   this.nextGenerateTick = this.tick + DataCenter.$.fishGenerateRate;
};

GameManager.prototype.generateFish = function() {
   DataCenter.$.aliveFish++;
   var fish = this.game.add.clone(this.fishPrefab, this.gameArea);
   fish.anchoredX = Math.round(-this.game.width * 0.5 + Math.random() * this.game.width);
   fish.anchoredY = -this.game.height;
};
