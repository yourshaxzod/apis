const express = require('express')
const { getInstagram } = require('./utils/instagram')
const { getYoutube } = require('./utils/youtube')
const { getTikTok } = require('./utils/tiktok')
const { getLikee } = require('./utils/likee')
const { getPinterest } = require('./utils/pinterest')
const { getMusicSearch } = require('./utils/music')

const app = express()

app.use(express.json())

// Bosh sahifa
app.get('/', (req, res) => {
    const result = {
        ok: false,
        msg: "You are blocked :)"
    }
    res.json(result)
})

// Instagram video ma'lumotlarini olish
app.get('/instagram/', async (req, res) => {
    const mediaUrl = req.query.url
    const videoRegex = /https:\/\/www\.instagram\.com\/(p|reel|stories\/[A-Za-z0-9-_]+|s\/[A-Za-z0-9-_]+)\/([A-Za-z0-9-_]+)\/?/

    if (!mediaUrl) {
        return res.status(400).json({
            ok: false,
            msg: "No URL provided"
        })
    }

    try {
        let match = mediaUrl.match(videoRegex)
        let result

        if (match) {
            result = await getInstagram(mediaUrl)
        } else {
            result = {
                ok: false,
                msg: "Invalid Instagram URL"
            }
        }

        res.json(result)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({
            ok: false,
            msg: "Error fetching data."
        })
    }
})

// YouTube video ma'lumotlarini olish
app.get('/youtube/', async (req, res) => {
    const mediaUrl = req.query.url
    const videoRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/

    if (!mediaUrl) {
        return res.status(400).json({
            ok: false,
            msg: "No URL provided"
        })
    }

    try {
        let match = mediaUrl.match(videoRegex)
        let result

        if (match) {
            let videoID = match[1]
            result = await getYoutube(videoID)
        } else {
            result = {
                ok: false,
                msg: "Invalid YouTube URL"
            }
        }

        res.json(result)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({
            ok: false,
            msg: "Error fetching data."
        })
    }
})

// TikTok video ma'lumotlarini olish
app.get('/tiktok/', async (req, res) => {
    const mediaUrl = req.query.url
    const videoRegex = /https:\/\/vt\.tiktok\.com\/[A-Za-z0-9_]+\/?/

    if (!mediaUrl) {
        return res.status(400).json({
            ok: false,
            msg: "No URL provided"
        })
    }

    try {
        let match = mediaUrl.match(videoRegex)
        let result

        if (match) {
            result = await getTikTok(mediaUrl)
        } else {
            result = {
                ok: false,
                msg: "Invalid TikTok URL"
            }
        }

        res.json(result)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({
            ok: false,
            msg: "Error fetching data."
        })
    }
})

// Likee video ma'lumotlarini olish
app.get('/likee/', async (req, res) => {
    const mediaUrl = req.query.url
    const videoRegex = /https:\/\/l\.likee\.video\/v\/\w+/g

    if (!mediaUrl) {
        return res.status(400).json({
            ok: false,
            msg: "No URL provided"
        })
    }

    try {
        let match = mediaUrl.match(videoRegex)
        let result

        if (match) {
            result = await getLikee(mediaUrl)
        } else {
            result = {
                ok: false,
                msg: "Invalid Likee URL"
            }
        }

        res.json(result)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({
            ok: false,
            msg: "Error fetching data."
        })
    }
})

// Pinterest video ma'lumotlarini olish
app.get('/pinterest/', async (req, res) => {
    const mediaUrl = req.query.url
    const videoRegex = /^https:\/\/pin\.it\/[a-zA-Z0-9]+$/

    if (!mediaUrl) {
        return res.status(400).json({
            ok: false,
            msg: "No URL provided"
        });
    }

    try {
        let match = mediaUrl.match(videoRegex)
        let result

        if (match) {
            result = await getPinterest(mediaUrl)
        } else {
            result = {
                ok: false,
                msg: "Invalid Pinterest URL"
            }
        }

        res.json(result)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({
            ok: false,
            msg: "Error fetching data."
        })
    }
})

// Musiq izlash
app.get('/search/', async (req, res) => {
    const text = req.query.text

    if (!text) {
        return res.status(400).json({
            ok: false,
            msg: "No Text provided"
        });
    }

    try {
        result = await getMusicSearch(text)

        res.json(result);
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({
            ok: false,
            msg: "Error fetching data."
        })
    }
})

// Musiqa yuklash
app.get('/down/', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).json({
            ok: false,
            msg: "No url provided"
        });
    }

    try {
        result = await getYoutube(url)

        res.json(result)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({
            ok: false,
            msg: "Error fetching data."
        })
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`API server is running on port ${port}`)
});