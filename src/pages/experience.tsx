import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import '../assets/styles/common.css';


let expierenceData = [
  {
    title: 'Sr Graphic Designer, 2018 - 2020',
    subTitle: 'ALL LED Ltd., Ruislip, London',
    description: `Conceptualized and developed tactile digital/traditional marketing campaigns and content. Designed
                  and created magazine covers, product packaging, advertising
                  brochures, and data specification sheets while managing
                  photography. Produced training resources and presented
                  workshops aimed at educating
                  personnel on product launches.`,
    additionalPoints: [
      `Enhanced competitive edge by researching and forecasting industry and market trends to inform decisions.`,
      `Boosted project effectiveness by originating innovative workflows.`
    ]
  },
  {
    title: 'Graphic Designer, 2014 - 2018',
    subTitle: 'Minuteman Press Wembley | Prontaprint, London, UK',
    description: `Created marketing and advertising campaigns while communicating with clients to gain in-depth understanding of requirements while advising on relevant ideas and artwork.  Established design plan, conceptualized ideas, 
    and executed projects. Proofread, edited, and produced final design while ensuring quality, print readiness, and alignment with client specifications. Printed high quality designs.`,
    additionalPoints: [
      `Increased client business development by advancing brand awareness marketing strategies through traditional, digital and social medias.`
    ]
  },
  {
    title: 'Graphic Designer, 2011 - 2013',
    subTitle: 'VIVA GOA Lifestyle Magazine, Goa, India',
    description: `Directed graphic design function to provide brand development and consultations. Designed high quality visuals, artwork, and digital illustrations. Determined project scope, defined/managed budgets, and regulated timelines. Collaborated with key business members to craft magazine layouts.`,
    additionalPoints: [
      `Enhanced project efficiency and customer satisfaction by driving design team to meet deadlines.`,
      `Boosted company reputation by providing extensive colour management and proofreading in alignment with corporate policies and procedures.`
    ]
  },
];

const additionalExpierence = [
  'Graphic Designer, Unicom Graphics, Bahrain',
  'Graphic Designer, Imagination Print Press, Bahrain',
  'Graphic Designer, Quest Advertising, India'
]
const Experience = () => {
  return (
    <Box sx={{ width: '100%', padding: '0 90px 0 90px' }}>
      <Grid container >
        <Grid xs={12} className="grid-item">
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: "10px" }}>PROFESSIONAL EXPERIENCE</Typography>
          <Divider sx={{ backgroundColor: "orange" }} />
        </Grid>
        <Grid xs={12} className="grid-item">
          <Typography variant="body1" component="div">2021 - till present does freelancing as a Graphic Designer, Social Media Content, web banners, websites, sketches and compositions</Typography>
        </Grid>
        {expierenceData.map(item => (
          <Grid xs={12} className="grid-item">
            <Typography variant="h6" component="div" sx={{ fontWeight: 'light', fontSize: '0.9rem' }}>{item.title}</Typography>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>{item.subTitle}</Typography>
            <Typography variant="body1" component="div" sx={{ fontWeight: 'light', fontSize: '0.9rem' }}>{item.description}
              <ul>
                {item.additionalPoints.map(addPoint => (<li>{addPoint}</li>))}
              </ul>
            </Typography>
          </Grid>
        ))}
        <Grid xs={12} className="grid-item">
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>ADDITIONAL EXPIERENCE</Typography>
          {additionalExpierence.map(item => (<Typography variant="body1" component="div" sx={{ fontWeight: 'ligth', fontSize: '0.9rem', marginBottom: '10px' }}>{item}</Typography>))}
          
        </Grid>
      </Grid>
    </Box>
  )
};

export default Experience;