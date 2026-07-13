"use client";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { loginSchema } from "@/schema/auth.schema";
import { TLoginInput } from "@/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { login } from "@/api/auth.api";
import { useMutation } from '@tanstack/react-query'
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'


const LoginFrom = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors, } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginSchema)
    });

    // react query
    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            toast.success(response?.message ?? 'Login success!!')
            router.replace('/')
        },
        onError: (error) => {
            toast.error(error?.message ?? 'Login Failed!!')
        }

    })

    const onSubmit = (data: TLoginInput) => {
        mutate(data)
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
                <Button label={isPending ? 'Signing In..' : "Sign In"} type="submit" />
            </form>
        </div>
    );
};

export default LoginFrom;