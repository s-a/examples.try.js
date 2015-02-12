describe("Mission impossible", function() {
  describe("Robot mission solved", function() {
    it("should be on the ground", function() {
      robot.sensor.position().y.should.be.equal(0);
    });
  });
});