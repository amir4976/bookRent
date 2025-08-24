const path = require("path"); // path module
const express = require("express"); // express module
const app = express(); // express app
const port = 3000; // port number
// const mongoose = require("mongoose"); // mongoose module
// const bodyParser = require('body-parser'); // body-parser module
// const morgan = require('morgan'); // morgan module
const cors = require("cors"); // cors module
const connectDB = require("./config/ConnectToDB");
// const cookieParser = require('cookie-parser'); // cookie-parser module
// const session = require("express-session"); // express-session module


connectDB(); // connect to database


app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());


app.use(express.urlencoded({ extended: true }));
app.use(cors());






app.use("/v1", require("./routes/api/Book"));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
