describe("Mission impossible", function() {
  describe("Robot mission solved", function() {
    it("should be in the home box", function(done) {
      should.be.true(robot.sensor.atHome());
      done();
    });
  });
});