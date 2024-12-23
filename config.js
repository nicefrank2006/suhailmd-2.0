const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129872434";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_51_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDMyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYxLFxuICAgICAgICA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNi9BdTYyZlhzVHZQTXRwYlBCUkZzVTF6dG03MTU1NmozRjZDcTlxbEpNZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMTVUZWJXYkpTSC0zV3UtVldCVWxVd1wiLFxuICBcInBob25lSWRcIjogXCJjM2UzNTk0MS0wYjgxLTQ1YjQtYmE0MC0xZjhkNjMwMDA3YjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgNjgsXG4gICAgICAyMDEsXG4gICAgICAyMDAsXG4gICAgICAyMjIsXG4gICAgICAxMjQsXG4gICAgICAyNTIsXG4gICAgICA2NCxcbiAgICAgIDEyNyxcbiAgICAgIDU3LFxuICAgICAgMTAwLFxuICAgICAgMTc1LFxuICAgICAgNjMsXG4gICAgICAxMzUsXG4gICAgICAyMTgsXG4gICAgICAyLFxuICAgICAgMjIwLFxuICAgICAgNzMsXG4gICAgICA4NyxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDE5NSxcbiAgICAgIDUxLFxuICAgICAgMjE1LFxuICAgICAgMjE2LFxuICAgICAgMjM3LFxuICAgICAgMTAwLFxuICAgICAgMTQ1LFxuICAgICAgMTc4LFxuICAgICAgMTE4LFxuICAgICAgMzEsXG4gICAgICA4MixcbiAgICAgIDIwMyxcbiAgICAgIDE3NCxcbiAgICAgIDExOSxcbiAgICAgIDIzLFxuICAgICAgNzQsXG4gICAgICAyMTUsXG4gICAgICAxNjIsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlNGNFBUMzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjk4NzI0MzQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NTYwODk0ODYwMTA1NzoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU1RsTWtDRUl1T3Byc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9aeGVhMFNkZEp5Y2ZjMzI3bG5MRlcrS0lHN1VJMUFyM3kyYTIxY3dIVHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzU5V0RGR1NCRDZpOW55YTZWUkkzSVgydkh4dmRLbmYzOE80Y3J6Njc4Tmsvdzk2VEdzcndOejZTR2Y2ZTR6U3NjeXMzTW9qMlhsU2pCQUp1alFOQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidE8vakRHTkRnRlBVMnFMNW1QOXRwT3c5TFBQeUpmeGpWc0ZYdzZqSGhNTVJpUHIwaTNkR3JIU0g1OTZMZlB2M3hvK1dRWS9zRFNYOXlTTXc3QklsalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyOTg3MjQzNDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTY5MTA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2RmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPZGYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0cG9RUWQ0RjlMZjlJc0lzSFUvQzZQeGNOdW9sNDZ6SHZLZjI5WDlKMnJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5MDI5MzEyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDk2ODk0ODkzN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
