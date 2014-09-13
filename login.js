module.exports = {
  'Ping irccloud': function (test) {
    var creds = require('./credentials.js')
    test
      .open('https://www.irccloud.com/')
      .type('body input.input:first-child[type=email][name=email]:not([id=forgotEmail])', creds.user)
      .type('body input.input[name=password][type=password]', creds.pass)
      .submit('form[class=signin]')
      .wait(10000)
      .execute(function(){
        $('form[class=input] textarea').val('/ping zoubot').submit();
      })
      .wait(1000)
      .screenshot('post-ping.png')
      .done();
  }
};