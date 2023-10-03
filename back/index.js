const express = require("express");
const bodyParser = require('body-parser');

const app = express();

// jsonをエンコード
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// getメソッドで、ルートパスにアクセスしてきたときの処理を記載する
app.get("/", (req, res) => {
    res.status(200).send({test:"test"});
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Received POST Data!");
  });

// app.get("/hello", (req, res) => {
//     res.status(200).send("Hello World2");
// });

// リクエストを待ち受ける
app.listen(8080, ()=>{
    console.log("server running PORT:"+8080);
});
