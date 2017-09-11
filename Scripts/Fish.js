// define a user behaviour
var Fish = qc.defineBehaviour('qc.engine.Fish', qc.Behaviour, function() {
    this.lifespan = 10;
    this.worth = 1;
    this.size = 1;
}, {

});

Fish.prototype.init = function(lifespan, worth, size) {
   this.lifespan = lifespan;
   this.worth = worth;
   this.size = size;
};

Fish.prototype.onEnter = function() {
   document.body.style.cursor = 'pointer';
};

Fish.prototype.onExit = function() {
   document.body.style.cursor = 'default';
};

Fish.prototype.onClick = function() {
   this.onCollect();
};

Fish.prototype.onCollect = function() {
   DataCenter.$.aliveFish--;
   document.body.style.cursor = 'default';
   var phantom = this.game.add.clone(GameManager.$.phantomFishPrefab, this.gameObject.parent);
   phantom.anchoredX = this.gameObject.anchoredX;
   phantom.anchoredY = this.gameObject.anchoredY;
   phantom.PhantomFish.start();
   this.gameObject.destroy();
};
