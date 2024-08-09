const axios = require('axios')

let getPinterest = async (url) => {
    try {
        const headers = {
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en,ru;q=0.9,ru-RU;q=0.8,uz;q=0.7',
            'referer': 'https://pinterestdownloader.io/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
        }

        url = `https://pinterestdownloader.io/frontendService/DownloaderService?url=${url}`
        const response = await axios.get(url, { headers})

        let info = response.data

        return {
            ok: true,
            info: {
                id: info.url,
                thunbnail: info.thunbnail,
                formats: info.medias?.[info.medias.length - 1] || null
            }
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            msg: "Error fetching data.",
        }
    }
}

module.exports = { getPinterest }