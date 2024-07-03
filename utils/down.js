const ytdl = require('ytdl-core');

async function getMusicDown(videoUrl) {
    try {
        const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${videoUrl}`, { filter: 'audioonly', quality: 'highestaudio' });

        const formats = info.formats.filter(format => format.mimeType.includes('audio/mp4'));

        if (formats.length > 0) {
            const bestAudioFormat = formats.reduce((prev, curr) => (prev.audioBitrate > curr.audioBitrate ? prev : curr));
            return {
                ok: true,
                info: {
                    id: videoUrl,
                    title: info.videoDetails.title,
                    views: info.viewCount,
                    author: info.videoDetails.author.name,
                    thumbnail: info.videoDetails.thumbnails?.[info.videoDetails.thumbnails.length - 1]?.url || null,
                },
                formats: {
                    type: 'audio',
                    url: bestAudioFormat.url
                }
            }
        } else {
            return {
                ok: false,
                msg: 'Failed to fetch music'
            }
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            msg: "Error fetching data."
        }
    }
}

module.exports = { getMusicDown }