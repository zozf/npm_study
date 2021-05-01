// モジュールを持ってくる
const express = require('express')

// アプリケーションの作成
const app = express()

// カレントにアクセスすると'Hello World!!'が表示される
app.get('/', (req, res) => res.send('Hello World!!'))

// 3000番ポートで動いている
// ログの表示
app.listen(3000, () => console.log('Example app listening on port 3000!!'))