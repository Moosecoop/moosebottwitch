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
    poles = 1;
});

client.on("resub", function (channel, username, months, message) {
    client.action("luke_lafr", "Listen to @Moobot , it's sub thanking message is better lol");
    if (months = 36) {
        client.action("luke_lafr", "Wow! " + username + "! 3 Years! Congrats!");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?HELP";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "?luke ?2016 ?bot ?ytp ?goal ?hell ?teak ?nitro ?game ?subscribe ?amo ?crayon ?wyre ?donate ?extralife ?emma ?barrington ?job ?about ?moose ?mape ?jake ?csgo ?caltane ?overwatch   | I also yell at peopel who post strawpoles!");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "QUESTION ANSWERED ";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "CONGRATS! WINNER PLEASE MESSAGE @Flight1simltt WITH YOUR UNIQUE DISCORD NAME AND TAG! THANK YOU!");
    }
});


client.on("chat", function(channel, user, message, self) {
    if(message === "!extralife") {
        client.action("luke_lafr", "its for the kids! moosecoop.com studies show using this link is better");
    }
});


client.on("chat", function(channel, user, message, self) {
    var prefix = "THAT KEYBOARD";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "DEAL WITH IT! KEYBOARD WARRIORS UNITE!");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?GAME";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "MOOSECOOP'S GAME: http://bit.ly/2iRx3YV");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?ABOUT";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "MooseBot_ is a Twitch Bot built for luke_lafr's twitch chat. Created by moosecoop in javascript");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?LUKE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "luke_lafr is pretty much the dopest dude on planet earth");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?BARRINGTON";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "LordBarrington is the best ban hammer spammer ever!");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?NITRO";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "nitroblastdigital.......... kappa");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?EMMA";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "EMMA IS COOL -AUTUMN CHILD");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?DONATE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "Donate to luke_lafr (not extralife): https://streamtip.com/t/luke_lafr");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?EXTRALIFE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "donate to extralife! hellbaskets.com ! 'trumpets are lit' -amo, 2016");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?WYRE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "WyreTheWolf is a pretty cool guy, also he's probably a better dad than you.");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?CRAYON";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "He'll draw you a picture with his imagination, or his crayons");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?TEAK";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "He'll teak the settings till they're JUST right");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?MOOSE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "Check out moosecoop, my creator: moosecoop.com - youtube.com/user/moosecoop");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?MAPE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "is he a maple leaf? who knows?");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?JAKE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "jake pls... (credit typicaljake.com)");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?CSGO";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "CS:NO");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?OVERWATCH";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "no pls");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?CSGO";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "CS:NO");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?CALTANE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "SIPPY P! http://bit.ly/2ikOss9");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?JOB";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "Luke works at LMG linusmediagroup.com");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?SUBSCRIBE";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "Subscribe to Luke! http://bit.ly/2ikGNKf");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?AMO";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "Hes the most lit mf around!");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?HELL";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "baskets");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?2016";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "the last nuclear war free year... rip");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?GOAL";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "normaly i dont do non mod's but ok, don't ask tho..... pls");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?YTP";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "moose's latest YTP: USB KILLER: http://bit.ly/2ikPNPl");
    }
});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?BOTS";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "moose's discord bot: bot.moosecoop.com");
    }
});

client.on("chat", function(channel, user, message, self) {
    if(user['display-name'] !== "Luke_Lafr") {
    var prefix = "HTTPS://STRAWPOLE.ME/";
    var prefix2 = "HTTP://STRAWPOLE.ME/";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
    var prefixUsed2 = message4p.startsWith(prefix2);
    
    if(prefixUsed) {
        client.action("luke_lafr", user['display-name'] + "...stop with the strawpoles... ya dipshit | (" + poles + ")");
        poles = poles +1
    } else if(prefix2) {
        client.action("luke_lafr", user['display-name'] + "...stop with the strawpoles... ya dipshit | (" + poles + ")");
        poles = poles +1
    }
    }

});

client.on("chat", function(channel, user, message, self) {
    var prefix = "?LIGHTS";
    var message4p = message.toUpperCase();
    var prefixUsed = message4p.startsWith(prefix); // false
     
    if(prefixUsed) {
        client.action("luke_lafr", "not yet done!");
    }
});
