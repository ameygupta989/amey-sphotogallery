import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com",
  headers: {
      Authorization: "Client-ID 5WnNuMS2anEk6yg90rbWV9HvRpLssj7z0tLVJckF-FU",
  },

});