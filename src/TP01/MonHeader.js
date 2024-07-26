import React from "react";
import { format } from 'date-fns';

function MonHeader() {
    return (
    <div>
        <h1>Date : {format(new Date(), 'dd/MM/yyyy')}  - heure : {format(new Date(), 'kk:mm:ss')}</h1>      
    </div>
    );
}

export default MonHeader;