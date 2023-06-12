import FormInput from "../components/FormInput";
import Password from "../components/Password";
import Progress from "../components/Progress";
import { useAppDispatch, useAppSelector } from "../hooks";
import { FormEvent, useState } from "react"
import { 
    start, 
    stop
} from '../stores/index'
import HTTPClient from "../httpClient";
import Alert from "../components/Alert";

export default function Login() {
    const isAnimating = useAppSelector(state => state.loader.isAnimating)
    const key = useAppSelector(state => state.loader.key)
    const dispatch = useAppDispatch()
    const [type, setType ] = useState("")
    const [message, setMessage] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const login = async (ev: FormEvent) => {
        ev.preventDefault()
        dispatch(start())

        const form = new FormData(ev.target as HTMLFormElement)

        try {
            const res =  await HTTPClient.post("/auth/login", {
                email: form.get('Email'),
                password: form.get('Password')
            })
            dispatch(stop())
            setShowAlert(true)
            setType("success")
            setMessage(res.message)
        } catch (err) {
            dispatch(stop())
            setShowAlert(true)
            setType("error")
            setMessage(err.message)

            setTimeout(() => {
                setShowAlert(false)
            }, 10 * 1000);
        }
    }
    
    return <main className="ml-10 md:ml-[477px] mt-24">
        <Progress isAnimating={isAnimating} key={key} />
        <p>Jump right back in</p>
        <h1 className="text-primary text-3xl font-semibold">Login</h1>

        <form onSubmit={login} className="mt-9">
            <Alert type={type} message={message} show={showAlert}/>
            <FormInput label="Email" type="email"/>
            <Password label="Password" />

            <p className="text-end text-[#A16AE8] w-1/2">Forgot Password?</p>

            <button className="w-1/2 bg-secondary text-white text-lg block my-8 py-7 px-20 rounded-md shadow-lg">
             Login
            </button>
       </form>
    </main>
}