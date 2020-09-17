// Typeitjs

// Home Page
new TypeIt("#sub-head", {
  speed: 40,
  waitUntilVisible: true
})
.type("Different.")
.pause(5000)
.delete(10, {speed: 100})
.type("Unique.")
.pause(1000)
.delete(7, {speed: 100})
.type("Exceptional.")
.pause(1000)
.delete(12, {speed: 100})
.type("Novel.")
.pause(1000)
.delete(6, {speed: 100})
.type("Eribol.")
.pause(1000)
.delete(7, {speed: 100})
.type("Different.")
.go();
