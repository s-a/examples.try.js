describe("Save the flowers", function() {
  describe("Robot mission solved", function() {
    it("should have placed 200 flowers", function() {
      engine.flower.meta().length.should.be.equal(200); 
    });
  });
});