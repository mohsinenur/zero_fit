import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCardTitle, CCardText } from '@coreui/react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import '../../../src/assets/css/quote.css'

const config = {
  quotesApiUrl: 'https://type.fit/api/quotes',
}

const Dashboard = () => {
  const [quote, setQuote] = useState([])

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    fetch(config.quotesApiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length)
          const randomQuote = data[randomIndex]
          randomQuote.author = randomQuote.author.replace(', type.fit', '')
          setQuote(randomQuote)
        }
      })
      .catch((error) => {
        console.error('Error fetching quote:', error.message)
      })
  }

  return (
    <>
      <CCard className="text-center mb-4 quote-card">
        <CCardHeader className="quote-header">Quote Of The Day</CCardHeader>
        <CCardBody>
          <CCardTitle className="quote-text">{quote['text']}</CCardTitle>
          <CCardText className="quote-author">{quote['author']}</CCardText>
        </CCardBody>
      </CCard>
      <WidgetsDropdown />
    </>
  )
}

export default Dashboard
