const ytdl = require('@distube/ytdl-core')

const cookies = [
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.905969,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-1PAPISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "cPJtsdqZsCjukrvU/AebobvHI6fc0K8cp7",
        "id": 1
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.905721,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "g.a000mgjrJwuz8t-vMetoM-kcobMzmQqd_Q_CN0JQjGI0iDagpvvGG2DyACjhjzI77kBJAsgkgwACgYKAbcSARQSFQHGX2MiizOkeVD94F-rUHO1dIumFRoVAUF8yKqUNYABSbQnZpLfOhVQScQr0076",
        "id": 2
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754637063.127134,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDCC",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzV_frlszbY1Ts2VI-9R8k84Q92OUEga9D_ngwNuGpR61JNt_4QJ-Qy4yt8LJTwdQ98NqA",
        "id": 3
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754637044.905649,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDTS",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "sidts-CjEB4E2dkX3BKfoI1ie2-zwjm7_llh8yEokQDWxpvO9KjmM51hWfMGsBxqDObpQgQM42EAA",
        "id": 4
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.906016,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-3PAPISID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "cPJtsdqZsCjukrvU/AebobvHI6fc0K8cp7",
        "id": 5
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.905755,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "g.a000mgjrJwuz8t-vMetoM-kcobMzmQqd_Q_CN0JQjGI0iDagpvvGPAx4mPESEC3YNtVhNFluYgACgYKAcISARQSFQHGX2MiBP3mLNivovyTdh5Za-KQshoVAUF8yKraH-k2U0brNnObIeEZ5MDz0076",
        "id": 6
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754637063.127236,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDCC",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzUEPyB9Ia-NVIPVUuOA1FbEXlodPEG9KWP4NsSdXT_dMZpFaPzA3VWpcMOFos6NK5zJTA",
        "id": 7
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754637044.905689,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDTS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "sidts-CjEB4E2dkX3BKfoI1ie2-zwjm7_llh8yEokQDWxpvO9KjmM51hWfMGsBxqDObpQgQM42EAA",
        "id": 8
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.905882,
        "hostOnly": false,
        "httpOnly": false,
        "name": "APISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "v5eFFDUUMMEmbgAj/ArmUxOoUizVOVngtP",
        "id": 9
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.905783,
        "hostOnly": false,
        "httpOnly": true,
        "name": "HSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "A9rS3F2QggjQFCQHO",
        "id": 10
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661048.849545,
        "hostOnly": false,
        "httpOnly": true,
        "name": "LOGIN_INFO",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AFmmF2swRQIhALcxIbL6_MmWhHHiLumHMvIcHkxpml4m9Nya8WQIPzhYAiBLemih-Uvm_6e8GLlTbKtZqmh1J8RYZ4ok9MbexLZqzA:QUQ3MjNmdzhFV0s5RUxpOG9OeUdzZW13VkJkRjlJUFAxbmt1UE5KRjEyQk9rU0NOMFlld3F4WXlPaFpnTXV1ZmF0UmFHZmNSaTlRYzFEeF9wMUZEVm54Y1lJZ0Fja3I0dTY5ZkhXYmFnZmVfcmxkXy1KeFQ4NkFsd3hoU3B4N1FnM0hEZEJPb0RoSUVQM3c3VWZIT2NyUVFBTlRmSUdpQVJ3",
        "id": 11
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661057.179308,
        "hostOnly": false,
        "httpOnly": false,
        "name": "PREF",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "f6=40000000&tz=Asia.Tashkent",
        "id": 12
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.905926,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SAPISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "cPJtsdqZsCjukrvU/AebobvHI6fc0K8cp7",
        "id": 13
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.9055,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "g.a000mgjrJwuz8t-vMetoM-kcobMzmQqd_Q_CN0JQjGI0iDagpvvGcJwB-Ac1Sbe28AuKSVmb2QACgYKAesSARQSFQHGX2MiB71puNzra5A1I2mX6WYZWBoVAUF8yKrYfdQ0qg-1PHcCWkJoSECC0076",
        "id": 14
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754637063.126944,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SIDCC",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzV152QPQDdrZeHadcOeWUxpbnvZYK-tEnCmPJRdwf4pYPAd_AdxLsb-kXTFCTAlE_fm",
        "id": 15
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757661044.905839,
        "hostOnly": false,
        "httpOnly": true,
        "name": "SSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "ACA98l_D2nQqijRNQ",
        "id": 16
    }
]

