const axios = require('axios')

let getPinterest = async (url) => {
    try {
        url = `https://pinterestdownloader.io/frontendService/DownloaderService?url=${url}`
        const response = await axios.get(url)

        let info = response.data

        return {
            ok: true,
            info: {
                id: info.url,
                type: info.title === "Pinterest Video" ? "video" : "photo",
                thunbnail: info.thunbnail,
                formats: info.medias
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

module.exports = { getPinterest }