import {RiMovie2Line} from "react-icons/ri"

export const Empty=({message})=>{
    return(
        <div className="flex-colo w-full py-2 rounded border-border bg-main gap-4">
            <div className="flex-colo w-24 h-25 p-5 rounded-full bg-dry text-subMain text-4xl">
                <RiMovie2Line/>
            </div>
            <p className="text-border text-sm">{message}</p>
        </div>
    )
}