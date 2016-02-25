var x =require('botkit').slackbot();

x.spawn({token:process.env.TOKEN_SLACK}).startRTM();

x.hears(['hello','what up','yo'],'ambient',function(b,m){
	b.reply(m,'what up son')
});

x.on('direct_message,mention,direct_mention',function(bot,message) {
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'syringe',
  },function(err) {
    if (err) { console.log(err) }
    bot.reply(message,'Thaats right, Im Tyrone Biggums')
  })
})
