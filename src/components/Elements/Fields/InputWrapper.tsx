import { Controller } from "react-hook-form"
import Input from "./Input"

export const InputWrapper = ({ name, control, addOn = {} }: any) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: `this is required`
            }}
            render={(opt) => {
                return <Input {...opt?.field} {...addOn} />
            }}
        />
    )
}
