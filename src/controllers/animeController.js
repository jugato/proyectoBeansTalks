const { getAnime } = require('../services/getAnimeService')
const { getTop } = require('../services/getTopAnime')
const { getRecommendations} = require('../services/getRecommendations')
const jikanjs = require('@mateoaranda/jikanjs');

const controller = {};

controller.home = async (req, res) => {
  const dataAnime = await getRecommendations(`anime`);
  //console.log(dataAnime[0].entry[0])
  res.render('tuAnimeRecommendations', {
    data: dataAnime
  });
};

controller.buscar = async (req, res) => {
  const data = req.body.nameAnime;
  //console.log("PARAMETRO", req.body.nameAnime)
  const dataAnime = await getAnime(data);
  res.render('tuAnime', {
    data: dataAnime
  })
};

controller.top = async (req, res) => {
  const data = req.params.top;
  const topAnime = await getTop(data);
  res.render('tuAnime', {
    data: topAnime
  })
};

controller.topCharacters = async (req, res) => {
  const data = req.params.character;
  const topCharacters = await getTop(data);
  //console.log(topCharacters)
  res.render('tuAnimeCharacters', {
    data: topCharacters
  })
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM products WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}


module.exports = controller;
