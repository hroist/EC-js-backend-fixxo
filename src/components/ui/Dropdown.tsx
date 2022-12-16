import { useState } from "react"
import { FixMeLater } from "../../models/FixMeLater"
import { IDropdown } from "../../models/uiModels"

const Dropdown = ({colors = []}:IDropdown) => {

    const [dropdown, setDropdown] = useState(false)
    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

    const [color, setColor] = useState("Choose a color")
    const chooseColor = (e:FixMeLater) => {
        setColor(e.target.innerHTML)
        setDropdown(!dropdown)
    }

    return (
        <div>
            <button data-testid="dropdown" className="dropdown sb-content" onClick={handleDropdown}><span>{color}</span><i className="fa-regular fa-chevron-down"></i></button>
            {
            dropdown ? 
            <div className="dropdown-open">
                <ul className="dropdown-list">
                    {  
                     colors.map(option => <li onClick={chooseColor} key={option} className="dropdown-option" >{option}</li>)
                    }
                </ul>
            </div> 
            :  "" }
        </div>
    )

}

export default Dropdown