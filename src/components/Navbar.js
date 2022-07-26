import React from 'react'


const navbarStyle={
    display: "flex",
    justifyContent: "space-around",
    alignitems: "center",
    backgroundColor: " white ",
    boxShadow: '-3px -7px 20px 20px rgb(218, 218, 218) ' ,
    height: "50px"
};
const buttonStyleAcceuil={
    backgroundColor: "blue",
    color: "white",
    border: "none",
    fontWeight: "bold",
    widht: "60px",
}
const buttonsecond={...buttonStyleAcceuil, backgroundColor: "pink"}
function CustomNavbar() {
    const user = "Syrine Kabou";
    const userInTable = user.split(" ");
    const caracterOne = userInTable[0][0];
    const caracterTwo = userInTable[1][0];
return (
    <div style={navbarStyle}>
        <button style={buttonStyleAcceuil}>Acceuil</button>
        <button style={buttonsecond}>{`${caracterOne} ${caracterTwo}`}</button>
    </div>
)
}

export default CustomNavbar