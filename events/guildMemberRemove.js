module.exports = member => {
  let guild = member.guild;
  member.send('neden gittin :(');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
