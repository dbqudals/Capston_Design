import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import logo from "./1.png";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#615793",
    },
  },
});
export default function Unity_web_failed() {
  const navigate = useNavigate();

  const navigateToUnity = () => {
    navigate("/unity'");
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
          <Box sx={{ mr: -110, mt: 15 }}>
            <Typography fontFamily="Mark2" component="h1" variant="h1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fail
              :X
              <br />
              Try anoter motion
            </Typography>
          </Box>

          <Box component="form" sx={{ m: 1, ml: 105, mt: 30 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={20}>
                <Grid item xs={12}>
                  <Button>
                    <Button
                      color="secondary"
                      variant="contained"
                      sx={{ width: 400 }}
                      onClick={() => navigateToUnity()}
                    >
                      Back
                    </Button>
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
