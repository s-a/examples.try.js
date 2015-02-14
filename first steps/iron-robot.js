this
  .do("run", 9)
  .do("refuel") 
  .do("turn", "left")
  .do("run", 21)
  .do("turn", "left")
  .do("run", {
  		"direction":"up",
  		"count":40,
	})
  .do("run", 10)
  .do("engineOff")
  .do("shutdown")
  .start();