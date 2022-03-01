import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import watches from '../assets/my_work/watches.png';
import camp_ads from '../assets/my_work/camp_ads.jpg';
import paints from '../assets/my_work/paints.jpg';
import paint2 from '../assets/my_work/paint2.jpg';
import viva_goa_magazine from '../assets/my_work/viva_goa_magazine.jpg';
import greeting_card from '../assets/my_work/greeting_card.jpg';
import rollup_stands from '../assets/my_work/rollup_stands.jpg';
import leaflet from '../assets/my_work/leaflet.jpg';
import brochure from '../assets/my_work/brochure.jpg';
import annual_reports from '../assets/my_work/annual_reports.jpg';
import mmp_designs from '../assets/my_work/mmp_designs.jpg';
import down_light from '../assets/my_work/down_light.jpg';
import packaging from '../assets/my_work/packaging.jpg';
import packaging2 from '../assets/my_work/packaging2.jpg';
import leaflet2 from '../assets/my_work/leaflet2.jpg';
import leaflet3 from '../assets/my_work/packaging2.jpg';
import booklet from '../assets/my_work/booklet.jpg';
import booklet2 from '../assets/my_work/booklet2.jpg';
import catalogue from '../assets/my_work/catalogue.jpg';
import website from '../assets/my_work/website.jpg';
import website_banner from '../assets/my_work/website_banner.jpg';
import website_banner2 from '../assets/my_work/website_banner2.jpg';





import '../assets/styles/my_work.css';

const myWorkList = [
  { image: watches, title: 'Advertisements For Magazines - Seiko Watches UNICOM GRAPHICS WLL , Bahrain' },
  { image: camp_ads, title: 'Promotional Campaigns & Advertisements UNICOM GRAPHICS WLL, Bahrain' },
  { image: paints, title: 'Leaflet and Brochures for Berger Paints UNICOM GRAPHICS WLL, Bahrain' },
  { image: paint2, title: 'Hoardings for Berger Paints UNICOM GRAPHICS WLL, Bahrain' },
  { image: viva_goa_magazine, title: 'Viva Goa Magazine, Goa, India Goa\'s Finest Lifestyle Magazine' },
  { image: greeting_card, title: 'Greeting Cards UNICOM GRAPHICS WLL, Bahrain' },
  { image: rollup_stands, title: 'Rollup Stands UNICOM GRAPHICS WLL , Bahrain | Prontaprint Hounslow London UK' },
  { image: leaflet, title: 'Leaflet & Flyers Prontaprint Hounslow London UK' },
  { image: brochure, title: 'Single & Two Folded Brochures UNICOM GRAPHICS WLL, Bahrain' },
  { image: annual_reports, title: 'Annual Reports UNICOM GRAPHICS WLL, Bahrain' },
  { image: mmp_designs, title: 'Brochures & leaflets Minuteman Press Wembley, London UK' },
  { image: down_light, title: 'Ican75 Fire Rated Downlight Editing Products Photographs, Concept, Logos design, Layout design..' },
  { image: packaging, title: 'Packaging Design for ICAN 65 & ICAN 75 Editing Products Photographs, Concept, Logos design, Layout design, checking final proof images, sizes, colours & final print production' },
  { image: packaging2, title: 'Packaging Designs for CCT Decorative Lights Product Photography, Editing Products Photographs, Concept, Layout design checking final proof, images, sizes, barcodes, colours & final print production' },
  { image: leaflet2, title: 'Ceiling Wall Designs & A5 Leaflet Product Photography, Concept, Layout design, checking final proof, images, barcodes, sizes, colours & final print production' },
  { image: leaflet3, title: 'A5 Leaflet Designs Concept, checking final proof, images, sizes, colours & final print production' },
  { image: booklet, title: 'Brochure Designs (Mini Booklets) Editing Products Photographs, Concept, Layout design, checking final proof, images, sizes, colours & final print production' },
  { image: booklet2, title: 'Brochure Designs (Mini Booklets) Editing Products Photographs, Concept, Layout design, checking final proof, images, sizes, colours & final print production' },
  { image: catalogue, title: 'Catalogue Booklet Designs & Inside Pages Created brand guidelines for this brochure in terms of fonts sizes, copy text, headlines, other supporting text, colours, Product Photography, Editing Products Photographs, Concept, Cover backside, Layout design, checking final proof, images, sizes, colours & final print production for this 250 plus pages Brochure.' },
  { image: website, title: 'Website Design Layout design, Colours, Concept and idea' },
  { image: website_banner, title: 'Website Banner designs Editing Products, Photographs, Concept and Layout design' },
  { image: website_banner2, title: 'Web Banners for All LED website Editing Products, Photographs, Concept and Layout design' }
];

class MyWork extends Component {
  render() {

    return (
      <Container maxWidth={false} className="carouselContainer">
        <Carousel 
          showIndicators={false} 
          width="50%" 
          thumbWidth={218} 
          showStatus={false} 
          // renderArrowPrev={(clickHandler: () => void, hasPrev: boolean, label: string) => <ArrowBackIosIcon sx={{ color: 'orange', cursor:'pointer' }} fontSize="large" onClick={clickHandler}/>}
          // renderArrowNext={(clickHandler: () => void, hasPrev: boolean, label: string) => <ArrowForwardIosIcon sx={{ color: 'orange', cursor:'pointer' }} fontSize="large" onClick={clickHandler}/>}
          
          >
          {myWorkList.map((item) => (
            <div>
              <img src={item.image} />
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'start' }} className="legend">
                <Typography variant="h5" component="div" sx={{ fontWeight: 'light', fontSize: "14px", textAlign: "left", width: '100%' }} >
                  {item.title}
                </Typography>
                <IconButton sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'end' }} >
                  <ThumbUpOffAltIcon sx={{ color: 'orange' }} fontSize="medium" />
                </IconButton>
              </Box>
            </div>
          ))}
        </Carousel>
      </Container>
    );
  }
};

export default MyWork;