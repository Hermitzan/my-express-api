const { load } = require('@pspdfkit/nodejs');
const fs = require('node:fs');
const path = require('node:path');

// Import any required modules or dependencies
// For example, if you need to use the express module, you can import it like this:
// const express = require('express');

// Define your controller functions for handling different API endpoints
// For example, you can define a function to handle a GET request to '/api/users'
// const getUsers = (req, res) => {
//   // Logic to fetch users from the database or any other data source
//   // Send the response back to the client
//   res.send('Get users');
// };

// Export the controller functions as a module
// For example, you can export the getUsers function like this:
// module.exports = {
//   getUsers,
// };

// You can define as many controller functions as needed for your API endpoints
// Remember to export them all using the module.exports object

exports.getHelloWorld = (req, res) => {
  res.send('Hello, World!');
}

exports.test =  async (req, res) => {
    console.log("**************************** test");
    const PATH_FLE = path.join(__dirname, "data", "Document.pdf");
    const pdfDoc = fs.readFileSync(PATH_FLE);
    const instance = await load({
      document: pdfDoc,
      //instantJSON: myInstantJSON
    });
    console.log("******************************* instance => ", instance);

    res.send('Works');
}