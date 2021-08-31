import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Resume() {
    return (
        <Document file="./images/resume.pdf">
<Page pageNumber= {1}>
    
</Page>
<Page pageNumber= {2}>
    
</Page>

        </Document>
    )
}

export default Resume; 
