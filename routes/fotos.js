var express = require('express');
var router = express.Router();
var imagenModel = require('./../models/imagenModel');
var cloudinary = require('cloudinary');
var fs = require('fs-extra');


/* GET home page. */
router.get('/', async function(req, res, next) {
    var imagen = await imagenModel.getImagen();
    res.render('fotos',{isFotos:true,imagen});
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

router.get('/modificar/:id', async(req, res, next)=>{
    let id = req.params.id;
    let imagen = await imagenModel.getImagenById(id);
    res.render('modificar',{imagen
    });
});

router.post('/modificar',async(req,res,next)=>{
    if(req.file!=undefined){
        var public = req.body.public_id;
        cloudinary.v2.uploader.destroy(public).then(function() {
        }).catch(function () {
        });
        var result = await cloudinary.v2.uploader.upload(req.file.path);
        await fs.unlink(req.file.path);
        var image_url = result.url;
        var public_id = result.public_id;        
    }else{
        var image_url = req.body.image_url;
        var public_id = req.body.public_id; 
    }
    try{
        let obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            public_id: public_id,
            image_url: image_url
        }
        await imagenModel.modificarImagenesById(obj,req.body.id);
        res.redirect('/fotos');
    }catch(error){
        console.log(error);
        res.render('modificar',{
            error: true,message: 'No se modifico la Novedad'
        })
    }
})

module.exports = router;