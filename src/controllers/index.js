const { load } = require("@pspdfkit/nodejs");
const fs = require("node:fs");
const path = require("node:path");

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

/*
 * Example from:
 * https://pspdfkit.com/getting-started/nodejs/?product=nodejs&project=nodejs
const { load } = require('@pspdfkit/nodejs');
const fs = require('node:fs');

async function convertToPDF() {
  const docx = fs.readFileSync('sample.docx');
  const instance = await load({ 
        document: docx,
    });
  const buffer = await instance.exportPDF();
  fs.writeFileSync('converted.pdf', Buffer.from(buffer));
  await instance.close();
};

convertToPDF();
*/

// Define the Instant JSON string
const myInstantJSON =
  '{"annotations":[{"bbox":[294.6666564941406,85.33331298828125,200,50.00006103515625],"borderStyle":"solid","borderWidth":1,"createdAt":"1970-01-01T00:00:00Z","creatorName":"01HYY9GABB783NSS930GNEXYEH","formFieldName":"01HYY9GABB783NSS930GNEXYEH","id":"01HYY9GABB783NSS930GNEXYEH","name":"01HYY9GABG5DK6K091QR4A837J","opacity":1,"pageIndex":0,"rotation":0,"type":"pspdfkit/widget","updatedAt":"2024-05-28T00:27:25Z","v":2}],"formFields":[{"annotationIds":["01HYY9GABB783NSS930GNEXYEH"],"id":"01HYY9GJ80ANPGQ4GMKZ9APBDE","label":"01HYY9GABB783NSS930GNEXYEH","name":"01HYY9GABB783NSS930GNEXYEH","pdfObjectId":173,"type":"pspdfkit/form-field/signature","v":1}],"format":"https://pspdfkit.com/instant-json/v1","pdfId":null}';
// Parse the JSON string
const parsedInstantJSON = JSON.parse(myInstantJSON);

exports.getHelloWorld = (req, res) => {
  res.send("Hello, World!");
};

exports.test = async (req, res) => {
  
  // TODO: Sing document process goes here
  // code ...

  /**
   * We need to know if the document is signed by all the signers
   * The next process only start when all the signers have signed the document
   */
  // Declare the URL of the PDF document
  const pdfUrl =
    "https://medicaidsoftforms.s3.us-east-1.amazonaws.com/NCW%20ALF%20Only%20Packet_175_488.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGXYIOLXzn1RyN7mFi4H%2BQ87w1RtVMSCsEPSVeFXmWugAiEAgFH%2FoJmVMAOi5w4ymnQhH2iQPjXNuq8IL0cnvl0TMVoq%2FwIIPRACGgwzMDIzNzk0MTE4NDgiDJsbyJw%2FuOqNLkMPfCrcAjkU53IU6g7yocesX1MeIhNX4311Xr2UFDqruyQKOQpN1EkhhabIwmim5ycMsLhB8TCyrEdwsE2eTMMrMPAvWl4XFoxgiNLzfNEAN%2BHkkkFfOqvbfxU4QWkeLgp3O%2FIb3Sn86i9qce6AS3DhQJRpT6E7hOR1tx2K6A2JBKJ10okc5OwSaDGOdNmJm5%2Bkqsb%2FYxZTKgUUHzfVvn%2FjUo%2BcBKvB2zdMJiZzIuM1KWcL%2BYFBwDMnIdDWMpPwQ%2FiIdfES0TQ%2Bd1HHwBHrhFeN4ztC%2FRJv3M77Sm6Rphn%2Fg%2Bnpz7vCur4fWSYtwlS0OZRtLuJmyxPOaN13yfFZWCNGSql%2FL2Qn70NjkRvdWIPAIpbxc13TNX%2F9Mkt2eaYVvPck9piFODueIDZARQPWyBX%2BY3atjMyt0DEE9y9DnItwkl7f%2F6zl%2BoUOMP9lh0hVt0s9xlVluInwtT74nhY%2BbEw6hTCyhuWyBjqzAkNmOA%2FTWMkzliPGK5H%2F0E2tiALHvypuAIIrUbpXTWa7BBpv35TXuzgz13Cxx%2Bwy0Z4KTXjr7Y7ntesNen5JvKRYq9sbX%2FIQPZ%2BJky6HnSdypRyIYK1C7DItxM1mksIV2BuXi6pkB9Jw7wxpp%2Fdx8PuIbhb9TfW1qwge6qbB8xE7c%2FvDB2Ms3nYeYA8PXRP%2FGVjHB%2BQwS3VEze83F1Ao1Q1EAjZl%2BtyGTQXYefy9b%2FsBz8uWR1MQ56oPNEQ76Ii%2FWlZE0M0c%2FqENmEkUCRHG2kKi4RzYhhIPZvBhBZc6AuKo%2FZvywJzwEbYUJ%2BQy0aIDXGKZYwhpKmeEEhkdGuVry7dyvCEcgKNOL2%2FdXKHACMD2d680uFumVbymvnqe6AduVDUVH6G%2BndNVBorMz1yJvEyYcbs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240531T034531Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAUMZZXVGEJ4AWL5VC%2F20240531%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e1a3510f1c0e3640640b2cfaddd95848ec8ce1a846cdac8244364e4127f9ebf";
  // Download the PDF document to the local file system
  const outputPath = "./document.pdf";
  const https = require("https");
  console.log(`<---------- Download start ---------->`);
  const file = fs.createWriteStream(outputPath);
  https
    .get(pdfUrl, function (response) {
      response.pipe(file);
      file.on("finish", async function () {
        file.close();
        console.log("PDF downloaded to " + outputPath);
        const pdfDoc = fs.readFileSync(outputPath);
        console.log(`pdfDoc -----> `, pdfDoc);
        console.log(`<---------- Loading instance ---------->`);
        const instance = await load({
          // TODO: you need to obtain a valid license key for PSPDFKit for Node.js
          license: {
              key: "license-key-here",
              appName: 'dev.medicaidsoft.com',
            },
          document: pdfDoc,
          // This are the annotations saved in the database
          instantJSON: parsedInstantJSON,
        });
        // PSPDFKit generate an array buffer
        const arrayBuffer = await instance.exportPDF();
        console.log(`arrayBuffer -----> `, arrayBuffer);
        // Generate unique name for the file
        const fileName = `converted-${Date.now()}.pdf`;
        // Convert the array buffer to a buffer
        const buffer = Buffer.from(arrayBuffer);
        console.log(`buffer -----> `, buffer);
        // TODO: We need to send this buffer in the Body param of S3 upload
        // ... code to upload the file to S3
        // Example code line to save the file to the local file system
        fs.writeFileSync(fileName, buffer);
        // We need to close the instance
        await instance.close();
        console.log("******************************* instance => ", instance);
        // Delete the PDF document from the local file system
        fs.unlinkSync(outputPath);
        res.send("Works");
      });
    })
    .on("error", function (err) {
      console.log(`https get error -----> `, err);
      // Delete the PDF document from the local file system
      fs.unlinkSync(outputPath);
      console.error("Error downloading PDF: " + err.message);
      res.send("Not Works");
    });
};
