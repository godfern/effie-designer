import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Container maxWidth={false} >
      <Box sx={{ color: "black", p: 3, width: '20%', marginLeft: '42px', padding: '0 24px;'}} >
        <Typography variant="body1" component="div" gutterBottom sx={{ display: { xs: 'flex', md: 'flex' }, alignItems: "center", fontWeight: 'light', fontSize: '0.9rem' }}>
          <EmailIcon sx={{ marginRight: "5px", color:'orange' }} fontSize="small" /> epifanioferns2@gmail.com</Typography>
        <Typography variant="body1" component="div" gutterBottom sx={{ fontWeight: 'light', fontSize: '0.9rem' }}>
          <PhoneInTalkIcon sx={{ marginRight: "5px", color:'orange' }} fontSize="small" /> 074-702-63595</Typography>
        <Typography variant="body1" component="div" gutterBottom sx={{ display: { xs: 'flex' }, fontWeight: 'light', fontSize: '0.9rem' }}>
          <LocationOnIcon sx={{ marginRight: "5px", color:'orange' }} fontSize="small" />
          <Typography variant="body1" component="div" gutterBottom sx={{ width: '62%', fontWeight: 'light', fontSize: '0.9rem' }}> 2 Navigation Building, Station Approach, Hayes, Middlesex, UB3 4FF</Typography>
        </Typography>
      </Box>
    </Container>
  )
};

export default Contact;