const getAnimeNews = require('../../lib/scrapeAnimeNews');

export default async function handler(req, res) {
    const data = await getAnimeNews();
    res.json(data);
}