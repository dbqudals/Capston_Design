import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
  Card,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import logo from "./1.png";
import face from "./face1.png";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#8282A9",
    },
    primary: {
      main: "#FFB01D",
    },
  },
});

export default function Upload_face() {
  const navigate = useNavigate();

  const navigateToImage = () => {
    const timeoutId = setTimeout(() => {
      navigate("/motion1");
    }, 20000); //2분
    return () => {
      clearTimeout(timeoutId);
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            marginLeft: -90,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 1, mt: -5 }}>
            <img width={100} src={logo} alt="logo"></img>
          </Box>
          <Box component="form" sx={{ m: 1, ml: 100, mt: 10 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={5}>
                <Grid>
                  <Box sx={{ ml: 38 }}>
                    <Typography fontFamily="Mark2" component="h4" variant="h4">
                      Face Upload
                    </Typography>
                    <br />
                  </Box>
                </Grid>

                <Grid>
                  <Card sx={{ width: 800, height: 400, mt: 10 }}>
                    <Box sx={{ mt: 7, ml: 15 }}>
                      <Typography
                        color="secondary"
                        ml={28}
                        component="h8"
                        variant="h6"
                        fontFamily="Mark4"
                      >
                        Go to App
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 2, mb: 5, ml: 12 }}>
                      <Typography
                        font-fontWeight="bold"
                        color="primary"
                        ml={23}
                        component="h4"
                        variant="h5"
                        fontFamily="Mark4"
                        fontWeight="bold"
                      >
                        Upload Face Picture
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 26, mt: -4 }}>
                      <img
                        onClick={() => {
                          navigateToImage();
                        }}
                        width={600}
                        src={face}
                        alt="logo"
                      ></img>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
