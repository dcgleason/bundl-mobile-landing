import { Worker, Viewer, ScrollMode } from '@react-pdf-viewer/core';

const PDFViewer = ({ fileUrl }) => {
  return (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
      <Viewer fileUrl={fileUrl} defaultScale={1} scrollMode={ScrollMode.Vertical} defaultPage={0} />
    </Worker>
  );
};

export default PDFViewer;