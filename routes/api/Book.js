const express = require("express");
const router = express.Router();
const BookController = require("../../controllers/BookController");

router
  .route("/Books")
  .get(BookController.GetBook)
  .post(BookController.PostBook)


router
  .route("/Books/:id")
  .get(BookController.GetBookById)
  .put(BookController.PutBookById);
  .delete(BookController.DeleteBookById);
module.exports = router;
