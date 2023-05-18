"use strict";


const axios = require('axios');
const ps = require("prompt-sync");

const prompt=ps();

let name = prompt('user name ');

let url = `https://${name}`;





axios.get(url)
.then(function (response){
    const sourcecode = response.data;
    const charactercount = sourcecode.length;
    console.log(`number of chracters : ${charactercount}`);

})
.catch(function (error){
    console.log(error);
})