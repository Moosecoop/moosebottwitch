const tmi = require('tmi.js');

const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "MooseBot_",
        password: "oauth:anzbapdlec9cpgh00mve1t6n6c48tm"
    },
    channels: ["luke_lafr", "moosecoop"]
};

const client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
    console.log(`Address: ${address} - Port: ${port}`);
    client.action("luke_lafr", "MooseBot_ will remind people how the giveaway works periodicly!...... Also @Flight1simltt is cool!");
});

setInterval(function() {
    client.action("luke_lafr", "Winners of the game giveaways must whisper @Flight1simltt to claim their prizes!");
}, 60000);




/*client.on('chat', function(channel, user, message, self) {
    if (user['display-name'] = "Flight1simltt") {
            var winmsg = message.includes('QUESTION ANSWERED');
        if (winmsg) {
        client.action("moosecoop", `Winner please visit discord.gg/luke to claim your prize OR tell ${user['display-name']} your discord name and tag!`);
        winmsg = false;
       }
    }

    });*/
