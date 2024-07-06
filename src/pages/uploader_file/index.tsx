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
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import axios from "axios";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#615793",
    },
  },
});

const FileUploader = (): JSX.Element => {
  const [fileSrc, setfileSrc] = useState<File[]>([]);
  const [userPass, setPass] = useState(false);

  const onUpload_file = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfileSrc(Array.from(e.target.files || []));
  };

  const onFileUpload = () => {
    const formData = new FormData();

    Array.from(fileSrc).forEach((file) => {
      formData.append("multipartFiles", file);
    });

    axios
      .post("http://localhost:8080/main/uploadDocument", formData)
      .then((res) => {
        // file
        console.log(res);
        document.location.href = "/face";
      })
      .catch(function () {
        console.log("실패함");
        document.location.href = "/fileupload";
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
          <Box component="form" sx={{ ml: 80, mt: 10 }}>
            <div>
              <input
                accept="*"
                multiple
                type="file"
                onChange={(e) => onUpload_file(e)}
              />
              <ul>
                {fileSrc.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            </div>
          </Box>
          <Box sx={{ mt: -5, ml: 200 }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: 100, height: 31 }}
              onClick={onFileUpload}
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default FileUploader;
