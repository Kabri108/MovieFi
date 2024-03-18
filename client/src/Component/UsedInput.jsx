export const Message=({label,placeholder})=>{
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <textarea className="w-full h-40 mt-2 p-6 bg-main border-border rounded"
            placeholder={placeholder}
            ></textarea>
        </div>
    )
}

export const Input=({label,placeholder,type,bg})=>{
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <input 
            type={type}
            required
            placeholder={placeholder}
            className={`w-full mt-2 p-4 border border-border rounded text-white ${bg ? 'bg-main' :' bg-dry'} `}
            />

        </div>
    )
}
