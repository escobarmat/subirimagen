var express = require('express');
var router = express.Router();

var cloudinary = require('cloudinary');
var imagenModel = require('./../models/imagenModel');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

var fs = require('fs-extra');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/uploadfile', async (req, res) => {
  console.log(req.file);
  var result = await cloudinary.v2.uploader.upload(req.file.path);
  console.log(result);
  await fs.unlink(req.file.path);  
  var image_url = result.url;
  var public_id = result.public_id;
  var subir = {image_url, public_id};
  try{
    if(image_url!=""&&public_id!=""){      
    await imagenModel.insertImagen(subir);
    }
  }catch(error){
    console.log(error);
  }
  var subido = true;
  res.render('index', {
     subido, image_url, public_id});
});

module.exports = router;
