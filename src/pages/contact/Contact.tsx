import { ValidationError, useForm } from '@formspree/react'
import { FormContainer, FormMessage } from './styles'

export function Contact() {
  function ContactForm() {
    const [state, handleSubmit] = useForm('mayrqgzn')

    if (state.succeeded) {
      return (
        <FormMessage>
          Obrigado pela mensagem! Você será retornado em breve!
        </FormMessage>
      )
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Mande sua mensagem!</h2>
        </div>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="phone">Telefone</label>
        <input id="phone" type="phone" name="phone" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div>
          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </div>
      </form>
    )
  }

  return (
    <FormContainer>
      <ContactForm />
    </FormContainer>
  )
}
