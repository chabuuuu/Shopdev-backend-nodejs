'use strict'

const mongoose = require('mongoose')

const connectString = 'mongodb://localhost:27017/shopDEV'

class Database{
    constructor(){
        this.connect();
    }

    //Connect database
    connect(type = 'mongodb'){
        if (1 === 1){
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }
        mongoose.connect(connectString).then(()=> console.log("Connected to mongodb PRO"))
        .catch(err => console.log("Error connecting to mongodb"));
    }
    
    static getInstance(){
        if (!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const mongodbInstance = Database.getInstance();
module.exports = mongodbInstance;