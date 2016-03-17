var controller =require('botkit').slackbot();

controller.spawn({
	token:process.env.TOKEN_SLACK_SLASH}).startRTM();

		controller.setupWebserver(port,function(err,express_webserver) {
			  controller.createWebhookEndpoints(express_webserver)
			});

			controller.on('slash_command',function(bot,message) {

				if (message.command=='/drive') {
		    		connection.res.send('Hello yourself');
		    	}

			    // reply to slash command
			    bot.replyPublic(message,'Everyone can see this part of the slash command');
			    bot.replyPrivate(message,'Only the person who used the slash command can see this.');
			});
		});
});
