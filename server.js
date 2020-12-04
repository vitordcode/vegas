const cors = require('cors')
const express = require('express')
const nunjucks = require('nunjucks')
const fs = require('fs')

const server = express()
const bodyParser = require('body-parser');
const produtos = require('./produtos')
const data = require('./data.json')


// server.use('*', (req, res, next) => {
//   if (req.headers['x-forwarded-proto'] == "https") {
//       next()
//   }else {
//       res.redirect("https://" + req.headers.host + req.originalUrl)
//   }
// })
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('public'))
server.use(cors())
server.use(bodyParser.json());

server.set('view engine', 'html')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true

})

server.get('/', (req, res) => {
  return res.render('index.html', { produtos })
})
server.post('/newsLetter', (req, res) => {
  let { number } = req.body

  const id = Number(data.newsLetter.length + 1)

  data.newsLetter.push({
    id,
    number,
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (erro) {
    if (erro) return res.send('Write file error!')

    return res.redirect('/')
  })
})
server.post('/contato', (req, res) => {
  let { name, email, city, number } = req.body

  const id = Number(data.contato.length + 1)

  data.contato.push({
    id,
    name,
    email,
    city,
    number,
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (erro) {
    if (erro) return res.send('Write file error!')

    return res.redirect('/')
  })
})
server.post('/promocao', (req, res) => {
  let { name, email, city, number } = req.body

  const id = Number(data.promocao.length + 1)

  data.promocao.push({
    id,
    name,
    email,
    city,
    number,
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (erro) {
    if (erro) return res.send('Write file error!')

    return res.redirect('/')
  })
})


server.get('/painel', (req, res) => {
  return res.render('painel.html')
})
server.get('/painel/contato', (req, res) => {
  return res.render('contato.html', { contato: data.contato })
})
server.get('/painel/promocao', (req, res) => {
  return res.render('promocao.html', { promocao: data.promocao })
})
server.get('/painel/newsletter', (req, res) => {
  return res.render('newsletter.html', { newsletter: data.newsLetter })
})

server.listen(3000)