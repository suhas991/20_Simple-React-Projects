import MenuItem from './MenuItem'
import "./style.css"

export default function MenuList({list = []}){
    
    return <>
    <ul className="menu-list-container">
    {
    list && list.length?
    list.map((item)=> <MenuItem items={item}/>)
    :null
    }
    </ul>
    </>
}