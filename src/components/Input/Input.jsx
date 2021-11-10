import { useState } from "react"
import './Input.css'

const Input = ({name, type = "text", id}) => {

    const [value, setValue] = useState("")

    return (
        <div className="input">
            <p> {name} </p>
            <input type={type} name={id} value={value} onChange={(ev) => {setValue(ev.target.value)}} required/>
        </div>
    )
}

export default Input
