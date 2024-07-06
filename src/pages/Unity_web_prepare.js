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
import { Unity, useUnityContext } from "react-unity-webgl";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Webcam from "react-webcam";
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

function Unity_web() {
  const [step1Complete, setStep1Complete] = useState(false);
  const [step2Complete, setStep2Complete] = useState(false);
  const [step3Complete, setStep3Complete] = useState(false);
  /*  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false); */

  /* const [data, setData] = useState("");
  const action = [1, 2, 3];
  const id = 123;

  useEffect(() => {
    axios
      // 내 생각에는 id 값이랑 Action을 한번 보내줘야할꺼 같아
      .get(`/main/uploadDocument/setImagePassword`)
      .then((response) => {
        const dynamicData = response.data; // 서버에서 받아온 동적인 데이터
        setData(dynamicData); // 상태 업데이트
      })
      .catch((error) => {
        console.error("조회 중에 에러가 발생했습니다:", error);
      });
  }, []); */

  const {
    unityProvider,
    sendMessage,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "Build/Webgl1_build.loader.js",
    dataUrl: "Build/Webgl1_build.data",
    frameworkUrl: "Build/Webgl1_build.framework.js",
    codeUrl: "Build/Webgl1_build.wasm",
  });

  useEffect(() => {
    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);

  /* const onClicktrain = () => {
    setShowButton1(true);
  };

  const onClicktrain1 = () => {
    setShowButton2(true);
  };

  const onClicktrain2 = () => {
    setShowButton3(true);
  };

  const onClicktrain3 = () => {}; */

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // 실행할 코드 작성
      console.log("useEffect 실행됨");
      // http://localhost:8080/main/uploadDocument/{id}/setMotionPassword
      // 세션에 아이디 값을 넣어서 보내주면 됨
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          const motionConfig = response.data;
          const a = motionConfig[3].completed;
          const b = motionConfig[2].completed;

          setStep1Complete(b);
          setStep2Complete(a);
          setStep3Complete(a);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 2000); // 4초(4000ms) 지연

    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (step1Complete) {
        sendMessage("Kids", "dance1");
        console.log("1번모션" + step1Complete);
      } else {
        alert("모션 인식에 실패했습니다.");
        document.location.href = "/failed";
      }
    }, 31000); // 1000초가 1초
    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, [step1Complete]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (step2Complete) {
        sendMessage("Kids", "dance2");
        console.log("2번모션" + step2Complete);
      }
    }, 40000);

    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, [step2Complete]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (step3Complete) {
        sendMessage("Kids", "dance3");
        console.log("3번모션" + step3Complete);
      }
    }, 50000);
    const timeoutId1 = setTimeout(() => {
      if (step3Complete) {
        document.location.href = "/main";
      }
    }, 60000);
    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
      clearTimeout(timeoutId1);
    };
  }, [step3Complete]);

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

          <Box sx={{ width: 1000, height: 600, mr: -10 }}>
            <Unity
              style={{
                width: "100%",
                height: "100%",
              }}
              unityProvider={unityProvider}
            />
          </Box>
        </Box>
        <Box sx={{ ml: 50, mt: -70 }}>
          <Webcam />
        </Box>
        <Box sx={{ ml: -70, mt: 20 }}>
          {/*  <Button
            variant="contained"
            color="secondary"
            sx={{ width: 100, height: 40 }}
            onClick={onClicktrain}
          >
            Ready
          </Button>
          &nbsp;
          {showButton1 && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: 100, height: 40 }}
              onClick={onClicktrain1}
            >
              Motion1
            </Button>
          )}
          &nbsp;
          {showButton2 && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: 100, height: 40 }}
              onClick={onClicktrain2}
            >
              Motion2
            </Button>
          )}
          &nbsp;
          {showButton3 && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: 100, height: 40 }}
              onClick={onClicktrain3}
            >
              Motion3
            </Button>
          )} */}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Unity_web;
