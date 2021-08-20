var express = require('express');
var router = express.Router();
var imagenModel = require('./../models/imagenModel');
var cloudinary = require('cloudinary');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var imagen = await imagenModel.getImagen();
    res.render('fotos',{imagen});
});

// router.get('/eliminar/:id',async(req,res,next)=>{
//     var id = req.params.id;
//     await imagenModel.deleteImageById(id);
//     var obj = await imagenModel.getImagen(id);
//     console.log(obj);
//     var public = JSON.stringify(obj[0].public_id);
//     console.log(public);
//     await cloudinary.v2.uploader.destroy(public);
//     res.redirect('/fotos');
// });
router.get('/eliminar/:id/:public_id',async(req,res,next)=>{
    var id = req.params.id;
    var public_id = req.params.public_id;
    await imagenModel.deleteImageById(id);
    
    cloudinary.v2.uploader.destroy(public_id).then(function() {
        res.redirect('/fotos');
    }).catch(function () {
        res.redirect('/fotos');
    });
});

module.exports = router;