var child_process = require('child_process');

// running time ~15 seconds
function connect_to_irccloud() {
  child_process.exec('dalek login.js');
}

setInterval(function() {
  connect_to_irccloud();
}, 1000*60*60);
connect_to_irccloud();
