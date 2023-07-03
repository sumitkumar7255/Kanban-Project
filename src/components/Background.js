import React, { useState } from "react";

function BgColor(){
const [color,setColor]= useState("")
return (
    <div align ="centre">
        <div style={{ backgroundColor: color, height: "100vh" }} className="flax w-12">
        <input type= "text" value={color} onChange={(e) => setColor(e.target.value)}/>
        </div>
    </div>
)
}
export default BgColor;