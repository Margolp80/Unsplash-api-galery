import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID aKuRQk6_ZhsaaCX0xAO3jNZ18TIXsU7UIhMl5NjQPWk",
  },
});
