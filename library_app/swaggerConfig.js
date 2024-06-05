const swaggerJsDocs = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library App API',
            version: '1.0.0',
            description: 'A Library App Express API'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ],
        tags: [
            {
                name: 'Book'
            },
            {
                name: 'Member'
            }
        ]
    },
    apis: ['./docs/swagger/books.js', './docs/swagger/member.js']
}

const specs = swaggerJsDocs(options);

module.exports = specs;