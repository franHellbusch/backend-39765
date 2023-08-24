import swaggerJSDoc from "swagger-jsdoc";
import { __dirname } from "./path.js";

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Ecommerce API, CoderHouse final project",
      description: "That is the documentation for api endpoinds",
    },
  },
  apis: [`${__dirname}/../docs/**/*.yaml`],
};

export const specs = swaggerJSDoc(swaggerOptions);
