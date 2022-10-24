import express from 'express'
import { addNewuser, getAlluser } from './src/user.js'

const PORT = 3030
const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('working'))
app.post('/user', addNewuser)
app.get('/user', getAlluser)


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))