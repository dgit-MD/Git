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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUcrQTNNNDNTbE4wVyt3SE1PNGxiYWJzZ0VrWnBxSkVSdnJEandMeUJuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2lERnR5TTRWZHlTdXlFLzRVdHlCTUQ1THlPeTBXck93QzlJZmZVTEFpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQmJWYzVPdlhZaHR2NkN4UlVNWFVORjB0VWpoc21Xckg3NE44b3VEejA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwLzFOb3A2RkJVbVJ5eEMyek1hd0ZMR0xTTGY5SEJYSm1jcUtGUWtQVFRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOMitjbWFsN3VWVnN3eFhkTjlmQ3JVdFZSaG4rZ3ArK3NSVjR0MlRMWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNlSW9LOGd6SkhGM2xmakV0aVljV1o4VjZ3aUI2TnAySkRlRUFIUHEzMGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ08xTURad3dNUU5YN0t4elF6R3F5STAwZGhYMEY5bDBEWWV2cTdJbFJsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHd6UzZLdm5tL00zNkM5ZzdDY1g0eGcxRHdFWWtIT1pFd0lGM2s4b1dHQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9EV3RuRnBQcEFkZkZscm5yMEpOcHlCR2dFMU5VM1l2N3FtSi9EcGd1L2NxcnN5REl3Z0JYUkRGdEFwOVRITTh3OWgyT2xhT3N3WC9GOUEwZk1kTUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6IlRNbWNtOFpQdmdmZWZVb0ZwTFZKK0hzSWJPd3VFYlNBZi82THV0bkEyNHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjN1d3AtdFJzVGVTME0tYUR3WmIyT1EiLCJwaG9uZUlkIjoiYWFkN2U1M2UtOGJkYy00YjMyLThlMjktYmYyMzA2NWZjZDM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCYXp1SG13QzZrY2wvNjZJWU9RQzZYMFZHTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVei9KTnBMM29kOU5hemkxQzRYdUh2eUIrQXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlNFS0NCWUQiLCJtZSI6eyJpZCI6Ijk0Nzg1OTIzOTI5OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im93bmVyIiwibGlkIjoiMTM1MTQxNzMzMjA4MjQ5OjIwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHVMMTlJREVPSzZxY0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0pyV2N2Vm5LWFJ1OEdldFN5OEJyaVdXY0U0SUpER0FMa1lkOGVHaExFWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWEhQbFRkcGthL0dLMkovVkNoK21Hdmk5ajUwUDk5eTVLN2U1eDVJY1lBSTJ4OFc5cDRZRUhWRVRrdnRWa3JmTDdabDVmR05FQU11ZVB1amVFOGVqQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5hMmU0QW5icjNGMSthK3FxczRBWUpzYnJJZGYzeVJ6Y1lKMDlvMDk1b2FKU0RjSlM0YjVITko4KzN4REU1MlZ1ZlI1Mjd2Mm15VGErd3FIUytzNkRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODU5MjM5Mjk6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGlhMW5MMVp5bDBidkJuclVzdkFhNGxsbkJPQ0NReGdDNUdIZkhob1N4RyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NzA0MDQ4LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFOcyJ9",
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
