it("should touch the wall instead run against it", function() {
  robot.sensor.canMove("forward").should.be.false;
  robot.sensor.canTurn("left").should.be.false;
  robot.sensor.canTurn("right").should.be.false;
});