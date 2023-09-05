import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export class MockProductController {
  getMockProducts = async (req, res, _next) => {
    const mockProducts = [];

    for (let i = 0; i <= 100; i++) {
      mockProducts.push({
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price({ min: 100 }),
        stock: faker.number.int(100),
        code: uuidv4(),
        imageUrl: faker.image.url(),
        status: "active",
        category: faker.commerce.department(),
      });
    }
    res.sendSuccessWithPayload(200, mockProducts);
  };
}
