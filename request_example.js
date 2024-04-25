const Api = require("./lib/RestApi");

let { authparams } = require("./cred");

api = new Api({});


// api.login(authparams)
// .then((res) => {        
//         console.log('Reply: ', res);

//         if(res.stat !== 'Ok')
//             return;


//         api.get_time_price_series('NSE', '22', '1645039801', '1645119424', '1').then((reply) => { console.log(reply); });

//         //search scrip example
//         api.searchscrip('NFO', 'NIFTY DEC CE').then((reply) => { console.log(reply); });


//         api.get_quotes('NSE', '22').then((reply) => { console.log(reply); });

//         api.get_orderbook().then((reply) => { console.log(reply); });

//         api.get_tradebook().then((reply) => { console.log(reply); });

//         api.get_holdings().then((reply) => { console.log(reply); });

//         api.get_positions().then((reply) => { console.log(reply); });

//     }).catch((err) => {
//         console.error(err);
//     });

//api.searchscrip('NFO', 'NIFTY APR CE').then((reply) => { console.log(reply); });

api.searchscrip('NFO', 'NIFTY25APR24C22400').then((reply) => { console.log(reply); });

// let instruments = 'NIFTY25APR24C22350';
// api.subscribe(instruments)

//api.get_security('NFO', '68106');
setInterval(() => {
    //let QuoteData = api.get_quotes('NFO', '68108');
    //console.log(QuoteData.lp);
}, 100);