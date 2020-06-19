import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga'

const cardClicked = link => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview('/' + link)
  }
}

const CardComp = props => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Link to={props.link}>
          <Button onClick={() => cardClicked(props.link)} variant='primary'>Take a look</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CardComp
