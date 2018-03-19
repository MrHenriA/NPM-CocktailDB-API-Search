
var axios = require("axios");

var ROOT_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

module.exports = function(options, callback) {
  //basic search
  var params = {
    s: options.term  
  };

 






  axios
    .get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) {
         callback(response.data.drinks);
         
      }
    })
    .catch(function(error) {
      console.error(error);
    });

    exports.printMsg = function() {
      console.log("TheCockTailDB API has been installed..");
    }
};


