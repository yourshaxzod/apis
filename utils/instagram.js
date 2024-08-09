const instagramGetUrl = require("instagram-url-direct")

let getInstagram = async (url) => {
    try {
        let medias = await instagramGetUrl(url)
        console.log(medias)

        return {
            ok: true,
            info: {
                medias
            }
        };
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            msg: "Error fetching data."
        };
    }
};

module.exports = { getInstagram }