import FormInput from "../components/FormInput";
import Password from "../components/Password";

export default function Register() {
    return <main className="ml-10 md:ml-[477px] mt-24">
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

        <form className="mt-9">
            <FormInput label="Full Name" type="text"/>
            <FormInput label="Email" type="email"/>
            <FormInput label="Phone Number" type="phone"/>

            <Password label="Password" />
            <Password label="Re-enter password" />

            <input type="checkbox" className="checkbox checkbox-primary mt-2" />
            <span className="ml-3 text-lg">
                I agree to Dutiful's <span className="underline text-[#A16AE8]">terms and conditions</span>
            </span>
           
           <button className="w-1/2 bg-secondary text-white block my-8 py-7 px-20 rounded-md">
             Sign Up
           </button>
        </form>
    </main>
}