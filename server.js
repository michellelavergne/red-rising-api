const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {

    'darrow': {
        'age' : 32,
        'birthName' : 'Darrow O Lykos',
        'birthLocation' : 'Mars',
        'birthColor' : 'Red'
    },
    'sevro' : {
        'age' : 32,
        'birthName' : 'sevro au barca',
        'birthLocation' : 'Mars',
        'birthColor' : 'Gold'

    },
    'unknown' : {
        'age' : 0,
        'birthName' : 'unknown',
        'birthLocation' : 'unknown',
        'birthColor' : 'unknown'

    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')  
})

app.get('/api/characters/:birthColor', (request, response) => {
    const birthColor = request.params.birthColor.toLowerCase()
    console.log(birthColor)
    if(characters[birthColor]) {
        response.json(characters[birthColor])
    }else{
        response.json(characters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})