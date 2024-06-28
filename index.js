require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const user = {
    "name" : "user1",
    "age" : "21"
}
app.get('/user', (req, res)=>{
    res.json(user)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})