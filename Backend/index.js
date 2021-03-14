const { app } = require('./config/route')
require('./routes/routes')

app.listen(21262, () => {
    console.log('Express started at http:localhost:21262')
})
