import { TicketDto } from "./dtos/ticketDto.js";

export class TicketUC {
  constructor(ticketRepository) {
    this.ticketRepository = ticketRepository;
  }

  sendTickets = async (email) => {
    const ticketInfo = await this.ticketRepository.getAll({
      purchaser: email,
    });
    return ticketInfo.map((ticket) => new TicketDto(ticket));
  };
}
