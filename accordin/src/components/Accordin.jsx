import { useState } from "react";
import data from "./data";
import "./accordin.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multi, setMultiple] = useState([]);

  const handleSingle = (currId) =>
    setSelected(currId === selected ? null : currId);

  const handleMulti = (currId) => {
    
    let cpyMultiple = [...multi];
    const findId = cpyMultiple.indexOf(currId);
    
    if(findId === -1){
    cpyMultiple.push(currId);
    }else{
    cpyMultiple.splice(findId,1);  
    }
    console.log(cpyMultiple);
    setMultiple(cpyMultiple);
  };

  return (
    <div className="acc-wrapper">
      <button
        onClick={() => {
          setEnable(!enable);
        }}
      >
        Enable Multi-Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div className="item">
                <div
                  onClick={
                    enable
                      ? () => handleMulti(item.id)
                      : () => handleSingle(item.id)
                  }
                  className="title"
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                <div>
                  {selected == item.id || multi.indexOf(item.id)!== -1? (
                    <div className="content">{item.answer}</div>
                  ) : null}
                </div>
              </div>
            );
          })
        ) : (
          <div>data not found..!</div>
        )}
      </div>
      <div></div>
    </div>
  );
}
