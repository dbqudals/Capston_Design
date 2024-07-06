import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
  Card,
  Paper,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import logo from "./1.png";
import motion_prepare from "./motion_prepare.png";

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
// id는 doc id action 1,2,3
// main/uploadDocument/{id}/setMotionPassword/ready/{action}
// 레디였다가 버튼 누르면 set으로 주소 바뀜 둘다 GET
// action = first second third -> train으로 넘어가게끔
// train은 get이었다가 버튼을 누르면 post로 변경
// 'http://localhost:8080/main/uploadDocument/${id}/setMotionPassword/ready'
export default function Preparemotion() {
  const navigate = useNavigate();

  const navigateTosolve = () => {
    navigate("/solve");
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
              <Grid>
                <Card sx={{ width: 800, height: 400, mt: 10 }}>
                  <Box sx={{ mt: 5, mb: 5, ml: 20 }}>
                    <Typography
                      font-fontWeight="bold"
                      color="primary"
                      ml={23}
                      component="h4"
                      variant="h5"
                      fontFamily="Mark4"
                      fontWeight="bold"
                    >
                      Prepare Motion
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2, mb: 5, ml: 25 }}>
                    <img width={400} src={motion_prepare} alt="logo"></img>
                  </Box>
                </Card>
              </Grid>
            </FormControl>
          </Box>
          <Box sx={{ mt: -5, ml: 220 }}>
            <Button
              variant="contained"
              color="secondary"
              fontFamily="Mark2"
              sx={{ width: 100, height: 31 }}
              onClick={() => {
                navigateTosolve();
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
