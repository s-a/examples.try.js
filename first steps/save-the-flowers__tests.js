describe("Save the flowers", function() {
  describe("Robot mission solved", function() {
    it("should be in the home box", function() {
      robot.sensor.atHome().should.be.true;
    });
    it("should be charged after shutdown", function() {
      robot.sensor.energyLevel().should.be.equal(100); // 100 percent
    });

    it("should have placed 4 flowers", function() {
      engine.flower.meta().length.should.be.equal(4); // 100 percent
    });

    it("should have placed 4 flowers in save area", function() {
  		var wallPosition = engine.wall.meta()[0].position.z;
      for (var i = 0; i < engine.flower.meta().length; i++) {
    		var pos = engine.flower.meta()[i].position;
    		pos.z.should.be.below(4);
    	};
    });
  });
});