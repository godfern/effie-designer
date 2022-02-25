import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import facebook from '../assets/icons/facebook.png';
import twitter from '../assets/icons/twitter.png';
import linkedIn from '../assets/icons/linkedIn.png';
import instagram from '../assets/icons/instagram.png';
import xd_logo from '../assets/icons/xd_logo.png';
import adobe_photoshop_logo from '../assets/icons/adobe_photoshop_logo.png';
import adobe_after_effects_logo from '../assets/icons/adobe_after_effects_logo.png';
import adobe_illustrator_logo from '../assets/icons/adobe_illustrator_logo.png';
import adobe_In_design_logo from '../assets/icons/adobe_In_design_logo.png';




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const expertise = [
  "Graphic Design", "Concept Generation", "Digital & Traditional Marketing", "Digital Illustration", "Colour Planning & Editing",
  "Packaging Creation", "Magazine Layout", "Stakeholder Engagement", "Project Management", "Great Sketching & Illustration Skills",
  "Web Designs", "Social Media"];

const expertiseTools = [
  { label: "Adobe Photoshop CC", score: 90 },
  { label: "Adobe Illustrator CC", score: 70 },
  { label: "Adobe InDesign CC", score: 85 },
  { label: "Adobe XD", score: 50 },
  { label: "Canva Pro", score: 75 },
  { label: "Adobe After Effects CC", score: 20 }
];

const expertiseToolIcons = [
  { url: adobe_photoshop_logo, title: 'xd_logo' },
  { url: adobe_illustrator_logo, title: 'adobe_photoshop_logo' },
  { url: adobe_In_design_logo, title: 'adobe_after_effects_logo' },
  { url: xd_logo, title: 'adobe_illustrator_logo' },
  { url: adobe_after_effects_logo, title: 'adobe_In_design_logo' }
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 1,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: '#000',
  },
}));

const Home = () => {
  return (
    <Box sx={{ width: '100%', padding: '0 90px 0 90px' }}>
      <Grid container>
        <Grid xs={3}>
          <Box>
            <Link href="#" sx={{ marginLeft: '5px' }}><Box component="img" sx={{ height: 24, width: 24 }} alt="instagram" src={facebook} /></Link>
            <Link href="#" sx={{ marginLeft: '5px' }}><Box component="img" sx={{ height: 24, width: 24 }} alt="instagram" src={linkedIn} /></Link>
            <Link href="#" sx={{ marginLeft: '5px' }}><Box component="img" sx={{ height: 24, width: 24 }} alt="instagram" src={twitter} /></Link>
            <Link href="#" sx={{ marginLeft: '5px' }}><Box component="img" sx={{ height: 24, width: 24 }} alt="instagram" src={instagram} /></Link>
          </Box>
        </Grid>
        <Grid xs={9}>
          <Typography variant="body1" component="div" sx={{ fontSize: '0.9rem', fontWeight: 'light' }}>
            <Box sx={{ textAlign: 'left', marginBottom: '15px' }}>
              Creative and innovative graphic designer with 15+ years’ experience
              delivering high quality designs and traditional/digital marketing materials
              in several industries. Adept at creating inspiring designs, illustrations, and
              artwork by integrating fresh and pioneering ideas. Ability to leverage in-
              depth knowledge and understanding of digital principles/implementation
              and print/production procedures to bolster campaign success. Propensity
              to develop extensive briefs and align end results with client
              specifications. Proficient at utilizing Adobe Creative Suites like InDesign,
              Photoshop, Illustrator, Adobe XD, Canva, Coral Suite, OFFICE 365, and
              Word Press.
            </Box>
            <Box sx={{ textAlign: 'left', marginBottom: '15px', fontWeight: 'light' }}>
              Design is not just about making something look good it is a powerful tool
              of communication and is a major influence to the success of the project
              and in turn makes customers happier.
            </Box>
            <Box sx={{ textAlign: 'left', fontWeight: 'light' }}>
              This is more than just a job for me, Its my passion...its my craft I take
              great joy in what I do, I love to solve problems make improvements in the
              designs, that are intuitive simple to use and deliver, satisfy the
              customers, I have always believed that this is the key to every successful
              business.
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: '50px' }}>
        <Grid xs={3}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>EDUCATION</Typography>
          <Typography variant="body1" gutterBottom sx={{ fontWeight: 'light', fontSize: '0.9rem', width: '34%' }}>
            Bachelor’s in Fine Arts
            University of Goa,
            Goa, India
          </Typography>
        </Grid>
        <Grid xs={9}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
              AREAS OF EXPERTISE
            </Typography>
            <List>
              {expertise.map(item =>
                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'light', fontSize: '0.9rem' }}>{item}</Typography>
              )}
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: '50px' }}>
        <Grid xs={3}>
          <ImageList sx={{ width: 35 }} cols={1} rowHeight={35}>
            {expertiseToolIcons.map((item) => (
              <ImageListItem key={item.url}>
                <img
                  src={item.url}
                  srcSet={item.url}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid xs={9}>
          <Grid >
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
              AREAS OF EXPERTISE
            </Typography>
            <List>
              {expertiseTools.map(item =>
                <ListItem disablePadding>
                  <Typography variant="body1" gutterBottom sx={{ width: '22%', fontWeight: 'light', fontSize: '0.9rem' }}>{item.label}</Typography>
                  <BorderLinearProgress variant="determinate" value={item.score} sx={{ width: '35%', marginLeft: '10px' }} />
                </ListItem>
              )}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
};

export default Home;