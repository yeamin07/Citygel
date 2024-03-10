import PhoneInput from "react-phone-number-input";
import { useState } from "react";


const PhoneInputfunc = () => {
    const [value, setValue] = useState()
    return (
        <div
            name="phoneNumber"
            placeholder="+1"
        >
            <PhoneInput
                value={value}
                onChange={setValue}
            />
           {/* {value} */}
        </div>
    )
}

export default PhoneInputfunc