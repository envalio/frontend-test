import { Box, Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from './LayerCard.style'
import Card from '../assets/CardMedia.png'
import theme from '../theme'

interface Props {
  text?: string,
}

export const LayerCard = (props: Props) => {
  const classes = useStyles()
  const [state, setState] = useState(false)
  return (
    <Box
      onClick={() => setState(!state)}
      className={classes.root}
      style={state ? {border: '1px solid #177F75'} : {}}
    >
      <img src={Card} className={classes.image} />
      <FormControlLabel
        className={classes.formControl}
        control={
          <Checkbox
            sx={{ '&.Mui-checked': {color: theme.palette.primary.main} }}
            checked={state}
          />}
        label={props?.text || 'Flood zone 3'}
      />
    </Box>
  )
}
