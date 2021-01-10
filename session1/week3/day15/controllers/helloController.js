// Make HelloController that will be used in helloRoutes
class HelloController {

  // This function will be called in helloRoutes
  async hello(req, res) {
    try {
      console.log('You are accessing Hello World html!');
      res.render('hello.ejs') // if success, will be rendering html file from views/hello.ejs
    } catch (e) {
      res.status(500).send(exception) // if error, will be display "500 Internal Server Error"
    }
  }

}

module.exports = new HelloController // We don't need to instance a object bacause exporting this file will be automatically to be an object
