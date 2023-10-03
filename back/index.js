const express = require("express");

const app = express();

// getメソッドで、ルートパスにアクセスしてきたときの処理を記載する
app.get("/", (req, res) => {
    res.status(200).send({test:"test"});
});

app.get("/hello", (req, res) => {
    res.status(200).send("Hello World2");
});

// リクエストを待ち受ける
app.listen(8080, ()=>{
    console.log("server running PORT:"+8080);
});
