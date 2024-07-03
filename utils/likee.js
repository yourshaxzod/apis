const axios = require('axios');

let getLikee = async (url) => {
    try {
        url = `https://likeam.ru/api/fetch?url=${url}`;
        const response = await axios.get(url);

        if (response.data.meta.id != null) {
            let info = response.data
            return {
                ok: true,
                info: {
                    id: info.meta.id,
                    type: 'video',
                    caption: info.meta.caption,
                    thumbnail: info.meta.cover,
                    stats: {
                        likes: info.stats.likes,
                        comments: info.stats.comments,
                        views: info.stats.views,
                        shares: info.stats.shares,
                        downloads: info.stats.downloads
                    },
                    author: {
                        id: info.user.id,
                        name: info.user.name,
                        username: info.user.username,
                        avatar: info.user.avatar
                    },
                    formats: {
                        type: 'video',
                        url: info.download_url
                    }
                }
            }
        } else {
            return {
                ok: false,
                msg: 'Failed to fetch video data'
            }
        }
    } catch (error) {
        return {
            ok: false,
            msg: error
        };
    }
};

module.exports = { getLikee }