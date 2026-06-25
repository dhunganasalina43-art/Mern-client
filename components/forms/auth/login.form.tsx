"use client";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { loginSchema } from "@/schema/auth.schema";
import { TLoginInput } from "@/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";




const LoginFrom = () => {

    const { register, handleSubmit, formState: { errors, } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginSchema)
    });


    console.log(errors)

    const onSubmit = (data: TLoginInput) => {
        console.log("form data", data);
        // http post /auth/login
    };

    return (
        <div className="w-full ">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full"
            >
                {/* email input */}
                <Input
                    name="email"
                    register={register}
                    label={"Email"}
                    id="email"
                    required={true}
                    placeholder="johndoe@gmail.com"
                    type="text"
                    error={errors?.email?.message}
                />

                {/* password input */}
                <Input
                    register={register}
                    name="password"
                    label="Password"
                    placeholder="********"
                    id="password"
                    type="password"
                    required
                    error={errors?.password?.message}

                />

                {/*button */}
                <Button label="Sign In" type="submit" />
            </form>
        </div>
    );
};

export default LoginFrom;