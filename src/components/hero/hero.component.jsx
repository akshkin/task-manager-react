import {  Link } from 'react-router-dom'
import React from 'react'
import { Container } from "./hero.styles"
import Button from '../button/button.component'

function Hero() {
  return (
    <Container>
        <div className="hero__content">
          <h1>Making Task Management easy-breezy!!</h1>
          <Button margin="0 0 0 4em" color="white"><Link to="/auth">Start now for Free</Link></Button>
          <img alt=""/> 
        </div>
      </Container>
  )
}

export default Hero