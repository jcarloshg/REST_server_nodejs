

const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // middlewares
        this.middlewares();

        // my routes
        this.routes();
    }

    middlewares() {
        // cors
        this.app.use(cors())

        // dir public
        this.app.use(express.static('public'))
    }

    routes() {

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("aqui vamos en el port", this.port);
        });
    }
}

module.exports = Server;