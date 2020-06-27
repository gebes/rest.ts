import express from 'express'
import * as bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello world🥳")
})

export {
    app
}