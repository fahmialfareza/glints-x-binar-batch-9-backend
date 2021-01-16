class CobaController {

  async hello(req, res) {
    return res.status(200).json({
      message: "Hello"
    })
  }

}

module.exports = new CobaController;
