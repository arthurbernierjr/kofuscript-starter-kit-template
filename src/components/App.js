// Generated by KofuScript 0.0.3-alpha.3 
var present = console.log; 
// Generated by KofuScript 0.0.3-alpha.3 
var _, app, name, num;
_ = require('underscore');
app = document.getElementById('app');
num = 89990;
present(num);
name = {
  value: 'arthur',
  update: function (newName) {
    this.value = newName;
    return this.render();
  },
  render: function () {
    return app.innerHTML = '<h1 onclick="promptForName()">You so rock from ' + this.value + '</h1>';
  }
};
window.promptForName = function (e) {
  var newName;
  newName = window.prompt('Lets Change Your Name');
  return name.update(newName);
};
name.render();