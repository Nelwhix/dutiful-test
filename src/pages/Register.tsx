import FormInput from "../components/FormInput";
import Password from "../components/Password";
import { FormEvent, useState } from "react"
import Progress from "../components/Progress";
import { useAppDispatch, useAppSelector } from "../hooks";
import { 
    start, 
    stop
} from '../stores/index'
import HTTPClient from "../httpClient";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";

export default function Register() {
    const isAnimating = useAppSelector(state => state.loader.isAnimating)
    const key = useAppSelector(state => state.loader.key)
    const dispatch = useAppDispatch()
    const [type, setType ] = useState("")
    const [message, setMessage] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const signUp = async (ev: FormEvent) => {
        ev.preventDefault()
        dispatch(start())

        const form = new FormData(ev.target as HTMLFormElement)

        try {
            const res =  await HTTPClient.post("/auth/register", {
                name: form.get('Full Name'),
                email: form.get('Email'),
                phone: form.get('Phone Number'),
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
        <p>Sign up for free!</p>
        <h1 className="text-primary text-3xl font-semibold">Get Started</h1>

        <div className="mt-9 flex justify-between md:w-1/2">
            <button className="text-primary text-xl font-semibold p-8 border border-primary rounded-md relative">
                <img className="inline mr-7" src={"/profile.svg"} />
                Regular User

                <img className="absolute top-0 right-0 -mt-5" src={"/check.svg"} />
            </button>

            <button className="text-xl font-semibold p-8 opacity-50 border border-primary rounded-md">
                <img className="inline mr-7" src={"/store.svg"} />
                Service Provider
            </button>
        </div>

        <form onSubmit={signUp} className="mt-9">
            <Alert type={type} message={message} show={showAlert}/>
            <FormInput label="Full Name" type="text"/>
            <FormInput label="Email" type="email"/>
            <FormInput label="Phone Number" type="phone"/>

            <Password label="Password" />
            <Password label="Re-enter password" />

            <input type="checkbox" className="checkbox checkbox-primary mt-2" />
            <span className="ml-3 text-lg">
                I agree to Dutiful's <span className="underline text-[#A16AE8]">terms and conditions</span>
            </span>
           
           <button className="w-1/2 bg-secondary text-white block mt-8 py-7 px-20 rounded-md shadow-lg">
             Sign Up
           </button>
        </form>
        <p className="text-center w-1/2 text-lg mb-8 mt-2">Already have an account? <Link to="/login" className="text-[#A16AE8]">Login</Link> </p>
    </main>
}