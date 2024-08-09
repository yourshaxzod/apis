const axios = require('axios')

function formatBytes(bytes) {
    const mb = bytes / (1024 * 1024)
    return {
        mb: mb.toFixed()
    }
}

function extractUrlsAndFormatLengths(data) {
    const urls = {}

    data.qualities.forEach(quality => {
        if (quality.qualityInfo.itag === 18) {
            urls.video360p = quality.url;
            urls.video360pLength = formatBytes(quality.length)
        }
        if (quality.qualityInfo.itag === 140) {
            urls.audioM4a = quality.url;
            urls.audioM4aLength = formatBytes(quality.length)
        }
    });

    return urls
}

let getYoutube = async (url) => {
    try {
        url = `https://downloader.freemake.com/api/videoinfo/${url}`;
        const response = await axios.get(url, {
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

        let info = response.data
        console.log(info)
        const urls = extractUrlsAndFormatLengths(info)
        return {
            ok: true,
            info: {
                id: info.videoId,
                title: info.metaInfo.title,
                duration: info.metaInfo.duration,
                thumbnail: info.metaInfo.thumbnailUrls.hq ?? info.metaInfo.thumbnailUrls.md ?? info.metaInfo.thumbnailUrls.default,
                video: {
                    length: urls.video360pLength.mb,
                    url: urls.video360p
                },
                audio: {
                    length: urls.audioM4aLength.mb,
                    url: urls.audioM4a
                }
            }
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            msg: "Error fetching data."
        }
    }
}

module.exports = { getYoutube }