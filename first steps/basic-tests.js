describe("Basic tests", function() {
  describe("Robot mission solved", function() {
    it("should be in the home box", function() {
      robot.sensor.atHome().should.be.true;
    });
    it("should be charged after shutdown", function() {
      robot.sensor.energyLevel().should.be.equal(100); // 100 percent
    });
  });
});