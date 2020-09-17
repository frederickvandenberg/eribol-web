// Typeitjs

// Home Page
new TypeIt("#sub-head", {
  speed: 40,
  waitUntilVisible: true
})
.type("Metal Price.")
.pause(5000)
.delete(12, {speed: 100})
.type("Discovery.")
.pause(1000)
.delete(10, {speed: 100})
.type("Mining.")
.pause(1000)
.delete(7, {speed: 100})
.type("Behaviour.")
.pause(1000)
.delete(10, {speed: 100})
.type("Modelling.")
.pause(1000)
.delete(10, {speed: 100})
.type("Metal Price.")
.go();
