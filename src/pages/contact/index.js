import React, { useState } from "react"
import DefaultLayout from "../../components/layouts";

import Input from "../../components/forms/input"
import Textarea from "../../components/forms/textarea"
import Button from "../../components/forms/button"

import "./index.scss";

const Contact = () => {

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: ""
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [nameError, setNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, apellido, email, mensaje } = form
        !nombre ? setNameError(true) : setNameError(false)
        !apellido ? setLastNameError(true) : setLastNameError(false)
        !email ? setEmailError(true) : setEmailError(false)
        !mensaje ? setMessageError(true) : setMessageError(false)
        console.log(form)
    }

    return (
        <DefaultLayout>
            <form className="form" method="post" onSubmit={handleSubmit}>
                <h2 className="form--title" >Contacto </h2>

                <Input text="Nombre" name="nombre" type="text" onChange={handleChange}
                    error={nameError}
                    errorMessage="nombre" />

                <Input text="Apellido" name="apellido" type="text" onChange={handleChange}
                    error={lastNameError}
                    errorMessage="apellido" />

                <Input text="Email" name="email" type="text" onChange={handleChange}
                    error={emailError}
                    errorMessage="email" />

                <Textarea text="Mensaje" name="mensaje" onChange={handleChange}
                    error={messageError}
                    errorMessage="mensaje" />

                <Button text="Enviar" classes="button button-primary" />
            </form>
        </DefaultLayout>
    );
}

export default Contact;
