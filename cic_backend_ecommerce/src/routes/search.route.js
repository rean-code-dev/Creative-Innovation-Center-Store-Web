const { userGuard } = require("../controllers/auth.controller")
const controller =  require("../controllers/search.controller")


const Search = (app,base_route) =>{
 
    app.get(`${base_route}/search_category`,controller.search_category)
}

module.exports = Search