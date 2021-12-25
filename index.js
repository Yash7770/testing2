const Discord = require("discord.js")
const client = new Discord.Client()
const config = require('./config.json')
const prefix = "!"

client.on("ready", () => {
    console.log(`Logged as ${client.user.username}`)
    client.user.setActivity(`Yash Op`, {
        type: "STREAMING"
    });
});

client.on('message', async message => {
    if(message.content === `${prefix}hi`) {
        message.author.send("Hi Sir, How are you.")

        const hi = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setDescription("**Check your DM**")
        .setColor("GREEN")
        .setFooter("Yash Op")

        const hi2 = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setDescription("**Check it again bhosdike**")
        .setColor("RED")
        .setFooter("Yash Op")

        message.channel.send(hi)
        setTimeout(function(){ 
            message.author.send("Fuck off")
            message.channel.send(hi2)
         }, 7000) //time in milliseconds
         

        console.log(message.author.username, ` runned ${message.content} commmand`)   
    };
    if(message.content === `${prefix}hello`) {
        message.author.send("Hi sir, How may I help you")
        .then(async collected => {
            ans = collected.first().content;
        message.channel.send(ans)
        })
        }
    //let author = "750252659704856586"
    //if (message.author.send) {
        //message.channel.send("<@844231011381674014> I love you")
    //}
    //if (message.author.send) {
        //message.channel.send(" <:VERIFIED:917363629077184513> Successfully fucked <@853552634081050635> by himself")
    //}
    //let author = "750252659704856586"
    //if(message.author.send) {
        //client.users.fetch('844231011381674014', false).then((user) => {
            //user.send("<@844231011381674014> I love you");
           //})           
    //}
});

client.on('message', async message => {
    if (message.author.bot || message.channel.type === "dm") return;
  
    const msgctn = message.content.slice(prefix.length).split(" "); //Removing prefix
    const cmdName = msgctn.shift().toLowerCase(); //First word
    const args = msgctn.slice(1); //Removing the cmd
  
    if (cmdName === "fuck") {
      let user;
      if (message.mentions.members.first()) {
        user = message.mentions.members.first();
      }
      if (!user) return message.react(":x:");
  
      message.channel.send(`fucking ${user}`)
      message.react("<:VERIFIED:917363629077184513>").then(() => {
        setTimeout(() => {
          message.channel.send(`Still fucking ${user}`).then(() => {
            setTimeout(() => {
              message.channel.send(`Still fucking ${user} but faster now`).then(() => {
                setTimeout(() => {
                  const embed1 = new Discord.MessageEmbed()
                  .setAuthor("Success").setColor("GREEN").setDescription(`<:VERIFIED:917363629077184513> Successfully fucked ${user}`).setFooter(`fucked by ${message.author.tag}`)
                  const embed2 = new Discord.MessageEmbed()
                  .setDescription(`**Congrats** ${user}\n <:ag_redlaugh:917126502053732363> You are now pregnant`).setFooter(`fucked by ${message.author.tag}`)
                  .setColor("GREEN")
                  message.channel.send(embed1)
                  message.channel.send(embed2)
                  message.author.send(embed1)
                  message.author.send(embed2)
                  user.send(embed1)
                  user.send(embed2)
                }, 7000)
              }, 7000)
            }, 7000)
          }, 700)
        }, 7000)
      }, 7000)
    }
  })

  client.on('message', async message => {
    
    if(message.content === `${prefix}verify`) {
      let role = message.guild.roles.cache.find(r => r.id === "922776252463611924");
      let member = message.mentions.members.first()
      message.author.roles.add(role)
    }
    if (message.content === `${prefix}ping`) {
      message.channel.send(`Ping is \`${client.ws.ping}\``)
    }
  })

client.login(config.token)