const { likee } = require("nayan-media-downloader");

const url = "https://l.likee.video/v/K8mQSq" // past url
likee(url).then(data => {
    console.log(data)
});