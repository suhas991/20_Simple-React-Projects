import { useState, useEffect } from "react";

export default function LocalStorage(key, defaultVal) {
  const [value, setValue] = useState(() => {
    let currVal;

    try {
      currVal = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      console.log(error);
      currVal = defaultVal;
    }

    return currVal;
  });

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value));
  },[key,value]);

  return [value,setValue];
}
