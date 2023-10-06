import { Worker, Viewer, ScrollMode } from '@react-pdf-viewer/core';

const PDFViewer = ({ fileUrl }) => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl={fileUrl}
          defaultScale={1}
          scrollMode={ScrollMode.Vertical}
          defaultPage={0}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
