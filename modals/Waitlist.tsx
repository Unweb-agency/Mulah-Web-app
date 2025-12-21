"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useState, useEffect } from 'react'
import { X, Loader2 } from 'lucide-react';
import { toast } from "sonner"
import { z } from "zod"

interface WaitlistProps {
  onClose: () => void;
}

const emailSchema = z.string().email("Please enter a valid email address").min(1, "Email is required");

const Waitlist: React.FC<WaitlistProps> = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handelFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsError(false);

        const result = emailSchema.safeParse(email);
        
        if (!result.success) {
            setIsError(true);
            // Use result.error.issues to access the error list safely
            const errorMessage = result.error.issues[0]?.message || "Invalid email";
            toast.error(errorMessage);
            return;
        }

        setIsLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast.success("Successfully joined the waitlist!");
            setEmail("");
            onClose();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className='fixed inset-0 w-screen h-screen bg-white/60 backdrop-blur-2xl flex justify-center items-center z-999 p-4 sm:px-6 md:px-8 lg:px-10'>
            <form
                action="/"
                method='post'
                className='relative max-w-125 w-full flex flex-col justify-center items-center bg-[#0A0A0A] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 gap-3 shadow-3xl shadow-brandOrange'
                onSubmit={handelFormSubmit}
            >

                {/* Close button */}
                <div 
                    className='absolute -top-5 right-0 bg-linear-to-bl from-red-700 to-red-500 p-2 rounded-full border-white/5 cursor-pointer group'
                    onClick={onClose}
                >
                    <X className='text-neutral-100 h-7 w-7 animate-pulse'/>
                </div>

                <div className='px-10 py-2 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/5'>
                    <p className='font-bold text-2xl md:text-3xl tracking-tighter bg-linear-to-r from-brandOrange to-brandBlue bg-clip-text text-transparent'>
                        Mülah
                    </p>
                </div>

                <p className='text-gray-400 font-medium text-sm md:text-base  text-center leading-relaxed'>
                    Let&apos;s shape what comes next. <br />
                    Join the waitlist to stay updated.
                </p>

                <Input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (isError) setIsError(false);
                    }}
                    type='email'
                    placeholder='Enter your email'
                    className={`mt-4.5 text-neutral-300 px-6 text-sm md:text-base lg:text-lg bg-[#2c2c2c] outline-none border-none transition-colors ${isError ? 'ring-1 ring-red-500' : ''}`}
                />

                <Button 
                    disabled={isLoading}
                    variant={'default'} 
                    type='submit' 
                    className='text-xs md:text-sm lg:text-lg rounded-full cursor-pointer bg-linear-to-r from-brandOrange to-brandBlue transition-all ease-in-out duration-200 hover:scale-105 mt-8 px-10 h-11'
                >
                    {isLoading ? (
                        <>
                            Joining Waitlist
                            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                        </>
                    ) : (
                        'Continue'
                    )}
                </Button>
            </form>
        </main>
    )
}

export default Waitlist