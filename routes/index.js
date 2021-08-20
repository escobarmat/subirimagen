var express = require('express');
var router = express.Router();
var path = require('path');

var cloudinary = require('cloudinary');
var imagenModel = require('./../models/imagenModel');

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET 
// });

var fs = require('fs-extra');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {isHome:true});
});

router.post('/uploadfile', async (req, res) => {
  try {
    if (req.file != undefined && req.body.titulo != "" && req.body.descripcion != "") {
      console.log(req.file);
      var result = await cloudinary.v2.uploader.upload(req.file.path);
      console.log(result);
      await fs.unlink(req.file.path);
      var image_url = result.url;
      var public_id = result.public_id;
      var descripcion = req.body.descripcion;
      var titulo = req.body.titulo;
      var subir = { titulo, descripcion, image_url, public_id };
      await imagenModel.insertImagen(subir);
    } else {
      res.render('index', {
        error: true, messaje: 'Todos los campos son Requeridos'
      });
    }
  } catch (error) {
    console.log(error);
    res.render('index', {
      error: true, messaje: 'No se Cargo La Novedad'
    })
  }
  var subido = true;
  res.render('index', {
    subido, image_url, public_id, descripcion, titulo
  });
});

module.exports = router;
