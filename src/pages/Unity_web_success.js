import React, { useState, useEffect } from "react";
import axios from "axios";
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

// 통신으로 구현해놔야함
/* const Infoget = async (userInfo) => {
  try {
    await axios
      .get(`/main/loadDocuments/${id}/unlockImagePassword`, userInfo)
      .then(() => {
        const articles = userInfo.data;
        console.log("목록:", articles);
      });
  } catch (error) {
    console.log(error);
  }
}; */

export default function Unity_web_success() {
  const [imgComplete, setimgComplete] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("useEffect 실행됨");
      ///http://localhost:8080/main/loadDocuments/{id}/unlockImagePassword
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          const imgConfig = response.data;
          const a = imgConfig[3].completed; // 테스트 T 나중에 실제 주소
          setimgComplete(a);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 60000); // 2분

    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, []);

  /* useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      if (imgComplete) {
        document.location.href = "/solve";
      }
    }, 4000);
    return () => {
      clearTimeout(timeoutId1);
    };
  }, [imgComplete]); */

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
              Go To APP
              <br />
            </Typography>
          </Box>
          <Box component="form" sx={{ m: 1, ml: 100, mt: 30 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={20}></Grid>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
