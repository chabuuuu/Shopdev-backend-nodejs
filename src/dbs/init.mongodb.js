'use strict'

const mongoose = require('mongoose')
const {db: {host, name, port}} = require('../configs/config.mongodb')

const connectString = `mongodb://${host}:${port}/${name}`

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
        mongoose.connect(connectString, {
            maxPoolSize: 50
        }).then(()=> {
            console.log("Connected to mongodb PRO")
            console.log(`Connection string: ${connectString}`)
        })
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