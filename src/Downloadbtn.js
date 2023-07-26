import React from 'react';
import { saveAs } from 'file-saver';
const Downloadbtn = () => {
  const handleDownload = () => {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    const pdfFilePath = './cv.ben.3L.pdf';

    // Fetch the PDF file
    fetch(pdfFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        // Save the PDF file using the file-saver library
        saveAs(blob, 'downloaded_file.pdf');
      })
      .catch((error) => {
        console.error('Error fetching or downloading the PDF:', error);
      });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default Downloadbtn;
