// define a user behaviour
var PhantomFish = qc.defineBehaviour('qc.engine.PhantomFish', qc.Behaviour, function() {
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.gravity = 1;
    this.initialYSpeed = -10;
    this.activated = false;
}, {
    // fields need to be serialized
});

PhantomFish.prototype.start = function() {
   this.xSpeed = Math.random() * 10 - 5;
   this.ySpeed = this.initialYSpeed;
   this.activated = true;
};

PhantomFish.prototype.update = function() {
   if(!this.activated) return;

   this.gameObject.anchoredX += this.xSpeed;
   this.gameObject.anchoredY += this.ySpeed;
   this.ySpeed += this.gravity;

   if(this.gameObject.anchoredY >= this.game.height){
      this.gameObject.destroy();
   }
};
