import { useState } from "react";
import { UserDTO } from "../../_EntityDTO/IuserDTO";
import { registerUser } from "../registerUser";


export const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (user: UserDTO) => {
    setLoading(true);
    setError(null);
    try {
      const result = await registerUser(user);
      return result;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Ocurrió un error.");
      } else {
        setError("Ocurrió un error.");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};