import express from 'express';
import path from 'path';
const server = express();
const serverSetup = {
    port: 7080
};
const viewsDirectory = path.join(__dirname, '../views');
server.set('views', viewsDirectory);
server.set('view engine', 'jade');
server.use(express.static(path.join(__dirname, '../lib')));

server.use('/', (req, res, next) => {
    res.render('index');
});

function start(port = serverSetup.port) {
    return server.listen(port, () => {
        console.log(`Alt Express app running on: ${port}`);
    });
}

export {
    start
};
