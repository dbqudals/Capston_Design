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
import motion1 from "./motion1.png";
import motion2 from "./motion2.png";
import motion3 from "./motion3.png";
import motion4 from "./motion4.png";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#615793",
    },
    primary: {
      main: "#FFB01D",
    },
    error: {
      main: "#8E8EA9",
    },
  },
  typography: {
    fontFamily: "Mark2",
    src: "./fonts/DMSans-Medium.ttf",
  },
});

export default function Unity_Motion() {
  const navigate = useNavigate();

  const navigateToUnity = () => {
    navigate("/unity");
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
          <Box component="form" sx={{ m: 1, ml: 60, mt: 10 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={5}>
                <Card sx={{ width: 400, height: 250 }}>
                  <Box sx={{ mt: 1, ml: 12 }}>
                    <Typography
                      fontFamily="Mark4"
                      fontWeight="bold"
                      color="error"
                      ml={5}
                      component="h8"
                      variant="h7"
                    >
                      Show Me Exactly
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1, ml: 16 }}>
                    <Typography
                      fontFamily="Mark4"
                      fontWeight="bold"
                      color="primary"
                      ml={5}
                      component="h8"
                      variant="h7"
                    >
                      Motion 1
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 9, mt: 2 }}>
                    <img width={250} src={motion1} alt="logo"></img>
                  </Box>
                </Card>

                <Card sx={{ width: 400, height: 250, mt: 5, ml: 28 }}>
                  <Box sx={{ mt: 1, ml: 12 }}>
                    <Typography
                      fontFamily="Mark4"
                      fontWeight="bold"
                      color="error"
                      ml={5}
                      component="h8"
                      variant="h7"
                    >
                      Show me Exactly
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1, ml: 15 }}>
                    <Typography
                      fontFamily="Mark4"
                      fontWeight="bold"
                      color="primary"
                      ml={5}
                      component="h8"
                      variant="h7"
                    >
                      Motion 3
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 9, mt: 2 }}>
                    <img width={250} src={motion3} alt="logo"></img>
                  </Box>
                </Card>
              </Grid>
            </FormControl>
          </Box>

          <Box component="form" sx={{ m: 1, ml: 130, mt: -68.5 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid>
                <Card sx={{ width: 400, height: 250 }}>
                  <Box sx={{ mt: 1, ml: 12 }}>
                    <Typography
                      fontFamily="Mark4"
                      fontWeight="bold"
                      color="error"
                      ml={5}
                      component="h8"
                      variant="h7"
                    >
                      Show me Exactly
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1, ml: 16 }}>
                    <Typography
                      fontFamily="Mark4"
                      fontWeight="bold"
                      color="primary"
                      ml={5}
                      component="h8"
                      variant="h7"
                    >
                      Motion 2
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 9, mt: 2 }}>
                    <img width={250} src={motion2} alt="logo"></img>
                  </Box>
                </Card>
              </Grid>
            </FormControl>
          </Box>
          <Box sx={{ mt: 30, ml: 200 }}>
            <Button
              variant="contained"
              color="secondary"
              fontFamily="Mark2"
              sx={{ width: 100, height: 31 }}
              onClick={() => {
                navigateToUnity();
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
