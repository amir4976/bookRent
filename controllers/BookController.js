const path = require("path");
const fs = require("fs/promises");

const Book = require("../models/Books");

// 📚 گرفتن لیست کتاب‌ها
const GetBook = async (req, res) => {
  const AllBooks = await Book.find();

  res.send(AllBooks);
};

// 📚 اضافه کردن کتاب
const PostBook = async (req, res) => {
  const { title, author, price, quantity, category, description, status } =
    req.body;
  try {
    if (
      !title ||
      !author ||
      !price ||
      !quantity ||
      !category ||
      !description ||
      !status
    ) {
      return res.status(400).send("Please Enter All Fields");
    }

    const newBook = {
      title,
      author,
      price,
      quantity,
      category,
      description,
      status,
    };
    console.log(newBook);
    await Book.create(newBook);
    return res.sent(newBook);
  } catch (error) {
    res.send(error);
  }
};

const GetBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const findBook = await Book.findById(id);
    res.send(findBook);
  } catch (error) {
    res.status(404).send("book dident find");
  }
};

const PutBookById = async (req, res) => {
  const { id } = req.params; // گرفتن id از URL
  const newData = req.body; // دیتاهای جدیدی که کاربر فرستاده

  try {
    // آپدیت کتاب
    const updatedBook = await Book.findByIdAndUpdate(
      id, // id کتاب
      { $set: newData }, // چی رو آپدیت کنیم
      { new: true, runValidators: true }
      // new: true => سند آپدیت‌شده رو برمی‌گردونه
      // runValidators: true => مطمئن میشه قوانین اسکیما رعایت بشن
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "کتاب پیدا نشد" });
    }

    res.status(200).json({
      message: "کتاب با موفقیت آپدیت شد",
      updatedBook,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطا در آپدیت کتاب", error: error.message });
  }
};

const DeleteBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const findBook = await Book.findByIdAndDelete(id);
    res.send(findBook);
  } catch (error) {
    res.status(404).send("book dident find");
  }
};



module.exports = {
  GetBook,
  PostBook,
  GetBookById,
  PutBookById,
  DeleteBookById,
};
