describe("Mission impossible", function() {
  describe("Robot mission solved", function() {
    it("should be in the home box", function() {
      robot.sensor.atHome().should.be.true;
    });
  });
});