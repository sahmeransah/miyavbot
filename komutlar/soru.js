const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "miyav",
    "bos yapma"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: ?8ball <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sor', 
  description: 'Sorularınızı "evet,hayır,belki" şeklinde cevaplar',
  usage: 'sor <soru>'
};
