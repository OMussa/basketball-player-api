const express = require('express')
const app = express()
const PORT = 8000

const basketballPlayers = {
    'King James' : {
    'birthname': 'LeBron Raymone James',
    'age': 37,
    'birthLocation': 'Akron, Ohio',
},
'The Klaw' : {
    'birthname' : 'Kawhi Anthony Leonard',
    'age': 30,
    'birthLocation' : 'Los Angeles, California'
},
'unknown' : {
    'age' : 0,
    'birthLocation' : 'unknown',
    'birthname' : 'unknown'

}
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
    const player = request.params.name.toLowerCase()
    
    if(basketballPlayers[player]){
        res.json(basketballPlayers[player])
    }else{
        res.json(basketballPlayers['unknown'])
    }
   
})

app.listen(PORT, ()=>{
    console.log(`The server is running now on ${PORT}! Betta Go catch it`)
})