const server = require('./server');

const {
PORT = 3332,
NODE_ENV='development'
} = process.env;

server.listen(PORT, () => {
console.log(`Server is listening on http://localhost:${PORT}`)
})