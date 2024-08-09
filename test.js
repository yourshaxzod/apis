const axios = require('axios');

const url = 'https://downloader.freemake.com/api/videoinfo/A-uge5VJHXk';

axios.get(url, {
    headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en,ru;q=0.9,ru-RU;q=0.8,uz;q=0.7',
        origin: 'https://www.freemake.com',
        referer: 'https://www.freemake.com/free_video_downloader_skillful/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
        'x-analytics-header': 'UA-18256617-1',
        'x-cf-country': 'UZ',
        'x-remote-host': 'www.freemake.com',
        'x-request-attempt': '1',
        'x-user-browser': 'Safari',
        'x-user-id': '0a1649eb-99bf-fc8d-4a09-7cbf027b20be',
        'x-user-platform': 'Linux x86_64'
    }
})
    .then(response => {
        console.log('Status Code:', response.status);
        console.log('Data:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
