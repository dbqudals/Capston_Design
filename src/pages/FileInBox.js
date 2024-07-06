import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
  Card,
  Checkbox,
  Radio,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import logo from "./1.png";
import logo1 from "./filebox.png";
import axios from "axios";

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

export default function FileInBox() {
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:8080/main/loadDocuments").then((res) => {
      setCheckedList(res.data);
      console.log(res);
    });
  }, []);

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };

  const onRemove = (item) => {
    setCheckedList(checkedList.filter((el) => el !== item));
  };

  // 어떤 걸 선택했는지는 걍 세션에 넣어놓았다가 나중에 쓰기
  /* const onClicksendSever = () => {
    //console.log("click sever send");
    //console.log("title : ", checkedList);

    axios
      .post("/main/loadDocuments", checkedList)
      .then((res) => {
        console.log(res);
      })
      .catch(function () {
        document.location.href = "/success";
        console.log("실패함");
        console.log(checkedList);
        document.location.href = "/fileinbox";
      });
  }; */

  /// 카드 크기 원래 800 500 인데 테스트 때문에 크기 키움
  const navigate = useNavigate();
  const navigateToPrepare = () => {
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
          <Box component="form" sx={{ m: 1, ml: 60, mt: 10 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={5}>
                <Box sx={{ ml: 50 }}>
                  <Box>
                    <Card sx={{ width: 800, height: 500 }}>
                      <Box sx={{ mt: 5 }}>
                        <Box>
                          <Typography
                            fontFamily="Mark4"
                            fontWeight="bold"
                            color="error"
                            ml={5}
                            component="h8"
                            variant="h5"
                          >
                            secomdalcom
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            fontFamily="Mark4"
                            fontWeight="bold"
                            color="primary"
                            ml={5}
                            component="h8"
                            variant="h5"
                          >
                            &nbsp;&nbsp;File Inbox
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ ml: 7, mt: 2 }}>
                        <img width={100} src={logo1} alt="logo"></img>
                      </Box>
                      <Box sx={{ ml: 30, mt: -14 }}>
                        <FormGroup>
                          {dummyList.map((item) => {
                            return (
                              <FormControlLabel
                                name="test"
                                control={<Checkbox></Checkbox>}
                                // 임시로 설정
                                label={item.content}
                                value={item.content}
                                onChange={(e) => {
                                  onCheckedElement(
                                    e.target.checked,
                                    e.target.value
                                  );
                                }}
                              />
                            );
                          })}
                          <Box sx={{ mt: -5, ml: 50 }}>
                            <Button
                              variant="contained"
                              color="secondary"
                              fontFamily="Mark2"
                              sx={{ width: 100, height: 31 }}
                              onClick={() => navigateToPrepare()}
                            >
                              Next
                            </Button>
                          </Box>

                          <Box sx={{ ml: -20, mt: 20 }}>
                            {checkedList.length === 0 && (
                              <Typography
                                fontFamily="Mark2"
                                component="h5"
                                variant="h5"
                              >
                                {"Please select the desired file."}
                              </Typography>
                            )}

                            <Box sx={{ ml: 10, mt: -15 }}></Box>
                            {checkedList.map((item) => {
                              return (
                                <Box>
                                  <Typography
                                    fontFamily="Mark2"
                                    component="h5"
                                    variant="h5"
                                  >
                                    {item}
                                  </Typography>
                                  <Typography
                                    fontFamily="Mark2"
                                    component="h5"
                                    variant="h5"
                                    onClick={() => onRemove(item)}
                                    color="secondary"
                                  >
                                    [X]
                                  </Typography>
                                </Box>
                              );
                            })}
                          </Box>
                        </FormGroup>
                      </Box>
                    </Card>
                  </Box>
                </Box>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
