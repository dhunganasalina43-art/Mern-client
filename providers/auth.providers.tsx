'use client'
import { getProfile } from "@/api/auth.api";
import AuthContext from "@/contexts/auth.context";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const AuthProvider = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {


    const { data, isLoading } = useQuery({
        queryFn: getProfile,
        queryKey: ['me'],
        staleTime: 5 * 60 * 1000,
        retry: false,
    })

    console.log('auth provider', data?.data?.data)

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!data?.data?.data,
                isLoading: isLoading,
                user: data?.data?.data ?? null,
                logout: () => { console.log('logged out') },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;