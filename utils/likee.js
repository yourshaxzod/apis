const { likee } = require("nayan-media-downloader");

let getLikee = async (url) => {
    try {
        const response = await likee(url);

        if (response.status == 200) {
            let info = response
            return {
                ok: true,
                info: {
                    type: 'video',
                    caption: info.data.title,
                    thumbnail: info.data.thumbnail,
                    formats: {
                        type: 'video',
                        url: info.data.withoutwatermark
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
        console.log(error);
        return {
            ok: false,
            msg: "Error fetching data."
        };
    }
};

module.exports = { getLikee }