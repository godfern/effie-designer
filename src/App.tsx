import * as React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import routes from "./routes";

import Header from "./commons/header";
import Footer from "./commons/footer";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {

  interface routeItems {
    route?: string; component?: any;
  }

  const getRoutes = (allRoutes: any[]) => {
    if (allRoutes instanceof Array) {
      return allRoutes.map((route: routeItems, key:number) => {
        if (route.route) {
          return <Route path={route.route} element={route.component} key={key}/>;
        }

        return null;
      });
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        {getRoutes(routes)}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
