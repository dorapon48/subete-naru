const express = require("express");

const app = express();

// getメソッドで、ルートパスにアクセスしてきたときの処理を記載する
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

// リクエストを待ち受ける
app.listen(8080, ()=>{
    console.log("server running PORT:"+8080);
});
