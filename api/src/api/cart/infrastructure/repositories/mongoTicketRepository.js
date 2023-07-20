import { v4 as uuidv4 } from "uuid";
import { MongoRepository } from "../../../shared/repositories/mongoRepository.js";
import { ticketModel } from "../models/ticketModel.js";

export class MongoTicketRepository extends MongoRepository {
  constructor() {
    super(ticketModel);
  }

  saveTicket = async (cart, email) => {
    const ticket = {
      code: uuidv4(),
      amount: cart.total,
      purchaser: email,
      products: cart.products,
    };

    return await this.save(ticket);
  };
}
