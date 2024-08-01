const ytdl = require('ytdl-core');

let getYoutube = async (url) => {
  try {
    const info = await ytdl.getInfo(url);

    // Video va audio formatlarini filtrlash
    const videoFormats = info.formats.filter(format => format.mimeType.startsWith('video/mp4'));
    const audioFormats = info.formats.filter(format => format.mimeType.startsWith('audio/mp4'));

    // Formatlarni saqlash
    const formats = [
      ...videoFormats.map(format => ({
        itag: format.itag,
        mimeType: format.mimeType,
        quality: format.qualityLabel || format.quality,
        audio: format.audioBitrate || null,
        type: format.container || null,
        url: format.url
      })),
      ...audioFormats.map(format => ({
        itag: format.itag,
        mimeType: format.mimeType,
        quality: format.qualityLabel || format.quality,
        audio: format.audioBitrate || null,
        type: format.container || null,
        url: format.url
      }))
    ];

    return {
      ok: true,
      info: {
        id: info.videoDetails.videoId,
        title: info.videoDetails.title,
        caption: info.videoDetails.description,
        duration: info.videoDetails.lengthSeconds,
        views: info.viewCount,
        author: info.videoDetails.author.name,
        thumbnail: info.videoDetails.thumbnails?.[info.videoDetails.thumbnails.length - 1]?.url || null,
        formats: formats
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

module.exports = { getYoutube };
