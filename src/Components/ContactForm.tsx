/* eslint-disable react/button-has-type */
import { Box, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import EntriesDataService from '../entries-service'
import MediaQuery from './MediaQuery'
import useAsyncTask from './useAsyncTask'

const ContactForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
  })

  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const validatePhoneNumber = (input: string) => {
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    return re.test(input)
  }

  useEffect(() => {
    !validateEmail(data.email) && data.email.length !== 0
      ? setEmailError('Enter Correct Email')
      : setEmailError('')
  }, [data.email])

  useEffect(() => {
    !validatePhoneNumber(data.phone) && data.phone.length !== 0
      ? setPhoneError('Enter Correct Contact Number')
      : setPhoneError('')
  }, [data.phone])

  const getInputVal = (id: string) => {
    return (document?.getElementById(id) as HTMLInputElement).value
  }

  const submitFormData = async () => {
    await EntriesDataService.addEntry({ data, time: new Date() })

    setData({
      name: '',
      email: '',
      phone: '',
      enquiry: '',
    })
  }

  const save = useAsyncTask(submitFormData)
  const classes = useStyles()
  const { isDeviceSm } = MediaQuery()

  return (
    <Box
      pt={5}
      pb={5}
      style={{
        fontFamily: `'Poppins', sans-serif`,
        background:
          'linear-gradient(29deg, rgba(72,2,131,1) 0%, rgba(34,1,77,1) 59%, rgba(72,2,131,1) 100%)',
        color: 'white',
      }}
      id="contact-us"
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: 1.5,
        }}
      >
        CONTACT US
      </div>
      <div
        style={{
          fontSize: 13,
          letterSpacing: 1.1,
          marginBottom: 40,
          color: 'pink',
        }}
      >
        FEEL FREE TO REACH OUT
      </div>
      <div className={classes.input}>
        <input
          className={classes.inputField}
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter Name"
          value={data.name}
          onChange={(e) =>
            setData({
              name: e.target.value,
              phone: data.phone,
              email: data.email,
              enquiry: data.enquiry,
            })
          }
        />
      </div>
      <div className={classes.input}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Id"
          id="email"
          required
          className={classes.inputField}
          value={data.email}
          onChange={(e) => {
            setData({
              name: data.name,
              phone: data.phone,
              email: e.target.value,
              enquiry: data.enquiry,
            })
          }}
        />
        <div className={classes.errorText}>{emailError}</div>
      </div>
      <div className={classes.input}>
        <input
          type="phone"
          className={classes.inputField}
          name="phone"
          id="phone"
          placeholder="Enter Phone No."
          value={data.phone}
          onChange={(e) =>
            setData({
              name: data.name,
              phone: e.target.value,
              email: data.email,
              enquiry: data.enquiry,
            })
          }
        />
        <div className={classes.errorText}>{phoneError}</div>
      </div>
      <div className={classes.input}>
        <textarea
          rows={4}
          className={classes.inputField}
          placeholder="Enquiry"
          name="enquiry"
          id="enquiry"
          value={data.enquiry}
          onChange={(e) =>
            setData({
              name: data.name,
              phone: data.phone,
              email: data.email,
              enquiry: e.target.value,
            })
          }
        />
      </div>

      <div>
        <button
          disabled={
            !(
              emailError === '' &&
              phoneError === '' &&
              data.phone.length !== 0 &&
              data.email.length !== 0
            )
          }
          style={{
            borderRadius: 20,
            padding: 7,
            paddingLeft: 30,
            paddingRight: 30,
            fontSize: 13,
            letterSpacing: 0.6,
            fontFamily: `'Poppins', sans-serif `,
            textTransform: 'capitalize',
            border: 'none',
          }}
          onClick={() => {
            save.run({})
          }}
        >
          Send Message
        </button>
      </div>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorText: {
      fontSize: 12,
    },
    inputField: {
      padding: 15,
      fontFamily: `'Poppins', sans-serif`,
      fontSize: 12,
      border: 'none',
      borderRadius: 5,
      width: '40%',
    },
    input: {
      marginBottom: '2%',
    },
  })
)

export default ContactForm
