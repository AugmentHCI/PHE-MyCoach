import React from 'react';
import Spinner from '../components/Spinner';

export default function LoadingScreen({height}) {
    return (<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:height?height:"100%",flexDirection:'column'}}> 
        <Spinner/>
        <h4 style={{color:'var(--idewe-blue)', marginTop:'1em'}}>Laden</h4> 
    </div>);
}