const ytdl = require('ytdl-core');

let getYoutube = async (url) => {
  try {
    const info = await ytdl.getInfo(url);

    // Faqat video formatlarini filtrlash
    const videoFormats = info.formats.filter(format => format.mimeType.startsWith('video/mp4'));

    // Faqat audio formatlarini filtrlash
    const audioFormats = info.formats.filter(format => format.mimeType.startsWith('audio/mp4'));

    // Yaxshi sifatdagi video formatini tanlash
    const bestVideoFormat = videoFormats.reduce((best, format) => {
      if (!best || (format.qualityLabel && format.qualityLabel > best.qualityLabel)) {
        return format;
      }
      return best;
    }, null);

    // Yaxshi sifatdagi audio formatini tanlash
    const bestAudioFormat = audioFormats.reduce((best, format) => {
      if (!best || (format.audioBitrate && format.audioBitrate > best.audioBitrate)) {
        return format;
      }
      return best;
    }, null);

    // Formatlarni saqlash
    const formats = [
      bestVideoFormat ? {
        itag: bestVideoFormat.itag,
        mimeType: bestVideoFormat.mimeType,
        quality: bestVideoFormat.qualityLabel || bestVideoFormat.quality,
        audio: bestVideoFormat.audioBitrate || null,
        type: bestVideoFormat.container || null,
        url: bestVideoFormat.url
      } : null,
      bestAudioFormat ? {
        itag: bestAudioFormat.itag,
        mimeType: bestAudioFormat.mimeType,
        quality: bestAudioFormat.qualityLabel || bestAudioFormat.quality,
        audio: bestAudioFormat.audioBitrate || null,
        type: bestAudioFormat.container || null,
        url: bestAudioFormat.url
      } : null
    ].filter(format => format !== null); // Null formatlarni olib tashlash

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
