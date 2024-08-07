const ytdl = require('@distube/ytdl-core')
const { getRandomIPv6 } = require('@distube/ytdl-core/lib/utils')

const agentForARandomIP = ytdl.createAgent(undefined, {
    localAddress: getRandomIPv6("2001:2::/48"),
});

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
        const info = await ytdl.getInfo(url, { agent: agentForARandomIP })

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
