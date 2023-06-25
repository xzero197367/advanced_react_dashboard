import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material';
import { tokens } from './../../theme';
import Header from '../../components/Header';

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)




  return (
    <Box m="20px">
      
      <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

      <Accordion defaultExpanded>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Asperiores vero dolores blanditiis dicta veritatis laboriosam, e
             st corrupti explicabo mollitia tenetur provident fugiat. Voluptates 
             sint dolor reprehenderit rem voluptatem ex explicabo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Asperiores vero dolores blanditiis dicta veritatis laboriosam, e
             st corrupti explicabo mollitia tenetur provident fugiat. Voluptates 
             sint dolor reprehenderit rem voluptatem ex explicabo.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion defaultExpanded>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Asperiores vero dolores blanditiis dicta veritatis laboriosam, e
             st corrupti explicabo mollitia tenetur provident fugiat. Voluptates 
             sint dolor reprehenderit rem voluptatem ex explicabo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Asperiores vero dolores blanditiis dicta veritatis laboriosam, e
             st corrupti explicabo mollitia tenetur provident fugiat. Voluptates 
             sint dolor reprehenderit rem voluptatem ex explicabo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Asperiores vero dolores blanditiis dicta veritatis laboriosam, e
             st corrupti explicabo mollitia tenetur provident fugiat. Voluptates 
             sint dolor reprehenderit rem voluptatem ex explicabo.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}

export default FAQ