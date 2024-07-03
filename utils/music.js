const { google } = require('googleapis');
const youtube = google.youtube('v3');

const apiKey = 'AIzaSyBSXhhv5pBnSF8OObFPeJY5eS3IqL67yLw';

async function getMusicSearch(query) {
  try {
    const response = await youtube.search.list({
      key: apiKey,
      q: query,
      part: 'snippet',
      type: 'video',
      videoCategoryId: '10',
      maxResults: 10,
    });

    const items = response.data.items;

    if (items.length === 0) {
      return {
        ok: false,
        msg: 'Failed to fetch video data'
      }
    }
    let list = [];

    items.forEach((item, index) => {
      list.push({
        id: index + 1,
        title: item.snippet.title,
        url: item.id.videoId
      })
    });

    let result = {
      ok: true,
      thumbnail: items[0].snippet.thumbnails.high.url,
      formats: list
    }

    return result
  } catch (error) {
    return {
      ok: false,
      msg: error
    }
  }
}

module.exports = { getMusicSearch }