describe("Mission impossible", function() {
  describe("Robot mission solved", function() {
    it("should be in the home box", function() {
      robot.sensor.atHome().should.be.true;
    });
    it("should not use all energy", function() {
      robot.sensor.sensor.energy.should.be.above(10);
    });
  });
});