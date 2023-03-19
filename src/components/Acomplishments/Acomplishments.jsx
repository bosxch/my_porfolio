import React, { useState } from 'react';
import styles from '../../styles/ContactPage.module.css';
import { Section, SectionText, SectionTitle, ButtonBack } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import validate from './validate';

function ContactPage() {

  const [error, setError] = useState({})

  const [input, setInput] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
  })

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    setError(validate(({ ...input, [e.target.name]: e.target.value })))
}

  const submitForm = async (e) => {
    e.preventDefault();
    await postMessage()
        setInput({ name: "", email: "", subject: "", message: "" })
        toast('Mensaje enviado! 🚀', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
    } 

    const postMessage = async() => {
      const newMessage = {
          name: input.name.trim(),
          email: input.email,
          subject: input.subject.trim(),
          message: input.message.trim(),
      }
      try {
          const post = await axios.post("https://submit-form.com/POxMrSF1", newMessage)
      } catch(e) {
          console.log(e)
      }
  }

  return (
    <Section id='contact'>
       <SectionTitle main>
            _Contáctame
          </SectionTitle>
      <div className={styles.container}>
        <div>
         
          <form className={styles.form} onSubmit={submitForm} autocomplete="off">
            <div className={styles.flex}>
              <div>
                <SectionText>
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre..."
                    value={input.name}
                    onChange={handleChange}
                    required />
                    {error.name && <p style={{'color': '#945DD6'}}>{error.name}</p>}
                </SectionText>
              </div>
              <div>
                <SectionText>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email@example.com..."
                    value={input.email}
                    onChange={handleChange}
                    required />
                    {error.name && <p style={{'color': '#945DD6'}}>{error.email}</p>}
                </SectionText>
              </div>
            </div>
            <div>
              <SectionText>
                <label htmlFor="name">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Asunto..."
                  value={input.subject}
                  onChange={handleChange}
                  required />
                  {error.name && <p style={{'color': '#945DD6'}}>{error.subject}</p>}
              </SectionText>
            </div>
            <div>
              <SectionText>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Tu mensaje aquí..."
                  value={input.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {error.name && <p style={{'color': '#945DD6'}}>{error.message}</p>}
              </SectionText>
            </div>
            <Button type='submit'>Enviar!</Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
