import { useState, FormEvent } from "react"

export default function Password({label }: PasswordControl) {
    const [visible, setVisible ] = useState(false)

    function togglePassword(ev: FormEvent) {
        ev.preventDefault()
        setVisible(!visible)
    }

    return <div className="mb-3 flex flex-col relative md:w-1/2">
        <label htmlFor="password" className="font-semibold text-secondary text-xl">{label}</label>
        <input type={visible ? 'text' : 'password'} className="input border border-gray-500 mt-4" id={label} name={label} />
       
        <button className="eye" onClick={togglePassword}>
           <img src="/eye.svg" />
        </button>
    </div>
}

type PasswordControl = {
    label: string
}