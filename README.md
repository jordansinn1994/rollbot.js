# Rollbot.js
Commands:
  - !roll D20 - rolls twenty sided die.
  - !roll D12 - rolls a twelve sided die.
  - !roll D10 - rolls a ten sided die.
  - !roll D8 - rolls an eight sided die.
  - !roll D6 - rolls a six sided die.
  - !roll D4 - rolls a four sided die.
  - !roll d% - rolls a hundred sided, or percentile die.
  - !flip - Returns result of coin flip.

Multiple dice rolls can be joined on a single line.
```
!roll 3d20 2d8 d%
```
The result of that command may be something like this:
````
 d20: 3 15 12 d8: 3 8 d%: 75
````

### Tech
* [node.js] - evented I/O for the backend
* [node-irc] - An irc client for node.
* [rand20] - D20 dice set based roller using Random.org api
* [request] - HTML enhanced for web apps!
* [command-line-args] - A mature, feature-complete library to parse command-line options.
* [Random.org] - *true* random number generator.

### Installation

___Requires [Node.js](https://nodejs.org/) v4+ to run.___

*via npm:*
```sh
$ cd you_project
$ npm install nodeRollBot
```
### Running
The bot uses the following command-line arguments:
* --botName=desiredBotName
* --key=random.orgApiKey
* --network=ircNetwork(default irc.geekshed.net)
* --channel=channelName
```sh
node rollbot.js --key=Random.orgApiKey --botName=botName --channel=#channel1 --channel=#channel2 --network=ircNetwork
```
### Docker
To get up and running with a rollbot.
```sh
docker run --name myrollbot -d -p 6667:6667 jordansinn/rollbot:latest node rollbot.js --network=myIrcNetwork --botName=myBotName --channel=myChannel1 --channel=myChannel2 --key=myRandom.orgApiKey
```
To build from Dockerfile.
```sh
docker build -t my-rollbot-app .
```

### Todos

 - Docker install.
 - Add ability to private message Game Masters

### Reccomended IRC Networks
 * [Geekshed.net]


License
----
Apache License Version 2.0

   [request]: <https://github.com/request/request>
   [node.js]: <http://nodejs.org>
   [Random.org]: <https://www.random.org/>
   [node-irc]: <https://github.com/martynsmith/node-irc>
   [Geekshed.net]:<http://www.geekshed.net/>
   [rand20]: <https://github.com/jordansinn1994/rand20.js>
   [command-line-args]: <https://www.npmjs.com/package/command-line-args>
   [Docker]: <https://www.docker.com/>
   [Docker Hub]: <https://hub.docker.com>
