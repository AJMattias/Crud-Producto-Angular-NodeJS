const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const connectionDB = async()=>{

try {
    await mongoose.connect(process.env.DB_MONGO, {
        useUnifiedTopology: true,
    })
    console.log('database connected')
} catch (error) {
    console.log(error);
    process.exit(1)// detenemos la app
}

}

module.exports = connectionDB;