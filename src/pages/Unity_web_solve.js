import React, { useState, useEffect } from "react";
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
import logo from "./1.png";
import Webcam from "react-webcam";
import axios from "axios";
const id = 123;

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
//const id = sessionStorage.getItem('user_id');
// id 값 어떻게 받을꺼니?
// html에서는 <form th:action="@{/main/uploadDocument/{id}/setImagePassword(id=${id})}" method="post" enctype="multipart/form-data">
/* axios
  .get(`/main/loadDocuments/${id}/unlockMotionPassword`)

  .then((response) => {
    const articles = response.data;
    console.log("목록:", articles);
  })
  .catch((error) => {
    console.error("조회 중에 에러가 발생했습니다:", error);
  }); */

function Unity_web_solve() {
  const [step1Complete, setStep1Complete] = useState(false);
  const [step2Complete, setStep2Complete] = useState(false);
  const [step3Complete, setStep3Complete] = useState(false);

  const {
    unityProvider,
    sendMessage,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "Build/Webgl2_build.loader.js",
    dataUrl: "Build/Webgl2_build.data",
    frameworkUrl: "Build/Webgl2_build.framework.js",
    codeUrl: "Build/Webgl2_build.wasm",
  });

  useEffect(() => {
    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // 실행할 코드 작성
      console.log("useEffect 실행됨");
      //http://localhost:8080/main/loadDocuments/{id}/unlockMotionPassword
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          const motionConfig = response.data;
          const a = motionConfig[3].completed; // 테스트 T 나중에 바꿀땐 모션 3개 변수로
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
      if (!step1Complete) {
        alert("모션 인식에 실패했습니다");
        document.location.href = "/failed''";
      }
    }, 31000);
    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, [step1Complete]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (step1Complete) {
        sendMessage("Kids", "open1");
        console.log("1번모션" + step1Complete);
      }
    }, 50000);
    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, [step1Complete]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (step2Complete) {
        sendMessage("Kids", "open2");
        console.log("2번모션" + step2Complete);
      }
    }, 60000);
    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, [step2Complete]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (step3Complete) {
        sendMessage("Kids", "open3");
        console.log("3번모션" + step3Complete);
      }
    }, 75000);
    const timeoutId1 = setTimeout(() => {
      if (step3Complete) {
        document.location.href = "/docspdf";
      }
    }, 80000);
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
      </Container>
    </ThemeProvider>
  );
}

export default Unity_web_solve;
