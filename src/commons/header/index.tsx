import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { PAGE_NAV } from '../../resources/constants';
import profile from '../../assets/profile.jpg';

function Header() {

    const location = useLocation();
    console.log(location.pathname);
    let width = 100;
    let height = 100;
    let goBack = true;
    let top = "50px";
    let fontSize = '0.9rem';
    let background = "black";
    let titleColor = "white";

    if (location.pathname === "/") {
        width = 140;
        height = 140;
        goBack = false;
        top = "70px";
        fontSize = '1.2rem';
        background = "white";
        titleColor = "black";

    }

    if(location.pathname === "/contact" || location.pathname ===  "/experience"){
        background = "white";
        titleColor = "black";
    }

    return (
        <AppBar position="static" sx={{ boxShadow: 0 }}>
            <Container maxWidth="xl" sx={{ borderBottom: "6px solid orange", background: "black" }}>
                <Toolbar disableGutters sx={{ alignItems: "flex-end" }}>
                    {goBack &&
                        <Box sx={{ flexGrow: 0, margin:"6px 30px"}}>
                            <IconButton component={Link} to="/" sx={{ p: 0 }}>
                                <HomeOutlinedIcon sx={{color:"orange"}} />
                            </IconButton>
                        </Box>
                    }

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'end' }}>
                        <nav>
                            {PAGE_NAV.map((page) => (
                                <Button sx={{ marginRight: "100px" }}>
                                    <NavLink to={page.linkTo}>
                                        <Typography textAlign="center" sx={{ color: "white" }}>{page.label}</Typography>
                                    </NavLink>
                                </Button>
                            ))}
                        </nav>
                    </Box>
                </Toolbar>
            </Container>
            <Container maxWidth="xl" sx={{ background: background }}>
                <Toolbar disableGutters sx={{ alignItems: "flex-end", padding: "0 66px 0 66px" }}>
                    <Box sx={{ flexGrow: 0, position: "relative", bottom: "40px" }}>
                        <IconButton component={Link} to="/" sx={{marginLeft:"20px"}}>
                            <Avatar alt="Effie" src={profile} sx={{ width: width, height: height, border: "6px solid white", boxShadow: "0px 0px 3px 1px #000;"}} />
                        </IconButton>
                        <Typography variant="h5" component="div" gutterBottom sx={{ color: titleColor, fontWeight: 'bold', textTransform: 'uppercase', m: 1, marginLeft: 0, fontSize: fontSize }}>Epifanio Fernandes
                        </Typography>
                        <Typography variant="subtitle1" component="div" gutterBottom sx={{ color: titleColor, fontWeight: 'light', fontSize: fontSize }}>Inspired & Visionay Graphic Designer</Typography>
                    </Box>
                    {!goBack && <Box sx={{ color: "black", p: 3, width: '20%', marginLeft: "auto" }} >
                        <Typography variant="subtitle1" component="div" gutterBottom sx={{ display: { xs: 'flex', md: 'flex' }, alignItems: "center", fontWeight: 'light', fontSize: '0.8rem' }}><EmailIcon sx={{ marginRight: "5px" }} fontSize="small" /> epifanioferns2@gmail.com</Typography>
                        <Typography variant="subtitle1" component="div" gutterBottom sx={{ fontWeight: 'light', fontSize: '0.8rem' }} ><PhoneInTalkIcon sx={{ marginRight: "5px" }} fontSize="small" /> 074-702-63595</Typography>
                        <Typography variant="subtitle1" component="div" gutterBottom sx={{ display: { xs: 'flex' }, fontWeight: 'light', fontSize: '0.8rem' }}>
                            <LocationOnIcon sx={{ marginRight: "5px" }} fontSize="small" />
                            <Typography variant="subtitle1" component="div" gutterBottom sx={{ width: '60%', fontWeight: 'light', fontSize: '0.8rem' }}> 2 Navigation Building, Station Approach, Hayes, Middlesex, UB3 4FF</Typography>
                        </Typography>
                    </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;