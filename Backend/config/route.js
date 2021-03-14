const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

function sendAsync(request, response, action) {
    (async () => {
        return response.json(await action(request))
    })()
}

const route = {
    get: (name, action) => {
        app.get(name, (request, response) => {
            sendAsync(request, response, action)
        })
    },
    post: (name, action) => {
        app.post(name, (request, response) => {
            sendAsync(request, response, action)
        })
    },
    update: (name, action) => {
        app.patch(name, (request, response) => {
            sendAsync(request, response, action)
        })
    },
    delete: (name, action) => {
        app.delete(name, (request, response) => {
            sendAsync(request, response, action)
        })
    },
}

module.exports = { route, app }
