import { Worker, Viewer } from '@react-pdf-viewer/core';

const PDFViewer = ({ fileUrl }) => {
    return (
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} />
      </Worker>
    );
  };

export default PDFViewer;