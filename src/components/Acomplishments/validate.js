export default function validate({ name, email, subject, message }) {
    const isBlankSpace = new RegExp("^\\s+$")
    const isEmailAddress = /\S+@\S+\.\S+/;

        const error = {}
        
        if (!name || isBlankSpace.test(name)) error.name = 'Ingresa tu nombre'
        else if (name.trim().length > 50) error.name = `Máximo de caracteres: 50 (${name.trim().length}/50)`
        
        if (!subject || isBlankSpace.test(subject)) error.subject = 'Escribe el Asunto'

        if (!email || isBlankSpace.test(email)) error.email = 'Ingresa tu dirección de email'
        else if (!isEmailAddress.test(email)) error.email = 'Ups, parece que ese email no es válido'
      
        if (!message || isBlankSpace.test(message)) error.message = 'Escribe tu mensaje'
        
        return error
      
}