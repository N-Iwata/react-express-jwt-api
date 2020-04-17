# react-express-jwt-api

## <u>概要</u>

ReactとNode.js(express)とJWTで作る認証・認可周りの実装のAPI側のプロジェクトです。

* Node(v12.15.0)
* express(v4.17.1)
* jsonwebtoken(v8.5.1)
* body-parser(v1.19.1)

## <u>使い方</u>
クローンしてパッケージインストールしてスタートすれば起動できます。
```
git clone https://github.com/N-Iwata/react-express-jwt-api.git xxx
cd xxx
npm install --save
npm start
```

VSCodeの[REST Client]という拡張機能をインストールしてれば、[request.rest]ファイルの[Send Request]ボタンを押せば通信できます。

```
POST http://localhost:5000/api/v1/login
Content-Type: application/json

{
  "userId": "00001",
  "passWord": "qwerty"
}

###
POST http://localhost:5000/api/v1/login
Content-Type: application/json

{
  "userId": "00002",
  "passWord": "asdfgh"
}

###
GET http://localhost:5000/api/v1/users
Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```