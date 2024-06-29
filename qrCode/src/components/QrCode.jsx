import { useState } from "react";
import QRcode from "react-qr-code";

export default function Qrcode() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  const handleClick = () => {
    setQrcode(input);
  };

  return (
    <>
      <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <h4>QR CODE GENERATOR</h4>
        <div 
        style={{
            display:'flex',
            flexDirection: 'row',
            alignItems:' center',
            marginBottom:'10px'
        }}
        >
          <input
            type="text"
            name="qr-code"
            placeholder="Enter the value"
            onChange={(e) => setInput(e.target.value)}
            style={{
            height:'25px',
            marginRight:'10px'    
            }}      
          />
          <button
            disabled={input || input.trim() !== "" ? false : true}
            onClick={handleClick}
          >
            Generate
          </button>
        </div>

        <div>
          <QRcode id="qr-code-value" value={qrcode} size={400} bgColor="white"/>
        </div>
      </div>
    </>
  );
}
