import React, { useEffect, useState } from "react";
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
import logo2 from "./2.png";
import logo3 from "./3.png";
import axios from "axios";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#615793",
    },
    primary: {
      main: "#FFF2EA",
    },
  },
});
const id = sessionStorage.getItem("user_id");

export default function Main() {
  const navigate = useNavigate();

  const navigateToUploadFile = () => {
    navigate("/fileupload");
  };

  const navigateToFilebox = () => {
    navigate("/fileinbox");
  };

  const onClickHandler = () => {
    // http://localhost:8080/login
    axios.get("https://jsonplaceholder.typicode.com/users").then(() => {
      if (id) {
        console.log(id);
        sessionStorage.removeItem("user_id");
        document.location.href = "/";
      } else {
        alert("Error");
      }
    });
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
          <Box component="form" sx={{ m: 1, ml: 110, mt: 10 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={5}>
                <Grid>
                  <Typography
                    fontFamily="Mark2"
                    ml={5}
                    component="h6"
                    variant="h4"
                  >
                    What you gonna do?
                  </Typography>

                  <Box sx={{ mt: -3, ml: 85 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ width: 50, height: 40 }}
                      onClick={() => {
                        onClickHandler();
                      }}
                    >
                      Logout
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ width: 732, height: 188 }}>
                    <Box sx={{ ml: 5, mt: 2 }}>
                      <img width={70} src={logo2} alt="logo"></img>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                      <Typography
                        fontFamily="Mark4"
                        fontWeight="bold"
                        ml={5}
                        component="h8"
                        variant="h5"
                      >
                        Upload File
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                      <Typography
                        fontFamily="Mark4"
                        ml={5}
                        component="h8"
                        variant="h7"
                      >
                        Send files using motion recognition and facial
                        recognition
                      </Typography>
                      <Box sx={{ mt: -3, ml: 80 }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{ width: 30, height: 30 }}
                          onClick={() => {
                            navigateToUploadFile();
                          }}
                        >
                          Next
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                  <br></br>
                  <Card sx={{ width: 732, height: 188 }}>
                    <Box sx={{ ml: 5, mt: 2 }}>
                      <img width={60} src={logo3} alt="logo"></img>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                      <Typography
                        fontFamily="Mark4"
                        fontWeight="bold"
                        ml={5}
                        component="h8"
                        variant="h5"
                      >
                        File inbox
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                      <Typography ml={5} component="h8" variant="h9">
                        Check the files you received
                      </Typography>
                      <Box sx={{ mt: -3, ml: 80 }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{ width: 30, height: 31 }}
                          onClick={() => {
                            navigateToFilebox();
                          }}
                        >
                          Next
                        </Button>
                      </Box>
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
