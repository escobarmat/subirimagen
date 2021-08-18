var express = require('express');
var router = express.Router();
var imagenModel = require('./../models/imagenModel');
var cloudinary = require('cloudinary');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var imagen = await imagenModel.getImagen();
    res.render('fotos',{imagen});
});

router.get('/eliminar/:id',async(req,res,next)=>{
    var id = req.params.id;
    var foto = await imagenModel.deleteImageById(id);
    var obj = await imagenModel.getImagen(id);
    console.log(obj);
    var public = obj.public_id;
    console.log(public);
    var result = await cloudinary.v2.uploader.destroy(public);
    res.redirect('/fotos');
    console.log(result);
});
module.exports = router;