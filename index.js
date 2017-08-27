const Tele = require('telegraf');

const app = new Tele(process.env.TELE_TOKEN);

app.command('/help', context => {

});


app.startPolling();