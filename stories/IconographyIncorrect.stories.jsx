import React from 'react';
import '../src/components/iconography/iconography-incorrect.scss';

export default {
  title: 'WMATA/Iconography/Incorrect Usage'
};

const Bus = ({color="#4C3B2A", outline=false, bg=null}) => (
  <div style={{
    width:120,
    height:120,
    borderRadius:12,
    background:bg,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }}>
    <svg width="80" height="80" viewBox="0 0 100 100">
      <rect x="20" y="20" width="60" height="60" rx="12"
        fill={outline ? "none" : color}
        stroke={outline ? color : "none"}
        strokeWidth="6"
      />
      <rect x="30" y="30" width="40" height="10" fill={outline ? "none" : "white"} />
      <rect x="30" y="45" width="40" height="20" fill={outline ? "none" : "white"} />
    </svg>
  </div>
);

export const Playground = () => (
  <div className="wmata-icon-incorrect">

    <h2>Incorrect Usage</h2>

    <div className="wmata-incorrect-grid">

      {/* Wrong color */}
      <div className="wmata-incorrect-box">
        <Bus color="#00CFFF" />
        <div className="wmata-slash"></div>
      </div>

      {/* Inside a shape */}
      <div className="wmata-incorrect-box">
        <Bus bg="#4C3B2A" color="#FFFFFF" />
        <div className="wmata-slash"></div>
      </div>

      {/* Outlined icon */}
      <div className="wmata-incorrect-box">
        <Bus outline={true}/>
        <div className="wmata-slash"></div>
      </div>

      {/* Unapproved bus */}
      <div className="wmata-incorrect-box">
        <Bus color="#000"/>
        <div className="wmata-slash"></div>
      </div>

      {/* As graphic decoration */}
      <div className="wmata-incorrect-box">
        <img src="" alt="" style={{width:'100%',height:'100%',background:'#ead8cc'}}/>
        <div className="wmata-slash"></div>
      </div>

      {/* Showing unavailable services */}
      <div className="wmata-incorrect-box">
        <Bus/>
        <div className="wmata-slash"></div>
      </div>

    </div>

  </div>
);

Playground.storyName = "Iconography – Incorrect Usage";
