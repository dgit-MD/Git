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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJqUkpPRjN5VGk2VXVITDVnSzljU3ppcHVqM3ZxKzhZaGgrS1JKVEJYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmppK3pxOWZqNExVeExsZTJ1Z1ZPdUU0RHo5UnJxak9GMVZINzJsNEdtdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRUNqN3NBZTNROFAzZFZMa3JjUVlLSG1KUWNVME8wbU5HZ1NsTk4xa1dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZMmkwUVFlcE5vcWx6MTY0RXppcFNoNFBWTXgzZmNFOExYcjF2S0s1MTNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCdDhRZ1dXREZrdDROc3QvK2VOWmdSOGpKY2pMcWEydzhQNjBLU0hGRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngzbkZhQldUdlJ6bnFkM2hocjFZYytYMU5FZ3g4QVJUakU3elFzR1RrQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpScERQd0FRN3pnK0g2SWFZRlRRYktnL3VKSXJHRUZJNUlRemxtNVYyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ21xbU5tNmU2MC96U2RNSC9nbUtkVC9NNlNIdy83czNVaHJiUmJsbFpuQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdwWXdPNXN1b1BVZy80WmlCaWUrbEVwMkVJblJKWVlhQ1dabk00TzZxcWNJNS81b3ZiRGtjeVJFSTFiOWxhazdBYXJOTFkrZEVvRi9XeTBTZ3hpZWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6Ii83R21wQjExUFFvMmViaVNBZnFvNEVaSHllSWJ4bHcwOWF3M2lCV2wrTzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlAxME9BSTdjU2lDNUFReXNHb1dPNWciLCJwaG9uZUlkIjoiMWU3MGQ2YzUtM2ExNC00YTJiLTgzMjctZTJjMjFkY2U4ZDRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik00YzlOb2lWTXFJRHBrSUhSbzdVbkxPSjlQbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5bDMzc0dTNmc2dU9paGEyRWlVNkJaRm5aSlk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlNNWTdaQkoiLCJtZSI6eyJpZCI6Ijk0Nzg1OTIzOTI5OjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im93bmVyIiwibGlkIjoiMTM1MTQxNzMzMjA4MjQ5OjIxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlMMTlJREVMNkV1TUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0pyV2N2Vm5LWFJ1OEdldFN5OEJyaVdXY0U0SUpER0FMa1lkOGVHaExFWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMGhpSnE5ODBFckNqcndUbzlHbnZsMVEyenBVcWJKYmlOd1d2ZEdJNlY2T2djaVlCUmlMTVk2a3VKZzI5bVE3aWpuZ1BhVUorcG95d0tDWVZhenRuQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkRSUlJCTVRDKzRac2dIMEZWVWVKVGtKSWZGUHBFREEyU29XaHNXb2RiWjJHejZ5R2t3M2VHVk45YXBhQnBCYkdsUndaR2ZRb2VtR1ZtbEtQTXBkQmhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODU5MjM5Mjk6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGlhMW5MMVp5bDBidkJuclVzdkFhNGxsbkJPQ0NReGdDNUdIZkhob1N4RyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5OTQyODU5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFRayJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94785923929",
  PASSWORD: 
    process.env.PASSWORD || "QED6-FZSJ-WWNS-YMWS",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
