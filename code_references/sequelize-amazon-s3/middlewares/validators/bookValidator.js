const book = require("../../models").Book
const {
  check,
  validationResult,
  matchedData,
  sanitize
} = require('express-validator'); //form validation & sanitize form params
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand
} = require("@aws-sdk/client-s3");
const path = require("path");
const fs = require("fs");
const multer = require('multer'); //multipar form-data
const crypto = require('crypto');

/* Used to upload image */
const uploadDir = '/img/';
const storage = multer.diskStorage({
  destination: "./public" + uploadDir,
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

function fileFilter(req, file, cb) {
  if ((file.mimetype == "image/jpeg") || (file.mimetype == "image/png") || (file.mimetype == "image/gif") || (file.mimetype == "image/bmp")) {
    cb(null, true);
  } else {
    cb(new Error('File must be image!'), false);
  }
}

const upload = multer({
  fileFilter: fileFilter,
  storage: storage,
  dest: uploadDir
}).single('image');

function image_upload(req, res, next) {
  upload(req, res, async function(err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(422).json({
        errors: err
      });
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(422).json({
        errors: err
      });
    }

    // Everything went fine.
    req.file.url = await aws_upload(req.file);

    next();
  })
}
/* End used to upload image */

/* AWS S3 */
// Set the parameters
const uploadParams = {
  Bucket: "sequelize-amazon-s3"
}; //BUCKET_NAME, KEY (the name of the selected file)

// Create S3 service object
const s3 = new S3Client({
  credentials: {
    "accessKeyId": "AKIAIQD72F4T6I6IIAFA",
    "secretAccessKey": "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"
  },
  region: "ap-southeast-1"
});

// call S3 to retrieve upload file to specified bucket
const aws_upload = async (file) => {
  // Configure the file stream and obtain the upload parameters
  const fileStream = fs.createReadStream(file.path);
  fileStream.on("error", function(err) {
    console.log("File Error", err);
  });

  uploadParams.Body = fileStream;
  uploadParams.Key = file.filename;
  uploadParams.ACL = 'public-read';
  uploadParams.ContentType = file.mimetype;
  // call S3 to retrieve upload file to specified bucket
  try {
    // Upload to S3
    const uploadData = await s3.send(new PutObjectCommand(uploadParams));
    const deleteData = await fs.unlinkSync(file.path);

    // Get URL
    const params = {
      Bucket: "sequelize-amazon-s3",
      Key: file.filename
    };
    const getData = await s3.send(new GetObjectCommand(params));
    return `https://${getData.Body.socket.servername}/${file.filename}`;
  } catch (err) {
    console.log("Error", err);
  }
};

/* End AWS S3 */

module.exports = {
  image_upload,
  create: [
    //File upload (karena pakai multer, tempatkan di posisi pertama agar membaca multipar form-data)
    // upload.single('image'), // Upload image to /public/img/

    //Set form validation rule
    check('isbn').isLength({
      min: 5
    }).isNumeric().custom(value => {
      return book.findOne({
        where: {
          isbn: value
        }
      }).then(b => {
        if (b) {
          throw new Error('ISBN already in use');
        }
      })
    }),
    check('name').isLength({
      min: 2
    }),
    check('year').isLength({
      min: 4,
      max: 4
    }).isNumeric(),
    check('author').isLength({
      min: 2
    }),
    check('description').isLength({
      min: 10
    }),
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        try {
          // Delete file on S#
          const params = {
            Bucket: "sequelize-amazon-s3",
            Key: req.file.filename
          };
          const deleteData = await s3.send(new DeleteObjectCommand(params));
        } catch (err) {
          console.log("Error", err);
        }

        return res.status(422).json({
          errors: errors.mapped()
        });
      }
      next();
    },
  ],
  update: [
    //File upload (karena pakai multer, tempatkan di posisi pertama agar membaca multipar form-data)
    // upload.single('image'),

    //Set form validation rule
    check('isbn').isLength({
      min: 5
    }).isNumeric().custom(value => {
      return book.findOne({
        where: {
          isbn: value
        }
      }).then(b => {
        if (!b) {
          throw new Error('ISBN not found');
        }
      })
    }),
    check('name').isLength({
      min: 2
    }),
    check('year').isLength({
      min: 4,
      max: 4
    }).isNumeric(),
    check('author').isLength({
      min: 2
    }),
    check('description').isLength({
      min: 10
    }),
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        try {
          // Delete file on S3
          const params = {
            Bucket: "sequelize-amazon-s3",
            Key: req.file.filename
          };
          const deleteData = await s3.send(new DeleteObjectCommand(params));
        } catch (err) {
          console.log("Error", err);
        }

        return res.status(422).json({
          errors: errors.mapped()
        });
      }

      try {
        let findBook = await book.findOne({
          where: {
            isbn: req.body.isbn
          }
        });

        // Delete file on S3
        let params = {
          Bucket: "sequelize-amazon-s3",
          Key: findBook.image.slice(-36)
        };
        let deleteData = await s3.send(new DeleteObjectCommand(params));
      } catch (err) {
        console.log("Error", err);
      }

      next();
    },
  ],
  delete: [
    //Set form validation rule
    check('isbn').isLength({
      min: 5
    }).isNumeric().custom(value => {
      return book.findOne({
        where: {
          isbn: value
        }
      }).then(async (b) => {
        if (!b) {
          throw new Error('ISBN not found');
        }

        try {
          // Delete file on S3
          let params = {
            Bucket: "sequelize-amazon-s3",
            Key: b.image.slice(-36)
          };
          let deleteData = await s3.send(new DeleteObjectCommand(params));
        } catch (err) {
          console.log("Error", err);
        }
      })
    }),
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }

      next();
    },
  ]
};
