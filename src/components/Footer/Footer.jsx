import React from 'react'
import { Container, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import useStyles from './styles'
const Footer = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <a href='https://www.facebook.com/bart.tabusao.15' target='_blank'>
        <FacebookIcon
          color='primary'
          className={classes.icon}
          target='_blank'
        />
      </a>
      <a href='https://github.com/Bart-15/react-ai-news.git' target='_blank'>
        <GitHubIcon style={{ color: '#333' }} className={classes.icon} />
      </a>
      <a href='#'>
        <LinkedInIcon className={classes.icon} color='primary'></LinkedInIcon>
      </a>
      <Typography variant='subtitle1'>Bart Tabusao</Typography>
    </Container>
  )
}

export default Footer
