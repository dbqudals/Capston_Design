import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/* const id = sessionStorage.getItem("user_id");

const serverAddress = "http://192.168.0.3";
const serverPort = "8080";

const headers = {
  "Access-Control-Allow-Origin": "http://192.168.0.3:8080", // 스프링 서버의 주소
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "*",
};
 */
/* axios
  .get(
    `http://${serverAddress}:${serverPort}/main/loadDocuments/{id}/showDocument`,
    { headers }
  )

  .then((response) => {
    const articles = response.data;
    console.log("목록:", articles);
  })
  .catch((error) => {
    console.error("조회 중에 에러가 발생했습니다:", error);
  }); */

export default function Viewer() {
  const [numPages, setNumPages] = useState(null); // 총 페이지수
  const [pageNumber, setPageNumber] = useState(1); // 현재 페이지
  const [pageScale, setPageScale] = useState(1); // 페이지 스케일
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    // 서버에서 파일을 가져오는 API 엔드포인트의 URL을 설정합니다. 서버 주소 넣자, 이건 임시 테스트 용
    //http://localhost:8080/main/loadDocuments/{id}/showDocument
    const apiUrl =
      /* "https://docs.google.com/document/d/1DZZ4O9Xxm17ASm8xCSQW7eu6-OiBEPO-9cFcf1mGcik/export?format=pdf&embedded=true"; */
      "https://docs.google.com/document/d/1OsLbF6UGrXa1WGiQWC6WTICD3QKAgXja0a3aoZCGEMs/export?format=pdf&embedded=true";

    axios
      .get(apiUrl, { responseType: "blob" })
      .then((response) => {
        const file = new File([response.data], "file.pdf", {
          type: "application/pdf",
        });
        const fileUrl = URL.createObjectURL(file);
        setFileUrl(fileUrl);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  return (
    <>
      {/* pdf 크기가 1280 * 720이 넘는 경우, overflow 처리 */}
      <div style={{ width: "1280px", height: "720px", overflow: "hidden" }}>
        <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            width={1280}
            height={20}
            scale={pageScale}
            pageNumber={pageNumber}
          />
        </Document>
      </div>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>

        <p>페이지 이동 버튼</p>
        <button
          onClick={() => {
            setPageNumber(
              numPages === pageNumber ? pageNumber : pageNumber + 1
            );
          }}
        >
          {" "}
          +
        </button>
        <button
          onClick={() => {
            setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
          }}
        >
          {" "}
          -
        </button>

        <p>페이지 스케일</p>
        <button
          onClick={() => {
            setPageScale(pageScale === 3 ? 3 : pageScale + 0.1);
          }}
        >
          {" "}
          +
        </button>
        <button
          onClick={() => {
            setPageScale(pageScale - 1 < 1 ? 1 : pageScale - 1);
          }}
        >
          {" "}
          -
        </button>
      </div>
    </>
  );
}
