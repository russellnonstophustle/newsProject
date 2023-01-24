const express = require('express')
const app = express()
const port = 5500
 
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
 
app.set('views', './src/routes/views')
app.set('view engine', 'ejs')
 
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)
 
// Listen on port 5500
app.listen(port, () => console.log(`Listening on port ${port}`))