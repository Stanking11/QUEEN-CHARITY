//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaxKouY7tkj8NiPg0t45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaxKouY7tkj8NiPg0t45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/fqq387.jpg";
global.devs = "255750638502";
global.sudo = process.env.SUDO || "255750638502";
global.owner = process.env.OWNER_NUMBER || "255750638502" 
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/fqq387.jpg,https://files.catbox.moe/gk6my9.
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BabDNEMm5YbW1HdTY2dWdyVEVmOW1QaXJrRk1rRzdZdGJibDFtc1JrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnMzbWVhT05TQ1FHUjRiOWxNdUxYZDN4d3lYb3czcld2YUx0Vm1kd2t3ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSEptV1dFdG1UeDhYK0N0RzBqdWw3TGJXbUd3T243ZklUWmdDOHluRG1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1ZXBYd2NsODZaWWlaTUJBZ2o3QzFaL1dxRnpJbENyZWdMTmR3RXVXS21rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMaXdoelpYODNvaGZXVWFueTJpK1FJZ05aSUNhQWxVa1M0RFdMZmlnbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJZbHVZeURQbVEyVEQvQlhTaTZQRUovNUlwM3UzcUtUdDN6RkdlTlZjQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU8zLzFXNkZmUTlIdVh3T0hYODM1c2hZeUFsSjBCMzdQcXh4M3ZlR0hXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVk9wSGpHRjY5UnNZV0RKOS9SZjhISWdQcFBkSUFLSXQ1bkJ3SXQ0bFR4UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5SeExqWTQxOU5yVDY4NlZuekpxaTFzaUhNS2djUGY0V3JRYVBQTFc0bDE4dUd5bDNCRmFlTjN5NHp3WGxWcUVmMFBTbXdac2krdE1RNUwydHNHaWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IkNnZm5hMXlEYkFjZ24rL1hzcU9yWmVaVFljdWdTR09PTWt0cGtqUDBidHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZ2VkZqN01EUkU2QU5LdVU2bzJGdWciLCJwaG9uZUlkIjoiZTUyOTYzMzctNTgzZC00OWJkLTlkODYtMTUzYmE2ZmQyY2RjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZyU25yN0NTa3E5dG5GVjk5SkdnOE1MY2N3ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSXZWU1ZpMFJWeUFKSFE3Z1gvQWtHU2RIdVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTNXUkYxWFQiLCJtZSI6eyJpZCI6IjI1NTc1MDYzODUwMjoyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPRkZJQ0lBTCBTVEFOX0xFRSBDT0RFIDc2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcURwTDBGRVBhQ3A3d0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6dXRJREVMR3F5OTNwQmd6RmlFUzA3OVpVWlMxR1BISllyS2ZzbExrQkdZPSIsImFjY291bnRTaWduYXR1cmUiOiI2dmZ1S3hYNExPUUROZU05bEh6SmJyRDZFTGRmWUdGemRmNENzUXpuMmVTK3NQN1NsY210WjZORTJQVW1DcTk3TzU0QktjQTlqL1BSTlBNR3ZHQ0JCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUHpWR2lnMXF4WnA2SVVqMGhwNkVxOG15dXp6aUVtYUxNVEQvcUhydXpsb3NLdGRtUDE0NHJ5empUN01lZ2F4dlBpbm9ZSkdEc2dNc0NrK010aTBmakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NTA2Mzg1MDI6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzdyU0F4Q3hxc3ZkNlFZTXhZaEV0Ty9XVkdVdFJqeHlXS3luN0pTNUFSbSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzA4MTIxOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPK24ifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "STANY 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
