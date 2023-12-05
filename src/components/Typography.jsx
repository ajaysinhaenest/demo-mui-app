import React from 'react'
import { Typography } from '@mui/material'

const Typo = () => {
  return (
    <div>
      <Typography variant='h1' >h1 hello</Typography>
      <Typography variant='h2' >h2 hello</Typography>
      <Typography variant='h3' >h3 hello</Typography>
      <Typography variant='h4' component='h1' gutterBottom >h4 hello</Typography>
      <Typography variant='h5' >h5 hello</Typography>
      <Typography variant='h6' >h6 hello</Typography>

      <Typography variant='subtitle1' >subtitle 1</Typography>
      <Typography variant='subtitle2' >subtitle 2</Typography>

      <Typography variant='body1' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum excepturi ut nesciunt maiores quae! Sed placeat molestiae cumque totam modi id magni adipisci accusantium facilis? Neque, illo! Esse, ut iure.</Typography>
      <Typography variant='body2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia enim molestias a facilis. Temporibus natus, sed nesciunt quisquam velit, consectetur quasi quibusdam unde eum necessitatibus ex voluptates. Qui, molestias mollitia?</Typography>
    </div>
  )
}

export default Typo
