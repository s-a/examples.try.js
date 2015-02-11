describe("Save the flowers", function() {
  describe("Robot mission solved", function() {
    it("should touch the wall instead run against it", function() {
      robot.sensor.canMove().should.be.true;
    });
  });
});