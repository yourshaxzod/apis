const axios = require('axios')

let getTikTok = async (url) => {
    try {
        const headers = {
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en,ru;q=0.9,ru-RU;q=0.8,uz;q=0.7',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://tikwm.com',
            'referer': 'https://tikwm.com/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
            'x-requested-with': 'XMLHttpRequest'
        }

        const data = new URLSearchParams({ url }).toString()
        const response = await axios.post('https://tikwm.com/api/', data, { headers })

        if (response.data.code == 0) {
            let info = response.data.data;
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
                    formats: {
                        video: {
                            url: info.play,
                        },
                        audio: {
                            title: info.music_info.title,
                            author: info.music_info.author,
                            url: info.music
                        }
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
        console.error(error);
        return {
            ok: false,
            msg: "Error fetching data."
        }
    }
}

module.exports = { getTikTok }