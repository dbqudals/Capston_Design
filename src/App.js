import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./pages/Main";
import Unity_Motion from "./pages/Unity_Motion";
import Unity_web from "./pages/Unity_web_prepare";
import Unity_web_failed from "./pages/Unity_web_failed";
import Unity_web_success from "./pages/Unity_web_success";
import Upload_face from "./pages/Upload_face";

import FileInBox from "./pages/FileInBox";
import Viewer from "./pages/Viewer";
import Preparemotion from "./pages/Preparemotion";
import Unity_web_solve from "./pages/Unity_web_solve";
import FileUploader from "./pages/uploader_file";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Uploader from "./pages/Upload_img";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {}, []);

  function loginCallBack(login) {
    setIsLogin(login);
  }

  return (
    <Router>
      {/* 로그인이 되어있다면 */}
      {isLogin ? (
        <Routes>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/fileinbox" element={<FileInBox />}></Route>
          <Route path="/motion1" element={<Unity_Motion />}></Route>
          <Route path="/unity" element={<Unity_web />}></Route>

          <Route path="/success" element={<Unity_web_success />}></Route>
          <Route path="/failed" element={<Unity_web_failed />}></Route>

          <Route path="/face" element={<Upload_face />}></Route>
          <Route path="/image" element={<Uploader />}></Route>
          <Route path="/docspdf" element={<Viewer />}></Route>
          <Route path="/prepare" element={<Preparemotion />}></Route>
          <Route path="/solve" element={<Unity_web_solve />}></Route>

          <Route path="/fileupload" element={<FileUploader />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<SignIn />}></Route>
        </Routes>
      )}

      <Routes>
        <Route path="/" element={<SignIn />}></Route>
      </Routes>

      <Routes>
        <Route path="/account/new" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}
