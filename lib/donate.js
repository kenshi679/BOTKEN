exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *Donasi Ke ${BotName}* 📟
╠════════════════════
║├≽️⚜ *SMARTFREN*: **
║├≽️⚜ *TELKOMSEL*: **
╠════════════════════
║   🌀 *${BotName}* 🌀
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${https://chat.whatsapp.com/KNfOL9FKamv2B6uHk91NWY}_
║│
║│2. Gruop Wa
║│ _${grupch3}_
║│
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY KENISHI*
╚════════════════════`
}

