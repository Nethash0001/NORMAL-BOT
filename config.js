const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3qVPnIVNelkEPGKoKAoTs5DAcVN5FIUKHb8k/mX+Zf5kgnanT6TzDnTw1OlqFp71Vpr7zeQZlGJlqgBwzeQ46iGBLVL0uQIDMGo8n2EAQU8SCAYAiSJRzZZ7JS1bhoLazM1mKl5FRcasXFDq8ckHWOyE0J7qryCOwXyykki9xeAXDHo1QVz3ucjWHHNnpsZNp9ATy3HpTWIrfNkb9PX8Zpn56/g3iLCCEdpoOQhOiMMkyVq1jDCX6O/Vwm3UhrjEEhJEvE+KXfM4jzw5bmxcLoTpe6Mw4OtCwkdfI1+rz8VsDiv7cO0jM6DZdcLsVKbCzXljiu27zAFUgwNN33TfdIvoyBF3txDKYlI82Xd2TVbmcLaKsO4h0PX3I/3jDeTN3skZINBhRbHwsvy1Yixdl8jfthcndEaEy1T9nyHPu/Unu77gkC7Ny3RcXyBg954R7tBVP5IfI0/snL6P7rvVtu89HG8TrneziUz1XUVVvI7IVMvR3SBD8ZgW0iL1Sktv0Z/4ibLPV9VI19Qt9rxIk36k4bb7HssVu2jw9p4c2UrR9MeRr7Th6TCv2KpHBe5a8xW+r7eTNy8RJl3sXScx0dXC7ZyGKidnrrNK82bWYHtefNbFKcVNsK8lPfzzlhrFl1JN1VRrWSRJoZxmNjy5vXxohNq5h4YMncKYBREJcGQRFna7gksBaBXm8jFiDzUBSS09cJheT4meJ6PT7fRbqvph7EzvvDaIZ6tK3Ngi1BgT/1XQIEcZy4qS+TNopJkuFmhsoQBKsHw9+8USNGVPH1rq3EMBfwIl2SXVnmSQe/D1I+f0HWzKiVmk7pyu0AYDOnPbURIlAZlK2OVQuyGUY3kEJISDH2YlOhOAQ/VkYtaPHDzX16yjLib8VK0jO0NMvqSCVrKYZY+j/SQyyMPwRfOQ+iFF/roxYHO4EWkGddx/T4j+A6gQPTeMu2dn7cJ6Yinah4Y3jZWJsGcuQ3orq+mWMoeLjylRxh5YEhwhSjgQPdU5dvshNJf4DJFjr3T9EaYOGxsJ7PnNBwI8lXSgh9wn5aC4dvnmJIzr8Ubr+TlmpcXgALnRwKj9uUDXuQZluU5gRtyv5XfLq2MMM+/pYgACqSwPQv++uPPtsS7/u1lDxEYJSUYAlndWvVxoyirZS2I9HQqKYEkBxL49Osj989gGcmcS6zKuRgHy4v01LDrcnORUn3DEBbTxXpzFWfRJHO30uu/gIAhyNhKrSUhypf9QxJdl2v/dJ3edvl2V3SLbW3yUhGLm4uqbYttSs9X04t+8K77vDTtGF+t+Fg4skrT6cFUZL+MbmbcDOTgta32zM0/ikVWIRwP/V7XW5ApU41H2qTGeqAJ9rkzX/unepmkjTURp5zUMbr2hK2Fco/DftFZ6gFWd93ZtOCOswUnBotU7/n7xWYUPDvyMRGS90kcPZrl7T1lfoQeg+3dgf/w6TPu9J36AeF9UP4kUqPd0dQEyzn3FYs52HFO71VRWUmL20lzvGKwjOkVuvIhnCkXcL9/p0CeQOJn+AyGAKYeziIPUCCBJZE+O3YbnVFJ4DkHQ0bkaZZje4JAgXMj5blJIPlodCC1nxaewP1vL84omQMIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





