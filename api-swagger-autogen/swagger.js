const fs = require('fs');

const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const doc = {
    info: {
      title: 'My Backend Backend',
      description: 'APIs used in My Backend',
      version: '1.0.1',
      "contact": {
        "name": "API support",
        "email": "mocksolution.support@nasalcore.com",
        "url": "https://www.nasalcore.com/contact-us"
      }
    },
    "tags": [{
          "name": "products",
          "description": ""
        }
      ],
      "components": {
        "securitySchemes": {
          "ApiKeyAuth": {
            "type": "apiKey",
            "name": "authorization",
            "in": "header",
            "description": "Authentication token"
          }
        }
      },
      "security": [
        {
          "ApiKeyAuth": []
        }
      ]
  };

const outputFile = './swagger_output.json';
const endpointsFiles = [
    './index.js'
];

const update_tags =  () => {
  let swagger_output = JSON.parse(fs.readFileSync(outputFile, 'utf8'));
  delete swagger_output.servers;
  for(let path in swagger_output.paths){
    let tag = path.split('/')[0] || path.split('/')[1];
    for(let method in swagger_output.paths[path]){
      swagger_output.paths[path][method].tags = [tag]; 
    }
  }
  fs.writeFile(outputFile, JSON.stringify(swagger_output, null, 4), (res) => {
    console.info("update tag result", res);
  });
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("file generated");
    update_tags();
});




