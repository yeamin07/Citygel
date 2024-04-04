export default function SelectField({ id, value, onChange, options, fortext, required }) {
    return (
        <select
            id={id}
            value={value}
            onChange={onChange}
            className={`mt-2 w-full p-[13px] rounded-md border border-gray-300 outline-none bg-transparent text-[15px] text-gray-700 `}
            required={required}
        >
            {required && <option value="" disabled >Select {fortext}</option>}
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}