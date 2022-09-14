import React from "react";

function Header(){
  const headerStyledComponentsStyles = {
    backgroundColor: '#8128d7',
    color: '#fdfcfe',
    fontFamily: 'sans-serif',
    paddingTop: '20px',
    paddingBottom: '20px',
    textAlign: 'center'
  }
  return (
    <div style= {headerStyledComponentsStyles}>
    <h1>Help Queue</h1>
    </div>
  );
}

export default Header;