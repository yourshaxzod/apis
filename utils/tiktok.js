const axios = require('axios')

let getTikTok = async (url) => {
    try {
        url = `https://tikwm.com/api/?url=${url}`
        const response = await axios.get(url)

        if (response.data.code == 0) {
            let info = response.data.data
            return {
                ok: true,
                info: {
                    id: info.id,
                    region: info.region,
                    caption: info.title,
                    thumbnail: info.origin_cover,
                    stats: {
                        views: info.play_count,
                        likes: info.digg_count,
                        comments: info.comment_count,
                        shares: info.share_count,
                        downloads: info.download_count
                    },
                    author: {
                        id: info.author.id,
                        name: info.author.nickname,
                        username: info.author.unique_id,
                        avatar: info.author.avatar
                    },
                    formats: [
                        {
                            type: 'video',
                            url: info.play,
                        },
                        {
                            type: 'audio',
                            title: info.music_info.title,
                            author: info.music_info.author,
                            url: info.music
                        }
                    ]
                }
            }
        } else {
            return {
                ok: false,
                msg: 'Failed to fetch video data'
            }
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            msg: "Error fetching data."
        }
    }
};

module.exports = { getTikTok }