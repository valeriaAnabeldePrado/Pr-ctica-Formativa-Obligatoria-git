import { UserDTO } from "../_EntityDTO/IuserDTO";
import { userRepository } from "./Repositori/RegisterUserRepositori";


export const registerUser = async (user: UserDTO) => {
  return await userRepository.registerUser(user);
};