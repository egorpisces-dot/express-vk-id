// api/callback.js
module.exports = (req, res) => {
  try {
    const code = req.query.code;

    if (code) {
      res.status(200).send(`<h1>Код авторизации: ${code}</h1>`);
    } else {
      res.status(200).send("<h1>Нет кода авторизации</h1>");
    }
  } catch (err) {
    console.error("Ошибка функции:", err);
    res.status(500).send("<h1>Внутренняя ошибка сервера</h1>");
  }
};

