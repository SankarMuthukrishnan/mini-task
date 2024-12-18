import { Controller } from "react-hook-form";
import Input from "./Input";

export const InputWrapper = ({ name, control, addOn = {}, loginError = {} }: any) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => {
                return <Input {...field} {...addOn} error={fieldState?.error || loginError} />
            }}
        />
    );
}
