import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./1.png";

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

export default function SignUpcopy() {
  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [passward, setUserPassward] = useState("");
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/login");
  };

  const handleInputUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleInputUsermail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleInputUserpassword = (e) => {
    setUserPassward(e.target.value);
  };

  const onClickSignUp = () => {
    console.log("click signup");
    console.log("Name : ", name);
    console.log("Email : ", email);
    console.log("PW : ", passward);
    console.log(userData);

    axios
      .post("http://localhost:8080/account/new", {
        name: name,
        email: email,
        password: passward,
      })
      .then(function (response) {
        if (response.data === true) {
          // 서버가 회원 가입 성공을 `true`로 반환한다고 가정합니다.
          setPopup({
            open: true,
            title: "확인",
            message: "회원 가입에 성공했습니다!",
            callback: function () {
              navigate("/login");
            },
          });
        } else {
          setPopup({
            open: true,
            title: "오류",
            message: "회원 가입에 실패했습니다. 다시 시도해주세요.",
          });
        }
      })
      .catch((err) => {
        alert("회원가입에 실패하였습니다!!");
        console.log("ERROR", err);
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
                    ml={18}
                    component="h1"
                    variant="h5"
                  >
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: 300 }}
                    required
                    autoFocus
                    type="name"
                    id="name"
                    name="name"
                    label="Name"
                    onChange={handleInputUsername}
                  />
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
                    onChange={handleInputUsermail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: 300 }}
                    required
                    autoFocus
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    onChange={handleInputUserpassword}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="secondary"
                    variant="contained"
                    fontFamily="Mark2"
                    sx={{ width: 300 }}
                    onClick={() => onClickSignUp()}
                  >
                    Create account
                  </Button>
                </Grid>
                <Grid>
                  <Box>
                    <Typography
                      ml={13}
                      mt={3}
                      fontFamily="Mark2"
                      onClick={() => {
                        navigateToSignIn();
                      }}
                    >
                      Already have an account?
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
