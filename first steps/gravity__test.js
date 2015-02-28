it("should be on the ground", function() {
  robot.sensor.position().y.should.be.equal(0);
});