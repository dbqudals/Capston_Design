import { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
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
});

// 모든 id가 로그인 id가 아니라 doc_id이다

const Uploader = () => {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });

  let inputRef;
  const navigate = useNavigate();
  
  const saveImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };

  const navigateToMain = () => {
    navigate("/motion1");
  };

  const deleteImage = () => {
    // createObjectURL()을 통해 생성한 기존 URL을 폐기
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: "",
      preview_URL: "",
    });
  };

  useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  const sendImageToServer = () => {
    if (image.image_file) {
      const formData = new FormData();

      formData.append("file", image.image_file);

      for (const value of formData.values()) {
        console.log(value);
      }
      axios
        .post("https://jsonplaceholder.typicode.com/users", formData)
        .then((res) => {
          setImage({
            image_file: "",
            preview_URL: "img/default_image.png",
          });
          console.log(res);
          document.location.href = "/motion1";
        })
        .catch(function () {
          console.log("실패함");
          document.location.href = "/motion1";

          /* alert("사진을 등록하세요!");
          document.location.href = "/image"; */
        });
    }
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
          <div className="uploader-wrapper">
            <input
              type="file"
              accept="image/*"
              onChange={saveImage}
              onClick={(e) => (e.target.value = null)}
              ref={(refParam) => (inputRef = refParam)}
              style={{ display: "none" }}
            />

            <Box sx={{ mt: 5, ml: 100 }}>
              <Box sx={{ ml: 50 }}>
                <div className="img-wrapper">
                  <img src={image.preview_URL} />
                </div>
              </Box>
              <Box sx={{ mt: 30, ml: 62 }}>
                <Button
                  type="primary"
                  color="secondary"
                  variant="contained"
                  onClick={() => inputRef.click()}
                >
                  Preview
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={deleteImage}
                >
                  Delete
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={sendImageToServer}
                >
                  Upload
                </Button>
              </Box>
              <Box sx={{ ml: 150 }}>
                {/* <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: 100, height: 31 }}
                  onClick={() => {
                    navigateToMain();
                  }}
                >
                  Next
                </Button> */}
              </Box>
            </Box>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Uploader;
