const db = require ("../database")
const {isEmptyOrNull} = require("../utils/service")

// ========================================= getAll Category ===================================================
const getAll_categoy = async(req,res)=>{
    const list = await db.query("SELECT * FROM category")
    res.json({
        result:list
    })
}

//===========================================get One Category ==============================================
const getone_category = (req,res)=>{
    var id = req.params.id
    var sql = "SELECT * FROM category WHERE category_id = ?"
    db.query(sql,[id],(err,row)=>{
        if(err){
            res.json({
                message : err,
                err : true
            })
        }else{
            res.json({
                result:row
            })
        }
    })

}

//======================== Create Category================== 
const create_category  = (req,res) =>{
    const {
        name_en,
        name_kh,
        description,
        parent_id,
        status,

    }=req.body

    var message = {}
    var fileName = null
    if(isEmptyOrNull(name_en)){
        message.name_en = "name_en required!"
    }
    if(isEmptyOrNull(name_kh)){
        message.name_kh = "name_kh required!"
    }
    if(Object.keys(message).length >0){
        res.json({
            err : true,
            message : message
        })
        return
    }
    if(req.file){ //check true upload file from frontend
        fileName = req.file.filename ///get file name
    }
   
    var sql  = 'INSERT INTO category ( `name_en`, `name_kh`, `image`, `description`, `parent_id`, `status`) VALUES(?,?,?,?,?,?)'
    
    var param_data = [
        name_en,
        name_kh,
        fileName,
        description,
        parent_id,
        status
    ]


    db.query(sql,param_data,(err,row)=>{
        if(err){
            res.json({
                message : err,
                err : true
            })
        }
        else{
            res.json({
                message : "Category create successfully!",
                data : row
            })
        }
    })
}
//========================= Update Category ===================================

const update_category = (req,res)=>{
    const {
        category_id ,
        name_en,
        name_kh,
        image,
        description,
        parent_id,
        status,

    }=req.body
  
    var message = {}

    if(isEmptyOrNull(category_id)){
        message.category_id = "Category_id required!"
    }
    if(isEmptyOrNull(name_en)){
        message.name_en = "name_en required!"
    }
    if(isEmptyOrNull(name_kh)){
        message.name_kh = "name_kh required!"
    }
    if(Object.keys(message).length >0){
        res.json({
            err : true,
            message : message
        })
        return
    } 

    var sql = "UPDATE category SET name_en=?, name_kh=?,image=?, description=?, parent_id=?, status=? WHERE category_id=?";
    var param_sql = [name_en,name_kh,image,description,parent_id,status,category_id]

    db.query(sql,param_sql,(err,row)=>{
        if(err){
            res.json({
                err : true,
                message : err

            })
        }else{
            res.json({
                message : row.affectedRows ? "Update Category successfully!" : "Data not in system",
                data : row
            })
        }
    })
}

/// =====================================Remove Category ====================================================
const remove_category =(req,res)=>{
    var {id} = req.params
    var sql = "DELETE FROM category WHERE category_id = ?"
    db.query(sql,[id],(err,row)=>{
        if(err){
            res.json({
                err:true,
                message:err
            })
        }else{
            res.json({
                message : (row.affectedRows !=0)?"Delete Category successfuly!": "Data not in system",
                data : row
            })
        }
    })
}



// =====================================Search Category ====================================================

const search_categorys = (req, res) => {
    let { name } = req.query;
    if (!name) {
        return res.status(400).json({
            error: true,
            message: "Search keyword is required."
        });
    }

    let sql = "SELECT * FROM category WHERE name_en LIKE ? OR name_kh LIKE ?";
    let searchValue = `%${name}%`;

    console.log("Executing SQL:", sql, "Values:", searchValue, searchValue); // Log the query

    db.query(sql, [searchValue, searchValue], (err, rows) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({
                error: true,
                message: "Database error",
                details: err.message
            });
        }

        console.log("Query Results:", rows); // Log query results
        res.json({
            message: rows.length !== 0 ? "Search Category successfully!" : "No data found",
            data: rows
        });
    });
 };


module.exports = {
    getAll_categoy,
    getone_category,
    create_category,
    update_category,
    remove_category,
    search_categorys    
}