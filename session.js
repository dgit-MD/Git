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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JUYng4a0x6dXEwaDZ0M2xDMjVaaXFwS3F6cFM1bmp4czNuM2FSTkFXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGtGRlJzS0w1ckdQNWpzbi92Y1B6bUI1VXdXQjdpS09KbUxWcnZ1WDFpMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSE9BYUVDZERveVh5QnZzOEt5QmpmamZPNnRlQTVtVG0wQUZsbHZYRUZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0UTdpOGpPaElTMGpvenJHcVBFbkxHMG1QOEdpaXl0b2lTVFFqNEtJMnhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLcGlLOUZ2Q1o4ZnFtejI4Z0pwc0QwcXBYNHdvV2ZlcXZJSkx3NzJGRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVjWGJIcTVveWEvRG01S1ZaSTFDcWU4VGhQSjI3QjUxS0dnS0s3aGpTbEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtUcG5DV1FDamhaa3BibVI1dERhKzFYRUVrU0doRGxmSDhrWFhNOHNsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjFmU3hVeEZjdVhkYmcxYzl4TGh4c2RzR0QzMXhCY3JBYm9uaXhla0NsYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZFNkFLUHZhR05Cdm9yQnl0M0RRVmN2TjFJZCs2Y2VPSWtuNnlJT1NEblo5NitWVE5zWVJuVUlqbitZcmh5VUI2RHlSSXl4alZFSUs0NHdkY2VnZEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJzK3pINFZTeFBOdlJsM3M0cmJGd0JHUSs5UmFlc09tZWtsOGxocEdrT3pzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyVktRd3FqaFJEU0hVQTVkeW56WDhRIiwicGhvbmVJZCI6ImZjZTM2MDU4LWRhMTctNDg2ZC1hNTVkLTZiM2FhNzhlYjU3OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJdy81a2JJd2xrMk5CYkRhZFR0Z1VwbG9SSlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjhYcmVNZXJOYnZXd3JZcFY1dUdDbVdjcHQwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFKOENaQ0FTIiwibWUiOnsiaWQiOiI5NDc3NjI4MzU3NDo5OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE3NTcxNjIzODk0NjM4MTo5OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l5cHdNQUZFS0xhcGNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxjK0ZhblliSEl0R2pCd3B5ZzlpbW1aRm52eGM1UDBGLzcrZ3dqaUVPSEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktZMzRRR2dFbzg4UU50UDU0N0VZVktSNXRidWVXeGpURE9abDZjdU9sWFVsZXBCUStGVW9ZcnN6U2NFaXRLWmlaU2NiektUR0VwTzZEK1BxOEcxTkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3azhiTXF0Ym1YWjVhdEp4MzhlTjlNdmpjYllaeGdSMFNLL2E5L1Voc01PN0d2YnFyVzJIS0dZVU9KMHVZMVh1d0ExMVVVK1VxN2ExVjNyRExqOHlEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc2MjgzNTc0Ojk4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMzUGhXcDJHeHlMUm93Y0tjb1BZcHBtUlo3OFhPVDlCZisvb01JNGhEaHgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTY0MjU0NCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
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
