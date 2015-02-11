var self = this;

self.myMove = function(dummy, done){
  if (self.sensor.canMove("forward")){
    self.move("forward", function(){
      self.myMove(null, done);
    });
  } else {
    done();
  }
}

self
	.do("myMove")	
  	.do("shutdown")
  	.start();