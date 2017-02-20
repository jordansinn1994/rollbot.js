var irc = require('irc');
var rand20 = require('rand20');
const commandLineArgs = require('command-line-args')
const optionDefinitions = [
  { name: 'channel', alias: "c", type: String, multiple: true},
  { name: 'botName', alias: "n", type: String},
  { name: 'key', alias: "k", type: String},
  { name: 'network', type: String, defaultValue: "irc.geekshed.net"}
]
const options = commandLineArgs(optionDefinitions);
var preChan = options.channel
var chans = preChan.toString();
var bot = new irc.Client(options.network, options.botName, {
    debug: true,
    channels: [chans]
});
rand20.setKey(options.key);
rand20.refresh();
bot.addListener('error', function(message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});
bot.addListener('message', function(from, to, message) {
    console.log('%s => %s: %s', from, to, message);
    if (to.match(/^[#&]/)) {
        // channel message
        if (message.match(/!(roll)/)) {
       // random.dieRoller(message);
        bot.say(to,rand20.roll(message));
        }
        if (message.match(/!(flip)/)) {
            bot.say(to,rand20.flip());
        }
        if (message.match(/!(lenny)/)) {
            bot.say(to,from+": ( ͡° ͜ʖ ͡°)");
        }
    }
});
bot.addListener('pm', function(nick, message) {
    console.log('Got private message from %s: %s', nick, message);
});
