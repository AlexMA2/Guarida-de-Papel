
import { useState } from "react"
import Input from "../Input/Input.jsx"
import './Form.css'
import { postBook } from "../../services/books.js"

const Form = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        const message = {
            bookTitle: e.target.titulo.value,
            author: e.target.autor.value,
            direction: e.target.direccion.value,
            reason: e.target.motivo.value,
            date: e.target.entrega.value,
        }

        const response = postBook(message)
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h2> Reserva tu Libro </h2>
            <Input name="Titulo del Libro" id="titulo"/>
            <Input name="Autor" id="autor" />
            <Input name="Direccion" id="direccion" />
            <Input name="Motivo" id="motivo"/>                
            <Input name="Fecha de entrega" id="entrega" type="date"/>
            <input type="submit" value="Reservar"/>
        </form>
    )
}

export default Form
