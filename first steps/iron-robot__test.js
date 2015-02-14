describe("Iron Robot", function() {
  describe("Robot mission solved", function() {
    it("should be in the home box", function() {
      robot.sensor.atHome().should.be.true;
    });
  });
});