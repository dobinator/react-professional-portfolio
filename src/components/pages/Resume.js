import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


function Resume() {
    const [numPages, setNumPages]= useState (null);
    const [pageNumber, setPageNumber]= useState(1);
  
    function onDocumentLoadSuccess({ numPages}){
      setNumPages(numPages); 
    }
    return (
        <div>
      <Document
        file="resume_pdf.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
      <p>Page {1} of {numPages}</p>
    </div>
  );
}

export default Resume; 
