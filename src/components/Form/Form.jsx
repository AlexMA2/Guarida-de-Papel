import { useState } from "react";
import Input from "../Input/Input.jsx";
import "./Form.css";
import { postBook } from "../../services/books.js";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const message = {
      nombre_producto: e.target.producto.value,
      precio_producto: e.target.precio.value,
      solicitante_producto: e.target.solicitante.value,
      motivo_producto: e.target.motivo.value,
    };

    const messageComplete = {
      adjudicacionInput: message,
    };

    postBook(messageComplete);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2> An&aacute;lisis de sentimientos de Salud </h2>
      <div>
        <label> Texto </label>
        <textarea cols="30" rows="10"></textarea>
        <p></p>
      </div>

      <Input name="Palabra clave (Opcional)" id="motivo" />

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Form;
