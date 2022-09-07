const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	const user = { name: 'Brandon', hobbit: 'sports' }
	res.send(user)
})

app.listen(3001)
