// import React, {useState} from 'react';
// import './Form.css';



// export const Form = ({ addProduct })  => {

//     const [values, setValues] = useState({
//         name: '',
//         email: '',
//         emailConfirmation: '',
//         phone: ''
//      })
    
//     const handleInputChange = e => {
//         e.preventDefault()
//         const {name, value  } = e.target; 
//         setValues({...values, [name]:value})
//         console.log(values)
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
// 		// addProduct(values); // Envia al componente Products los valores de los values
// 		setValues({ ...values }); // Resetear campos de formulario
//     }
//     console.log(values)
//     return (
//         <section>
//             <h3 className="formTitle">Finalizar compra</h3>
//             <div>

//             <form onSubmit={handleSubmit} >
//                 <input type="text" placeholder="Nombre" name="name" value={values.name} onChange={handleInputChange}  />
//                 <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleInputChange}  />
//                 <input type="email" placeholder="Confirmar mail" name="emailConfirmation" value={values.emailConfirmation} onChange={handleInputChange}   />
//                 <input type="text" placeholder="Teléfono" name="phone" value={values.phone} onChange={handleInputChange}   />
//                 <button className="submitForm" type="submit">Comprar</button>
//             </form>
//             <article>
//                 <p>carrito</p>
//             </article>
//             </div>
//         </section>
//     )
// }
