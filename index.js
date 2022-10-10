
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
moment.locale("es");
const _ = require('lodash');
const chalk = require('chalk');

let usuarios = [];


let apiCall = async () => {
    axios
        .get("https://randomuser.me/api/?results=7")
        .then((info) => {
            const users = info.data.results;
            //console.log('usersx7', users);
            _.forEach(users, (e) => {
                usuarios.push(
                        {
                            Nombre: e.name.first,
                            Apellido: e.name.last,
                            ID: uuidv4().slice(0, 6),//uso de ID por UUID
                            Timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')//uso de moment
                        }
                    );
                //console.log(usuarios);
            } )
    
            _.forEach(usuarios, (e)=> {//uso de lodash
                console.log(chalk.blue.bold.bgWhite(`Nombre: ${e.Nombre}, Apellido: ${e.Apellido}, ID: ${e.ID}, Timestamp: ${e.Timestamp}`));//uso de chalk
            })
        })
        .catch((e) => {
            console.log(e);
        });
};

apiCall();