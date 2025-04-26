import { useRegisterUser } from "../_core/usesCases/UseUserRegister";
import "./glascard.css";
import { useState } from "react";

const CardGlass = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [emailError, setEmailError] = useState("");

  const { submit: registerUser } = useRegisterUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!email.includes("@")) {
      setEmailError("Email inválido");
      return;
    } else {
      setEmailError("");
    }

    if (phone.length < 8) {
      alert("El teléfono debe tener al menos 8 dígitos.");
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      phone,
    };

    try {
      await registerUser(payload); 
      // Limpiar el formulario post envio
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error("Error al registrar:", err); 
    }
  };

  return (
    <section className="glass-card">
      <form onSubmit={handleSubmit} className="form">
        <h2>Registro de Usuario</h2>

        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error">{emailError}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Registrarse</button>
      </form>
    </section>
  );
};

export default CardGlass;
