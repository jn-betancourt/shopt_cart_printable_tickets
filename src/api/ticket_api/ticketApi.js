import axios from "axios";

export const postTicket = async (ticket) => {
  const response = await axios.post("http://localhost:8080/api/ticket", ticket);
  return response.status;
};
export const postTicketToGo = async (ticket, user) => {
  
  const response = await axios.post("http://localhost:8080/api/ticketToGo", {
    products: ticket,
    user: user,
  });
  return response.status;
};
