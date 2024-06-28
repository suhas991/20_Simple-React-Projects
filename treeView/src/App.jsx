import './App.css'
import '../src/components/style.css'
import menus from "../src/components/data"
import MenuList from "../src/components/MenuList"

function App() {

  return (
    <>
      <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
    </>
  )
}

export default App
