const mongoConnect = require('./mongoConnect');

function tryToConnect() {
    try {
        mongoConnect.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }

}


tryToConnect();