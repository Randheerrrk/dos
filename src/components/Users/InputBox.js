import { useState } from "react"

const InputBox = ({name, type, label}) => {
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        e.preventDefault()

        setValue(e.target.value)
    }
    return (
        <div>
            <input className='form-item' type={type} name={name} placeholder={label} value={value} onChange={handleChange}/>
        </div> 
    )
}

export default InputBox