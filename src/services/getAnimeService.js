const axios = require("axios");

const getAnime = async name => {
    const resp = await axios.get(`https://api.jikan.moe/v4/anime?q=${name}`);
    if (!(resp.data.data).length) {
        console.log(`No existe Anime con el nombre de :${name}`)
        return null;
    }
    return resp.data.data
};

const getIdAnimesMatch = data => {
    idAnimes = [];
    for (let index = 0; index < data.length; index++) {
        // console.log("Se agrego el anime id: ", data[index].mal_id)
        idAnimes.push(data[index].mal_id);
    }
    return idAnimes;
}

module.exports = {
    getAnime,
}