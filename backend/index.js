const server = require('./server');
const { PORT } = require('./config');
server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})