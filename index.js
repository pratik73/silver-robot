const express = require("express");
const app = express();
const upload = require("express-fileupload");

app.use(upload());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = 3000;

app.put("/", (req, res) => {
  sampleFile = req.files.temp;
  uploadPath = `${__dirname}/${sampleFile.name}_${new Date().getTime()}.mp4`;

  console.log("\n\n\n###", req.files, uploadPath, "###\n\n\n");

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });

  // res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
