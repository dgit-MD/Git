//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1NbXhXZy8xKzROcitUaDB0ZzRabi9nZkZxMVdCaXcvMGVQM29oUXpHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK01hS2tVK2RxVXdOOFJ5QUUzM2UxbHRmb2d4Qk1rbGZ2aFpxNGl2QmtDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSjVvVFVtL25qUWRaa0ZyMkpyT0QyY09pdzB3SkVhQktTVExXUUxjd0V3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RE96V282MFMzcXMzOXZldWgvNkpLcE5ncFRVUTQ5Q3pZQnV0MWwybDIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPREJvejNmNEtObFRMK01LeWtvRVcxMW1TYmRFdDBSQ294dC92czhCMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd1SGdvdm9JNkViZWlMSEJXMTV3VnFpelRHNFBxK2R5MDZ6cXRHNS9GeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhpdTF6bTdnQW4yN3FrK1d3UWltczliTmdiR3BiK2IxdmZoVmpnL25tdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJHSkx6Nk1RVEtsNFpCL2ZVZHhURHVGajhpbXE5SFFoZFZiMXpiT3BoST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJVOTE1Tnd6Z0RyMmxhVlQweGlKRzF1UXJ2ZnNhaDBOWFZkSW5CMWN3SVpzVE5tazQyeXl2eEN0WjI4NHRSWkE5c0N1SjZ2S0tFRGR6MGt2RFEyaERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6IkVvZ3NrQVpyeHNHS2JSejBQL1djNFE5L1k4WnRCZG9vTnRvcTZCbCtxU0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJRQWo1MXBQU2tDZVVsWkZqeGhMWkEiLCJwaG9uZUlkIjoiOWVjMGEzOTUtY2VjZC00M2IyLTk0ZGYtZjhjZmE1NTFlYjE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGZDRIYTY0ZEVCSWVPWlNOejVXRzNhUm1Rcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBa3pKQndiZUFLaXlnVlE3YjhzVVMrUjNYb0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkJUMlFEMUgiLCJtZSI6eyJpZCI6Ijk0Nzg1OTIzOTI5OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im93bmVyIiwibGlkIjoiMTM1MTQxNzMzMjA4MjQ5OjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHFMMTlJREVPV2pwY0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0pyV2N2Vm5LWFJ1OEdldFN5OEJyaVdXY0U0SUpER0FMa1lkOGVHaExFWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWDlINVU4NTRwSmU3Q3pwM0F2eGNuRDlzWXE3SUJNVEcvMHF4TWhIVUdJcXVnZjY0cDdaOW5DMHRxRDhsSmlJQms0R25QeTYxNGIxWThFYTVLZXMyREE9PSIsImRldmljZVNpZ25hdHVyZSI6IjNrNFBLaWRGWjg1SjNnbnZTR0dJa0pJMDd0RmNlRWI1LzRqUml0V0pHcnpZS1EzaHRCa1JXaDJIby9MdXJxUndKRy9XVFA2WU1lVlJtTndDb0lCOUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODU5MjM5Mjk6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGlhMW5MMVp5bDBidkJuclVzdkFhNGxsbkJPQ0NReGdDNUdIZkhob1N4RyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NjM1NTcxLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVuOSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94785923929",
  PASSWORD: 
    process.env.PASSWORD || "dilaksha",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
