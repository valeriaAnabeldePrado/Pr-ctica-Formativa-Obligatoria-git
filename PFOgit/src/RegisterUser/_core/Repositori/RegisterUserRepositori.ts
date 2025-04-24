import axios from "axios";
import { UserDTO } from "../../_EntityDTO/IuserDTO";


export const userRepository = {
  async registerUser(user: UserDTO) {
    try {
      const response = await axios.post("/la url en el .env", user);
      return response.data;
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      throw error;
    }
  },
};