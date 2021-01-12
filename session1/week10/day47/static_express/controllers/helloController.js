class HelloController {

  static async home(req, res) {
    try {
      res.status(200).json({
        message: "Ok",
        data: "Hello World!"
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        errors: e
      });
    }
  }

  static async pudji(req, res) {
    try {
      res.status(200).json({
        message: "Ok",
        data: "Hello, Pudji!"
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        errors: e
      });
    }
  }

}

module.exports = HelloController;