const agentOptions = {
    pipelining: 5,
    maxRedirections: 0,
    //localAddress: "127.0.0.1",
}

const agent = ytdl.createAgent(cookies, agentOptions)

const qualityLevels = {
    1: ['144p', '144p60', '144p HDR', '144p60 HDR'],
    2: ['240p', '240p60', '240p HDR', '240p60 HDR'],
    3: ['360p', '360p60', '360p HDR', '360p60 HDR'],
    4: ['480p', '480p60', '480p HDR', '480p60 HDR'],
    5: ['720p', '720p60', '720p HDR', '720p60 HDR'],
    6: ['1080p', '1080p60', '1080p HDR', '1080p60 HDR'],
    7: ['2160p', '2160p60', '2160p HDR', '2160p60 HDR'],
    8: ['4320p', '4320p60', '4320p HDR', '4320p60 HDR']
}

const normalizeQuality = (quality) => {
    if (!quality) return ''
    if (quality.includes('2160p')) return '2K'
    if (quality.includes('4320p')) return '4K'
    return quality
        .replace('p60', 'p')
        .replace('HDR', '')
        .trim()
}

const getBestFormat = (formats, qualityLevels) => {
    const levelFormats = new Map()

    for (let level = 1; level <= 8; level++) {
        for (const quality of qualityLevels[level]) {
            const normalizedQuality = normalizeQuality(quality)
            const format = formats.find(f => normalizeQuality(f.qualityLabel || f.quality) === normalizedQuality)
            if (format) {
                levelFormats.set(level, format)
                break
            }
        }
    }

    return Array.from(levelFormats.values()).filter(format => format.mimeType && format.mimeType.includes('video/mp4'))
}

const getBestAudioFormat = (formats) => {
    return formats
        .filter(format => format.mimeType && format.mimeType.includes('audio/mp4'))
        .sort((a, b) => (b.audioBitrate || 0) - (a.audioBitrate || 0))[0] || null
}

const formatDetails = (formats) => formats.map(format => ({
    itag: format.itag,
    mimeType: format.mimeType,
    quality: normalizeQuality(format.qualityLabel || format.quality),
    audio: format.audioBitrate || null,
    type: format.container || null,
    contentLength: format.contentLength,
    url: format.url
}))

const getYoutube = async (url) => {
    try {
        const info = await ytdl.getInfo(url, { agent })

        const formats = info.formats.filter(format =>
            format.mimeType && (format.mimeType.includes('video/mp4') || format.mimeType.includes('audio/mp4'))
        )

        const videoFormats = getBestFormat(formats, qualityLevels)
        const bestAudioFormat = getBestAudioFormat(formats)

        return {
            ok: true,
            info: {
                id: info.videoDetails.videoId,
                title: info.videoDetails.title,
                caption: info.videoDetails.description,
                duration: info.videoDetails.lengthSeconds,
                views: info.viewCount,
                author: info.videoDetails.author.name,
                username: info.videoDetails.author.user,
                thumbnail: info.videoDetails.thumbnails?.[info.videoDetails.thumbnails.length - 1]?.url || null,
                formats: formatDetails(videoFormats),
                audio: {
                    itag: bestAudioFormat.itag,
                    mimeType: bestAudioFormat.mimeType,
                    quality: bestAudioFormat.qualityLabel,
                    audio: bestAudioFormat.audioBitrate || null,
                    type: bestAudioFormat.container || null,
                    contentLength: bestAudioFormat.contentLength,
                    url: bestAudioFormat.url
                }
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

module.exports = { getYoutube }
