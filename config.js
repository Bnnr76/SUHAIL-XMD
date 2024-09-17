const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923271656076 Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923271656076,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  |SUHAIL_08_44_09_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5LFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTzRqV1d3RmR6NSswcHlQYmZPL0tVY0pRRy9VN2tsWGVYcjZyczRhOWdLST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYlF0NmpiUWhUaDJ2TkhfN1VZUm5OZ1wiLFxuICBcInBob25lSWRcIjogXCI1MGRiZGNmMy03ZjZmLTRjYWUtYTk3NC04NDc4NDc3NTE4MmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAyMDUsXG4gICAgICAxNzQsXG4gICAgICA5OSxcbiAgICAgIDIzMyxcbiAgICAgIDQwLFxuICAgICAgMjQ4LFxuICAgICAgNTMsXG4gICAgICA1NCxcbiAgICAgIDU5LFxuICAgICAgMTg3LFxuICAgICAgNzAsXG4gICAgICA1NyxcbiAgICAgIDE4NixcbiAgICAgIDIxLFxuICAgICAgMzYsXG4gICAgICAxODYsXG4gICAgICAxODIsXG4gICAgICAyMDQsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAxNTcsXG4gICAgICA5NSxcbiAgICAgIDk5LFxuICAgICAgOTEsXG4gICAgICA1MSxcbiAgICAgIDE3NyxcbiAgICAgIDEwMSxcbiAgICAgIDcxLFxuICAgICAgMTEzLFxuICAgICAgMjMwLFxuICAgICAgMTEwLFxuICAgICAgMjI5LFxuICAgICAgMTgzLFxuICAgICAgMTMzLFxuICAgICAgMTE4LFxuICAgICAgMjAxLFxuICAgICAgMjE1LFxuICAgICAgMTQwLFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjZZRFk3UFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3MTY1NjA3NjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjczMDIzMDY4MzMyMTA1OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AvNzZaUUVFTktDcGJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMXRsby9XdGJ2dWtQSGhybXY5SVhEUGs4SkZPZVV1dWxTbitjRktVamJGYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIWTZISGdrWGdCZnlRWXQvbVI0dnRLYU42NEhFQ1dSTERXbzZNWktCM1ZLUjhmWTBPOGtFbUp5Ukd1dzFHdmZhRkxXRHgzTjhvd2ZXTXJRb0t1VFVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRSWVJUzBibHhoOXlUZmQ3R3pVb2REM0ZkbytnQmw4OWJNMEd1WGs1VmROZVNUVDduTHBjMEtTTzFKNkpiS2NEdENoTjNNdVNZMmZ0cEpXd2NBOGlDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzE2NTYwNzY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2NTYyNjQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWJtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNYm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvL0d0a1RlMGMxcUZIQXcyNWVlMjlQY3ZVbG1QaUpJMmZjRk1iWktqRjM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTc0MjEwNTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==| "your session"  // PUT your SESSION_ID 


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
