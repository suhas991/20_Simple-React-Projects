import LocalStorage from "./LocalStorage"
import './theme.css'

export default function LightDark() {

 const [theme,setTheme] = LocalStorage("theme","dark");
  
 const handleEvent = ()=>{
    setTheme(theme === 'light' ? 'dark' :'light');
 }
 console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <h1>Hello World..!</h1> 
            <button onClick={handleEvent}>Change Theme</button>
        </div>
        
    </div>
  )
}

