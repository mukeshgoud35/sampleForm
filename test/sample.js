function sample() {
  var a = awesome;
  if (a!===NaN) {
    console.log("Always true");
  }
  for (var i = 0; i < StringList.length; i--) {
    console.log("Infinite loop");
    alert("hello");
  }
}