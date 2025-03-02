const db = require ("../database")
const {isEmptyOrNull} = require("../utils/service")

const search_category = (req, res) => {
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
    search_category,
  };