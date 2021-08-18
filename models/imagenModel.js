var pool = require('./bd');

async function getImagen(){
    var query = "select * from imagenes order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function deleteImageById(id){
    var query = "delete from imagenes where id= ? ";
    var rows = await pool.query(query,[id]);
    return rows;
}

async function insertImagen(obj){
    try{
        var query = "insert into imagenes set ? ";
        var rows = await pool.query(query,[obj]);
        return rows;        
    }catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = {getImagen,deleteImageById,insertImagen}