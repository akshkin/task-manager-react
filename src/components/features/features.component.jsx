import React from 'react'
import {  Link } from "react-router-dom"
import Button from '../button/button.component';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import { Container, Card, CardContainer } from './features.styles';
import SavingsIcon from '@mui/icons-material/Savings';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import ErrorIcon from '@mui/icons-material/Error';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Features() {
const featuresArray = [
  {
    title: "Free to use",
    description: "Who doesn't want fre services!",
    icon: <SavingsIcon className="icon"/>
  },
  {
    title: "Easy to use",
    description: "It's really simple to create/edit and delete tasks."
  },
  {
    title: "Secure",
    description: "Only you can view, update and delete your tasks.",
    icon: <SafetyCheckIcon className="icon"/>
  }
]

  return (
    <Container>
        <CardContainer className='feature'>
        {featuresArray.map(feature => (
            <Card key={feature.title} elevation={3} marginBottom="1em" gutterBottom className='feature__content'>
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
        ))}       
        </CardContainer>
        <Button color="#191654"><Link to="/auth">Start now for free</Link></Button>
      </Container>
  )
}

export default Features