exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *About ${KENISHI-BOT}*
╠════════════════════
║├≽️⚜ *AUTHOR*: _KENISHI_
║├≽️⚜ *DESIGNER*: _KENISHI_
║
╠════════════════════
╠════════════════════
║  🌀 *${KENISHI-BOT}* 🌀
║
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${https://chat.whatsapp.com/KNfOL9FKamv2B6uHk91NWY}_
║│
║│2. *Gruop Wa*
║│ _${grupch3}
║│
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║ |
║╰───────────
║
║ *MADE BY KENISHI*
╚════════════════════`
}
