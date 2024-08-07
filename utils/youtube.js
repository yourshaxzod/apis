const ytdl = require('@distube/ytdl-core')

const cookies = [
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.14972,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-1PAPISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "Tg0v8kT6dL8qbFHR/AtcMKBnVbFVxyN9hx",
        "id": 1
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.149985,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "g.a000mgjrJwSNfdwWXJOSaRJM14tamD3yUoRnE7LbCbFRmGO1lDmmZ1hQh3EyR1gtHowlUCjzqgACgYKAYESARQSFQHGX2MiFSEIgkM6xVs4J_0byIimtRoVAUF8yKrIZY798CxO_HiSwO1GMR2p0076",
        "id": 2
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754580200.927279,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDCC",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzUp96UWr12ucH_Iv9cLQjx4jfySE6KJQip2lBq3Qs3stZ_mJqsfDWaD85F_QjNRa7SBvK4",
        "id": 3
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754580124.309827,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDTS",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "sidts-CjIB4E2dkWbeEol_ypcXNW8UgKDJbiZvW-Fb06F1zWjREKljHCS9Q1FtplwcJjGqFuDccxAA",
        "id": 4
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.149765,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-3PAPISID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "Tg0v8kT6dL8qbFHR/AtcMKBnVbFVxyN9hx",
        "id": 5
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.150028,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "g.a000mgjrJwSNfdwWXJOSaRJM14tamD3yUoRnE7LbCbFRmGO1lDmmqdpDWYYXW-Au1748zHOB5wACgYKAWYSARQSFQHGX2MimaO_vkFOqMSmYdrdHXGhaBoVAUF8yKp7woKudCq6YuoNVhEPXNIi0076",
        "id": 6
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754580200.927343,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDCC",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzULYn804wykNf3PGkPwWq0rvroXwK_9A1jO2Z_UrjxBx3v6Tpvg1BJjZ8tjvk7X0KMN4Mo",
        "id": 7
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754580124.309989,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDTS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "sidts-CjIB4E2dkWbeEol_ypcXNW8UgKDJbiZvW-Fb06F1zWjREKljHCS9Q1FtplwcJjGqFuDccxAA",
        "id": 8
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.149614,
        "hostOnly": false,
        "httpOnly": false,
        "name": "APISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "w12vU_oxXtn4wIKA/A6DhsoxoEabyyu-pK",
        "id": 9
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1723044681,
        "hostOnly": false,
        "httpOnly": false,
        "name": "CONSISTENCY",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AKreu9sWcl8QoBJq0u6c_gVk-jJknbbWpZhi8LawEkV7y0lT9XOel6baSNxycLKVjqeR7c-3NrKfCMIHp7mMbEfEg1-iPKooQZC8D5pzzmMJrWJ9LjnrXmzphPPBFS-9v1AGrJNcy2ZW_htdWRCit9iz",
        "id": 10
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.149449,
        "hostOnly": false,
        "httpOnly": true,
        "name": "HSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "AQf7DZ0IaAYLV8u46",
        "id": 11
    },
    {

        "domain": ".youtube.com",
        "expirationDate": 1757604059.785343,
        "hostOnly": false,
        "httpOnly": true,
        "name": "LOGIN_INFO",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AFmmF2swRAIgXTqwQYiWygpM4Ns4y0Npj2m2agJNPyWcyfkCwesYtLwCIBuZHDRhHYohKATL9kfaGaW1yNQS-ovmXQ8CXg1gDPPC:QUQ3MjNmeUdVTHFONGJHamJsMUlCLWZjTmpNRi1jMUFmQmR3Tzl4QUxBQWNodGZic1VwOFpNV3pWUUU5a1R6bHhGUFI5VmItbGsxdEJ3eUZEanRINDRHWFFLS0tQdjFGZlNudEFqUE5oR18xNy01ZWtYUU9aZVliUnN2cV9iQ3Z2RUcwN3BFejhGV3RFWWRlQ1FJWlZyNTVYa1pFY1Z6dEVB",
        "id": 12
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1738855298.047306,
        "hostOnly": false,
        "httpOnly": true,
        "name": "NID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "516=eJ0P1uVmoNH4BaHL7N2Y-_PM0e7BsScW1ugIEAvOYbPFbU-i2WQFnV8ccr4C4JSr4jzr3rxRMX8KM04zvY3QOD7z5WxraaIQc2zFRdtVNHm8NfUr5tcNLqc5lF2Bf1nH1XczYPVpRO1VOZSsV0_02oaX4l1OLVN5CZBlfEH2z2zcshDmh1TSL8ytnF6_5fJj_PmiDNQ8WfkmhEoGETGqg1YOn-KLKu2MUa8pqOwdjdg94bk",
        "id": 13
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604160.815789,
        "hostOnly": false,
        "httpOnly": false,
        "name": "PREF",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "f6=40000000&tz=Asia.Tashkent&f5=20000&f7=100",
        "id": 14
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.149677,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SAPISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "Tg0v8kT6dL8qbFHR/AtcMKBnVbFVxyN9hx",
        "id": 15
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.14994,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "g.a000mgjrJwSNfdwWXJOSaRJM14tamD3yUoRnE7LbCbFRmGO1lDmmj-GrKfdxFGzVhIehyvClmwACgYKAaQSARQSFQHGX2Mi88JVbfag5M1dpe_ONsaYcBoVAUF8yKp21rqLECA2WV9_3ADS3QB10076",
        "id": 16
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1754580200.927172,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SIDCC",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzX_0S1Iibir6VJ1hemlF3-noC-le_7CSbr3jnNqOjvWzBaTaEo8y2UuCZpFLXCmSX9zJ0Q",
        "id": 17
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1757604060.149567,
        "hostOnly": false,
        "httpOnly": true,
        "name": "SSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "A6AcHWo2RVlWwKGas",
        "id": 18
    }
]

const agentOptions = {
  pipelining: 5,
  maxRedirections: 0,
  localAddress: "127.0.0.1",
};

const agent = ytdl.createAgent(cookies, agentOptions);

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
