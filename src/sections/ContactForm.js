import React from 'react'
import { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)

    const validate = (e, form = null) => {
        if (e.type === 'submit') {
         const errors = {}
         errors.name = validate_name(form.name)
         errors.email = validate_email(form.email)
         errors.comments = validate_comments(form.comments)
         return errors
     
        } else {
             const {id, value} = e.target
             switch(id) {
                 case 'name':
                     return validate_name(value)
                 case 'email':
                     return validate_email(value)
                 case 'comments':
                     return validate_comments(value)
             }
        }
     }
     
     const validate_name = (value) => {
         if (!value){
             return 'Please enter your name.'
         }
         else if (value.length < 2)
             return 'Please enter a name with at least 2 characters.'
         else
             return null
     }
     
     const validate_email = (value) => {
         const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         
         if (!value)
             return 'Please enter your e-mail address.'
         else if (!regex_email.test(value))
             return 'Please enter a valid e-mail address (e.g. name@domain.com).'
         else
             return null
     }
     
     const validate_comments = (value) => {
         if (!value)
             return 'Please write a message.'
         else if (value.length < 5)
             return 'Please enter a message with more than 5 characters.'
         else
             return null
     }
  
    const handleChange = (e) => {
      const {id, value} = e.target
  
      switch(id) {
        case 'name':
          setName(value)
          break
        case 'email':
          setEmail(value)
          break
        case 'comments':
          setComments(value)
          break
      }
  
      setErrors({...errors, [id]: validate(e)})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setErrors(validate(e, {name, email, comments}))
    
      if (errors.name === null && errors.email === null && errors.comments === null) {

        let json = JSON.stringify({name, email, comments})

        setName('')
        setEmail('')
        setComments('')
        setErrors({})

        fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: { 
                'Content-Type' : 'application/json' 
            },
            body: json
        })
        .then(res => {
            if (res.status === 200) {
                setSubmitted(true)
                setFailedSubmit(false)
            } else {
                setSubmitted(false)
                setFailedSubmit(true)
            }
        })

        } else {
            setSubmitted(false)
        }
    }

  return (
    <section className="contact-us">
        <div className="container-small">
            {
                submitted ? (
                    <div>Thank you for your message!</div> 
                    ) : (<></>)                
            }

            {
                failedSubmit ? (
                    <div>Something went wrong :( We couldn't send your message right now. </div> 
                    ) : (<></>)                
            }

            <>
                <h1 className="contact-title">Come in Contact with us</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="contact-form-box">
                        <div>
                            <input id="name" type="text" value={name} onChange={handleChange} className={`${ errors.name == null ? "" : "error" }`} placeholder="Your name" />
                        </div>
                        <div id="invalid-feedback-name" className={`invalid-feedback ${ errors.name == null ? "d-none" : "" }`}>{errors.name}</div>
                        <div>
                            <input id="email" type="email" value={email} onChange={handleChange} className={`${ errors.email == null ? "" : "error" }`} placeholder="Your e-mail" />
                        </div>
                        <div id="invalid-feedback-email" className={`invalid-feedback ${ errors.email == null ? "d-none" : "" }`}>{errors.email}</div>
                    </div>
                    <div>
                        <textarea id="comments" value={comments} onChange={handleChange} className={`${ errors.name == null ? "" : "error" }`} placeholder="Message"></textarea>
                        <div className={`invalid-feedback ${ errors.comments == null ? "d-none" : "" }`}>{errors.comments}</div>
                    </div>
                    <button type="submit" className="button-forms">SEND MESSAGE</button>
                </form>
            </>
        </div>
    </section>
  )
}

export default ContactForm