const { connect } = require('mongoose');
const mongoConnect = require('./mongoConnect');
const products = require('./mongodb-design/products');


async function tryToConnect() {
    try {
        const connection = await mongoConnect.connect();
        console.log('Connected to MongoDB ' + connection.connection.name);
    } catch (error) {
        console.log(error);
    }

}


async function createDataBaseWithOneCollection() {
    try {
        const connection = await mongoConnect.connect();
        console.log('Connected to MongoDB ' + connection.connection.name);
        await connection.model('products', products.productsSchema);
        console.log('Created collection products');
    } catch (error) {
        console.log(error);
    }
}

createDataBaseWithOneCollection();