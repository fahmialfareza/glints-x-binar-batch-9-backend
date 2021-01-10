// Make IndexController class that will be used in indexRouter
class IndexController {

  async home(req, res) {
    try {
      console.log("You're accessing localhost!");
      // res.send('Hello, Reza!') // response "Hello, Reza" on the browser
      res.render('top.ejs') // if success, will be rendering html file from views/top.ejs
    } catch (e) {
      res.status(500).send(exception) // if error, will be display "500 Internal Server Error"
    }
  }

  async indexHome(req, res) {
    try {
      console.log("You're accessing index!");
      res.render('index.ejs') // if success, will be rendering html file from views/index.ejs
    } catch (e) {
      res.status(500).send(exception) // if error, will be display "500 Internal Server Error"
    }
  }

}

module.exports = new IndexController; // We don't need to instance a object bacause exporting this file will be automatically to be an object
