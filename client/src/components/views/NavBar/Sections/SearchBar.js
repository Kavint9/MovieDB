import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem",
  display: "block", marginTop: "1em", marginBottom: "1em", marginLeft: "0", marginRight: "0", paddingLeft: "40px"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar