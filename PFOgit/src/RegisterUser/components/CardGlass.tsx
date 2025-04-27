import { useRegisterUser } from "../_core/usesCases/UseUserRegister";
import "./glascard.css";
import { useState } from "react";

const CardGlass = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [emailError, setEmailError] = useState("");

  const { submit: registerUser } = useRegisterUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!email.includes("@")) {
      setEmailError("Por favor ingrese un mail valido");
      return;
    } else {
      setEmailError("");
    }

    const payload = {
      firstName,
      lastName,
      email,
      phone,
    };

    registerUser(payload);
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

        <input
          type="text"
          name="streetAddress"
          placeholder="Dirección completa"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />

        <input
          type="text"
          name="city"
          placeholder="Localidad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="text"
          name="postalCode"
          placeholder="Código Postal"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <button type="submit">Registrarse</button>
      </form>
    </section>
  );
};

export default CardGlass;
