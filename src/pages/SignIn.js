import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import logo from "./1.png";
import axios from "axios";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#615793",
    },
  },
  typography: {
    fontFamily: "Mark2",
    src: "./fonts/DMSans-Medium.ttf",
  },
});

export default function SignIn_copy() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };

  const navigateToSignUp = () => {
    navigate("/account/new");
  };

  const onClickLogin = () => {
    console.log("click login");
    console.log("Email : ", userEmail);
    console.log("PW : ", userPassword);

    axios
      .post("http://localhost:8080/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((response) => {
        const token = response.data.token;
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        props.loginCallBack(true);
        props.history.push("/main");
      })
      .catch((error) => {
        // 로그인 실패 처리
        console.error("로그인 실패:", error);
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
          <Box component="form" sx={{ m: 1, ml: 40, mt: 15 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={5} ml={50}>
                <Grid>
                  <Typography
                    fontFamily="Mark2"
                    ml={20}
                    component="h1"
                    variant="h5"
                  >
                    Login
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: 300 }}
                    required
                    autoFocus
                    type="email"
                    id="email"
                    name="email"
                    label="E-mail"
                    onChange={handleInputEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: 300 }}
                    required
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    onChange={handleInputPw}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="secondary"
                    fontFamily="Mark2"
                    variant="contained"
                    sx={{ width: 300 }}
                    onClick={() => {
                      onClickLogin();
                    }}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid>
                  <Box>
                    <Typography
                      ml={14}
                      mt={3}
                      fontFamily="Mark2"
                      onClick={() => {
                        navigateToSignUp();
                      }}
                    >
                      Sign in first from app!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
