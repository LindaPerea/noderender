const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
    apis: ['./src/routes/auth.routes.js', './src/models/user_ecommerce.js', './src/routes/product.routes.js', './src/models/product.js','./src/routes/user.routes.js', './src/routes/order.routes.js','./src/models/order.js','./src/routes/cart.routes.js','./src/models/product_in_cart.js','./src/routes/order.routes.js'],
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce Backend",
            version: "0.0.9",
            description: "Documentation para ecommerce con node"
        }
    }
};

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader({"Content-Type": "application/json"});
        res.send(swaggerSpec)
    });
    console.log(`la documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`);
}

module.exports = swaggerDocs;