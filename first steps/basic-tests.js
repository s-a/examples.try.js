describe("Mission impossible", function() {
  describe("Robot mission solved", function() {
    it("should be in the home box", function() {
      should.be.true(engine.robot.sensor.atHome());
    });
  });
});