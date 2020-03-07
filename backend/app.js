// 导入 mongoose 模块
var mongoose = require('mongoose');

// 设置默认 mongoose 连接
mongoose
  .connect('mongodb://127.0.0.1/BlogAPP', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to DB")
  })
  .catch((err) => {
    console.log(err)
    process.exit(-1)
  });

const express = require('express')

const app = express()
// init body parser
// 使可以获取req.body中的数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// 解决跨域问题cors
const cors = require('cors')
app.use(cors())

const PORT = process.env.PORT || 5000

const articles = require('./models/articles')
app.get('/', (req, res) => {
  articles.find({}, (err, articles) => {
    if (err) {
      console.log(err)
    } else {
      res.send(articles)
    }
  })
})

// user connection
const users = require('./models/users')
app.post('/signin', (req, res) => {
  // console.log(JSON.stringify(req.body))
  users.find({}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      const admin = user[0]
      if (admin.email === req.body.email && admin.password === req.body.password) {
        console.log('correct credential')
        const uuid = require('uuid')
        const token = uuid.v4()
        // 更新token
        // console.log('admin: ' + admin)
        users.updateOne({ email: admin.email }, { token: token }, (err, docs) => {
          users.find({}, (err, user) => {
            // 更新成功后打印admin
            console.log(user[0])
          })
        })
        res.json({ email: admin.email, password: admin.password })
      } else {
        console.log('wrong pwd')
        res.status(400).send({ 'msg': 'pwd wrong' })
      }
    }
  })
})

app.listen(PORT, () => {
  `Server started at port ${PORT}`
})