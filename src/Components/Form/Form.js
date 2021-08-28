import React, {useState} from 'react';
import './Form.css';

export const Form = ({createOrder}) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        console.log(form)
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
        
    }
    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <section>
            <h3 className="formTitle">Datos de contacto</h3>
            <form action="">
                <input type="text" placeholder="Nombre" name="name" value={form.name} onChange={getContactData}  />
                <input type="email" placeholder="Email" name="email" value={form.email} onChange={getContactData}/>
                <input type="email" placeholder="Confirmar mail" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} />
                <input type="text" placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} />
                <button className="submitForm" type="submit" disabled={disabled}  onClick={finalizePurchase} >Comprar</button>
            </form>
        </section>
    )
}
