function makeHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { }
}
    //Fetch the price of Ethereum Poloniex
    const eth_api_url = 'https://api.coingecko.com/api/v3/exchanges/poloniex/tickers?coin_ids=ethereum';

    function ethereumGetData() {
        var request = makeHttpObject();
        request.open("GET", eth_api_url, false);
        request.send(null);
       // console.log(request.responseText);
        return request.responseText;
    }
 export function ethereumDataHandler() {
        var raw_data_string = ethereumGetData();
        var data = JSON.parse(raw_data_string);
      //  var name = data.tickers[0].coin_id;  
        var price = data.tickers[0].last;
        return price;
    }

    export function ethereumVolDataHandler() {
        var raw_data_string = ethereumGetData();
        var data = JSON.parse(raw_data_string);
        var vol = data.tickers[0].volume;
        return vol;
    }


//////Fetch the price of Ethereum binance
    const ethB_api_url = 'https://api.coingecko.com/api/v3/exchanges/binance/tickers?coin_ids=ethereum';
    function ethBpObject() {
        try { return new XMLHttpRequest(); }
        catch (error) { }
    }
    function ethBGetData() {
        var request = ethBpObject();
        request.open("GET", ethB_api_url, false);
        request.send(null);
        //console.log(request.responseText);	
        return request.responseText;
    }
   export function ethBDataHandler() {
        var raw_data_string = ethBGetData();
        var data = JSON.parse(raw_data_string);
        var price = data.tickers[0].last;
        return price;
    }

    export function ethBVolDataHandler() {
        var raw_data_string = ethBGetData();
        var data = JSON.parse(raw_data_string);
        var vol = data.tickers[0].volume;
        return vol;
    }

//////Fetch the price of bitcoin binance
    const btc_binance = 'https://api.coingecko.com/api/v3/exchanges/binance/tickers?coin_ids=bitcoin';

    function bitcoinGetDataBinance() {
        var request = makeHttpObject();
        request.open("GET", btc_binance, false);
        request.send(null);
      //  console.log(request.responseText);
        return request.responseText;
    }
   export function bitcoinDataHandlerB() {
        var raw_data_string = bitcoinGetDataBinance();
        var data = JSON.parse(raw_data_string);

        var price = data.tickers[0].last;
        return price;
    }
    export function bitcoinVolDataHandlerB() {
        var raw_data_string = bitcoinGetDataBinance();
        var data = JSON.parse(raw_data_string);

        var vol = data.tickers[0].volume;
        return vol;
    }



    //////Fetch the value of Bitcoin Poloniex
    const api_url = 'https://api.coingecko.com/api/v3/exchanges/poloniex/tickers?coin_ids=bitcoin';

  
    function bitcoinGetDataPoloniex() {
        var request = makeHttpObject();
        request.open("GET", api_url, false);
        request.send(null);
        return request.responseText;
    }
   export function bitcoinDataHandlerP() {
        var raw_data_string = bitcoinGetDataPoloniex();
        var data = JSON.parse(raw_data_string);
    
        var price = data.tickers[0].last;
       // console.log(data);
        return price;
    }

    export function bitcoinVolDataHandlerP() {
        var raw_data_string = bitcoinGetDataPoloniex();
        var data = JSON.parse(raw_data_string);
    
        var vol = data.tickers[0].volume;
       // console.log(data);
        return vol;
    }
 
    // get exchange data poloniex
  const polo = 'https://api.coingecko.com/api/v3/exchanges/poloniex';
  const bina = 'https://api.coingecko.com/api/v3/exchanges/binance';


  function poloGetDataPoloniex() {
    var request = makeHttpObject();
    request.open("GET", polo, false);
    request.send(null);
    return request.responseText;
}
export function poloNameDataHandler() {
    var raw_data_string = poloGetDataPoloniex();
    var data = JSON.parse(raw_data_string);
    var name=data.name;
    
    return name;
}

export function poloRankDataHandler() {
    var raw_data_string = poloGetDataPoloniex();
    var data = JSON.parse(raw_data_string);
    var rank=data.trust_score_rank;
    
    return rank;
}

export function poloYearDataHandler() {
    var raw_data_string = poloGetDataPoloniex();
    var data = JSON.parse(raw_data_string);
    var year=data.year_established;
 
    return year;
}

export function poloVolDataHandler() {
    var raw_data_string = poloGetDataPoloniex();
    var data = JSON.parse(raw_data_string);
    var vol=data.trade_volume_24h_btc;
    
    return vol;
    
}

function binaGetData() {
    var request = makeHttpObject();
    request.open("GET", bina, false);
    request.send(null);
    return request.responseText;
}
export function binaNameDataHandler() {
    var raw_data_string = binaGetData();
    var data = JSON.parse(raw_data_string);
    var name=data.name;
    
    return name;
}

export function binaYearDataHandler() {
    var raw_data_string = binaGetData();
    var data = JSON.parse(raw_data_string);
    var year=data.year_established;
    
    return year;
}

export function binarankDataHandler() {
    var raw_data_string = binaGetData();
    var data = JSON.parse(raw_data_string);
    var rank=data.trust_score_rank;
    
    return rank;
}


export function binaVolDataHandler() {
    var raw_data_string = binaGetData();
    var data = JSON.parse(raw_data_string);
    var vol=data.trade_volume_24h_btc;
    
    return vol;
    
}


export function buyETH( ){
    var rec = "";
if(ethBDataHandler()<ethereumDataHandler()){
   rec = "Buy Ethereum at binance price is lower than poloniex "+ethBDataHandler()+" $" ;
}
else{
   rec = "Buy Ethereum at poloniex price is lower than binance "+ethereumDataHandler()+" $" ;
}
return rec;
}

export function sellETH( ){
    var rec = "";
    if(ethBDataHandler()>ethereumDataHandler()){
        rec ="Sell Ethereum at binance price is higher than poloniex "+ethBDataHandler()+" $";
    }
    else{
        rec = "Sell Ethereum at poloniex price is higher than binance "+ethereumDataHandler()+" $";
    }
    return rec;
    }


    export function buyBTC( ){
        var res = "";
    if(bitcoinDataHandlerB()<bitcoinDataHandlerP()){
       res = "Buy Bitcoin at binance price is lower than poloniex "+bitcoinDataHandlerB()+" $" ;
    }
    else{
       res = "Buy Bitcoin at poloniex price is lower than binance "+bitcoinDataHandlerP()+" $" ;
    }
    return res;
    }
    
    export function sellBTC( ){
        var ret = "";
        if(bitcoinDataHandlerB()>bitcoinDataHandlerP()){
            ret ="Sell Bitcoin at binance price is higher than poloniex "+bitcoinDataHandlerB()+" $";
        }
        else{
            ret = "Sell Bitcoin at poloniex price is higher than binance "+bitcoinDataHandlerP()+" $";
        }
        return ret;
        }