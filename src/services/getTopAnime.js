const axios = require("axios");

const getTop = async top => {
    const resp = await axios.get(`https://api.jikan.moe/v4/top/${top}`);
    if (!(resp.data.data).length) {
        console.log(`No hay top con la clasificacion: ${top}`)
        return null;
    }
    return resp.data.data
};



module.exports = {
    getTop,
}