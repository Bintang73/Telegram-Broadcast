const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const input = require('input');
const cron = require('node-cron');
const moment = require('moment');
const delay = require('delay');

const apiId = 26164314;
const apiHash = 'e690e402dbd4c7dc5bdef89a2abe3921';
const stringSession = new StringSession('1BQANOTEuMTA4LjU2LjEwMwG7h5/pewc4IgvzUzPpIBFQnxnJaW03ED2b74YUjUvcEers8LEUZhhuzyfp5l8SwUfdA7fT1iLQzmW1LpAsTeDMUeydeRmM3bNBJBpBCsfOHedOTokiQu/BOxUHedTxvEyjypsuXzzYbd+g5rpUtz+xNlkVxVcrzY+GLTkj5d0qe0ZEyLmlPurZYmr3IqKSlINbg6Dma8opt7WY4x6OE8N2VjsbzH5Jshv2fvLd7nBl7qd8Y1xTYk0iL+iCbozQe6w96oypJSOZ4sHtA28CczVwMFniNfXOgVPdXtH9vcoC5lD0tqkaKNHyXfmszx2XkoQPqlIA7Hpmfr5kjM6R2Q/akQ=='); // Fill this later with the value require(session.save()

function getGreeting() {
  const currentHour = moment().hour();

  if (currentHour >= 5 && currentHour < 10) {
    return 'Selamat Pagi';
  } else if (currentHour >= 10 && currentHour < 16) {
    return 'Selamat Siang';
  } else if (currentHour >= 16 && currentHour < 19) {
    return 'Selamat Sore';
  } else {
    return 'Selamat Malam';
  }
}


(async () => {
  console.log("Loading interactive example...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  console.log("You should now be connected.");
  console.log(client.session.save()); // Save this string to avoid logging in again

  // client.setParseMode("HTML");
  console.log("parse mode is :", client.parseMode)

  //const cronExpression = '* * * * *'; // Every minute
  const cronExpression = '*/30 7-21 * * *';

  // cron.schedule(cronExpression, async () => {

    console.log("Starting Broadcast..")

    let listacc = [
      "grupchatjualbeli"
      // "me",
      // "sharingsinergi",
      // "waroengpromo",
      // "JBPREMIUMAPPS",
      // "grupchatjualbeli",
      // "jualbeliaplikasipremium",
      // "TrickApps1",
      // "jubelsellergledek"
      // "rccstore_bot",
      // "telezchatbot"
    ]

    let listvalidacc = [
      /*{
        type: "all",
        group: "sharingsinergi",
        title: "Ruang Sinergi"
      },
      {
        type: "all",
        group: "waroengpromo",
        title: "Waroeng Promo"
      },
      {
        type: "private",
        group: "JBPREMIUMAPPS",
        title: "JB PREMIUM APPS"
      },*/
      {
        type: "all",
        group: "grupchatjualbeli",
        title: "JUAL BELI APLIKASI PREMIUM"
      },
      {
        type: "private",
        group: "jualbeliaplikasipremium",
        title: "JUAL BELI APLIKASI PREMIUM"
      },

      {
        type: "all",
        group: "jubelsellergledek",
        title: "JUAL BELI SELLER GLEDEK"
      },
      {
        type: "all",
        group: "TrickApps1",
        title: "PASAR AKUN"
      }
    ]

    for (let groups of listvalidacc) {
      // Mendapatkan tanggal dan waktu saat ini dalam format yang diinginkan
      const currentDateTime = moment().format('DD MMMM YYYY, HH:mm:ss');

      // Mendapatkan ucapan
      const greeting = getGreeting();

      console.log("Message Send..")

      const captions = `${greeting} Semuanya Member Grup ${groups.title}!

🌟 Promo Spesial! 🌟

**Ready Vidio Platinum Private (No-Sharing)**.

Dapatkan pengalaman menonton konten Olahraga Premium tanpa batas dengan Akun Vidio Platinum selama 1 tahun! 🏆⚽🏀

📺 Apa yang Anda dapatkan:
✅ Nonton UCL, UEL, Liga 1, NBA, La Liga, Serie A, Ligue 1, dan banyak lagi!
✅ Tersedia konten Korea, konten Anak, Anime, konten Bollywood, dan saluran TV Premier.
✅ Akun pribadi, tanpa berbagi, 1 pengguna = 1 akun.
✅ Mendukung semua perangkat Anda, jadi Anda bisa menonton di mana saja.
✅ Harga spesial hanya Rp ~~30.000~~ 25.000!

💳 Metode Pembayaran:
💼 BCA
💰 Dana
📱 Gopay

🔒 Akun kami dijamin aman, tanpa risiko berbagi dengan orang lain.
❌ Tidak bergaransi, tetapi kami pastikan akun Anda akan awet!

Hubungi kami sekarang untuk info lebih lanjut atau memesan:
📞 WhatsApp: s.id/vidioplatinum
📞 Telegram: @starfz`

      if (groups.type == "all") {
        // await client.sendMessage("me", { message: "Hello!" });
        await client.sendFile(groups.group, {
          file: "banner.jpeg",
          caption: captions
        });

      } else {
        await client.sendMessage(groups.group, { message: captions });
      }
      await delay(5000)
    }

    console.log("Broadcast Done..")
  //});
})();

//sharingsinergi