const ytdl = require('@distube/ytdl-core')

let getYoutube = async (url) => {
    try {
        const info = await ytdl.getInfo(url)

        const formats = info.formats.filter(format =>
            format.mimeType.includes('video/mp4') || format.mimeType.includes('audio/mp4')
        );

        const uniqueFormats = {}

        formats.forEach(format => {
            const qualityKey = format.qualityLabel || format.audioBitrate
            if (!uniqueFormats[qualityKey]) {
                uniqueFormats[qualityKey] = format
            }
        })

        const sortedFormats = Object.values(uniqueFormats).sort((a, b) => {
            const qualityA = a.qualityLabel ? parseInt(a.qualityLabel) : a.audioBitrate
            const qualityB = b.qualityLabel ? parseInt(b.qualityLabel) : b.audioBitrate
            return qualityA - qualityB
        });

        const videoFormats = sortedFormats.filter(format => format.mimeType.includes('video/mp4'))
        const audioFormats = sortedFormats.filter(format => format.mimeType.includes('audio/mp4'))

        // Formatlarni saqlash
        const videoFormats = [
            ...videoFormats.map(format => ({
                itag: format.itag,
                mimeType: format.mimeType,
                quality: format.qualityLabel || format.quality,
                audio: format.audioBitrate || null,
                type: format.container || null,
                contentLength: format.contentLength,
                url: format.url
            }))
        ]

        const audioFormats = [
            ...audioFormats.map(format => ({
                itag: format.itag,
                mimeType: format.mimeType,
                quality: format.qualityLabel || format.quality,
                audio: format.audioBitrate || null,
                type: format.container || null,
                contentLength: format.contentLength,
                url: format.url
            }))
        ]

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
                thumbnail: info.videoDetails.thumbnails?.[info.videoDetails.thumbnails.length - 2]?.url || null,
                formats: videoFormats,
                audio: audioFormats
            }
        };
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            msg: "Error fetching data.",
        };
    }
};

module.exports = { getYoutube }
