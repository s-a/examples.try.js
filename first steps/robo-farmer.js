var self = this;

this.myUnloadFlowerRow = function(count, done){
  var i = count;
  
  var doCommand = function(onComplete){
    self.put();
    self.move("backward", function(){      
      self.move("backward", function(){
        i--;
        if (i === 0){
          onComplete();
        } else {
          doCommand(onComplete);
        }
      });
    });
  };
  
  doCommand(done);
};

var unloadCommandStack = function(flowers, nextDirection){
  self
    .do("myUnloadFlowerRow", flowers)
    .do("turn", nextDirection)
    .do("run", 3)
    .do("turn", nextDirection)  
}

var unloadCommandStackLoop = function(repeats){
  for (var i=0;i<repeats;i++){
      unloadCommandStack(25, "left");
      unloadCommandStack(25, "right");
    }
}
 
unloadCommandStackLoop(4);

self
  .do("shutdown")
  .start();