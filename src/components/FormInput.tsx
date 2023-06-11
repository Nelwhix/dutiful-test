
export default function FormInput({label, type}: FormControl) {
    return (
        <fieldset className="mb-3 flex flex-col">
            <label htmlFor={label} className="font-semibold text-secondary text-xl">{label}</label>
            <input type={type} className="input border border-gray-500 mt-4 md:w-1/2" id={label} name={label} />
        </fieldset>
    )
}

type FormControl = {
    label: string,
    type: string
}