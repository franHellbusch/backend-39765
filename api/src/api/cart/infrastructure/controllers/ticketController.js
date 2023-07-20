export class TicketController {
  constructor(ticketUC) {
    this.ticketUC = ticketUC;
  }

  getTickets = async (req, res, _next) => {
    const ticket = await this.ticketUC.sendTickets(req.params.email);
    res.sendSuccessWithPayload(200, ticket);
  };
}
