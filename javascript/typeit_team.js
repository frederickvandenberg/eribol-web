// Team
new TypeIt("#team", {
  speed: 40,
  waitUntilVisible: true
})
.type("<b>Meet the Team.</b>")
.pause(5000)
.delete(14, {speed: 100})
.type("<b>Geologists.</b>")
.pause(1000)
.delete(11, {speed: 100})
.type("<b>Data Analysts.</b>")
.pause(1000)
.delete(14, {speed: 100})
.type("<b>Developers.</b>")
.pause(1000)
.delete(11, {speed: 100})
.type("<b>Eribol.")
.pause(1000)
.delete(7, {speed: 100})
.type("<b>Meet the Team.</b>")
.go();
