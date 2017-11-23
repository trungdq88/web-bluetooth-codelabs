function log() {
  var line = Array.prototype.slice
    .call(arguments)
    .map(function(argument) {
      return typeof argument === 'string' ? argument : JSON.stringify(argument);
    })
    .join(' ');

  document.querySelector('#log').textContent += line + '\n';
}
