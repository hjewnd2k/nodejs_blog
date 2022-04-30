const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hdlb = require('express-handlebars')
const app = express()
const port = 3000

const route =  require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// app.use(morgan('combined'))

app.engine('hbs', hdlb.engine({
    extname: 'hbs',
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resoureces/views'))

//Route init
route(app)


app.listen(port, () => {
    console.log("listening on port " + port);
})