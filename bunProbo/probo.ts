//@ts-ignore
const axios = require('axios');

export function getDepth(marketId: number) {

}


export function crateOrder (marketId: number,side:"buy"|"sell", size: number){

}



let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://prod.api.probo.in/api/v3/tms/trade/bestAvailablePrice?eventId=4309132',
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-GB,en;q=0.5', 
    'appid': 'in.probo.pro', 
    'authorization': 'Bearer IFx/0K7XeDzAN4S6/8wtTMABX3DZ1gdg1WVtc/lL+ZM=', 
    'content-type': 'application/json', 
    'if-none-match': 'W/"21cf-TKFVZhJSsOwT773gnYrhUr0IAbU"', 
    'origin': 'https://probo.in', 
    'priority': 'u=1, i', 
    'referer': 'https://probo.in/', 
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Brave";v="138"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-site', 
    'sec-gpc': '1', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 
    'x-device-os': 'ANDROID', 
    'x-version-name': '10'
  }
};

axios.request(config)
.then((response:any) => {
  console.log(JSON.stringify(response.data));
})
.catch((error:any) => {
  console.log(error);
});
