const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')  
})

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})