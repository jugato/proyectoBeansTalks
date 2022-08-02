const axios = require("axios");

const getRecommendations = async Recom => {
    const resp = await axios.get(`https://api.jikan.moe/v4/recommendations/${Recom}`);
    if (!(resp.data.data).length) {
        console.log(`No hay top con la clasificacion: ${top}`)
        return null;
    }
    //console.log(resp.data.data)
    return resp.data.data
};



module.exports = {
    getRecommendations,
}