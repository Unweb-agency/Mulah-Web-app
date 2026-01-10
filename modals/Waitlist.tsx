"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

interface WaitlistProps {
  onClose: () => void;
}

const fullNameSchema = z
  .string()
  .min(1, "Full name is required")
  .max(20, "At max 20 characters are allowed");
const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .min(1, "Email is required");
const occupationSchema = z.string().min(1, "Occupation is required");

const Waitlist: React.FC<WaitlistProps> = ({ onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFullNameError, setIsFullNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isOccupationError, setIsOccupationError] = useState(false);

  useEffect(() => {
    setMounted(true);
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFullNameError(false);
    setIsEmailError(false);
    setIsOccupationError(false);
    const fullNameResult = fullNameSchema.safeParse(fullName);
    const emailResult = emailSchema.safeParse(email);
    const occupationResult = occupationSchema.safeParse(occupation);
    const errors: string[] = [];
    if (!fullNameResult.success) {
      setIsFullNameError(true);
      errors.push(
        fullNameResult.error.issues[0]?.message || "Invalid full name"
      );
    }
    if (!emailResult.success) {
      setIsEmailError(true);
      errors.push(emailResult.error.issues[0]?.message || "Invalid email");
    }

    if (!occupationResult.success) {
      setIsOccupationError(true);
      errors.push(
        occupationResult.error.issues[0]?.message || "Invalid occupation"
      );
    }

    if (errors.length > 0) {
      toast.error(errors[0]);
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      const body = new URLSearchParams({
        fullName,
        email,
        occupation,
      });
      await fetch(
        "https://script.google.com/macros/s/AKfycbx0hfbB0WzyVEHOLH0W-7MQ2OIhl1miKQ-Mhx3FasGDDK65ncG9Mn1H5TuR47HC9rKu/exec?spreadsheetId=1Zn_wMiXJuWjuI72GU8GoGLS6uc3-krlrGwgUQ2MY_hY&sheetId=0&version=1",
        {
          method: "POST",
          body: body,
          mode: "no-cors",
        }
      );

      toast.success("Successfully joined the waitlist!");
      setEmail("");
      setFullName("");
      setOccupation("");
      onClose();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <main className="fixed inset-0 w-screen h-screen bg-white/20 backdrop-blur-md flex justify-center items-center z-999 p-4 sm:px-6 md:px-8 lg:px-10">
      <form
        className="relative max-w-125 w-full flex flex-col justify-center items-center bg-[#0A0A0A] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 gap-3 shadow-3xl shadow-brandOrange"
        onSubmit={handleFormSubmit}
      >
        {/* Close button */}
        <div
          className="absolute -top-5 right-0 bg-linear-to-bl from-red-700 to-red-500 p-2 rounded-full border-white/5 cursor-pointer group"
          onClick={onClose}
        >
          <X className="text-neutral-100 h-7 w-7 animate-pulse" />
        </div>

        <div className="px-10 py-2 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/5">
          <p className="font-bold text-2xl md:text-3xl tracking-tighter bg-linear-to-r from-brandOrange to-brandBlue bg-clip-text text-transparent">
            Mülah
          </p>
        </div>

        <p className="text-gray-400 font-medium text-sm md:text-base  text-center leading-relaxed">
          Let&apos;s shape what comes next. <br />
          Join the waitlist to stay updated.
        </p>

        <div className="w-full flex flex-col gap-1.5">
          {/* Full Name */}
          <Input
            name="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (isFullNameError) setIsFullNameError(false);
            }}
            type="text"
            placeholder="Enter full name*"
            className={`mt-4.5 text-neutral-300 px-6 text-sm md:text-base lg:text-lg bg-[#2c2c2c] outline-none border-none transition-colors ${
              isFullNameError ? "ring-1 ring-red-500" : ""
            }`}
          />

          {/* Email */}
          <Input
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (isEmailError) setIsEmailError(false);
            }}
            type="email"
            placeholder="Enter your email*"
            className={`mt-4.5 text-neutral-300 px-6 text-sm md:text-base lg:text-lg bg-[#2c2c2c] outline-none border-none transition-colors ${
              isEmailError ? "ring-1 ring-red-500" : ""
            }`}
          />

          {/* Occupation */}
          <Input
            name="occupation"
            value={occupation}
            onChange={(e) => {
              setOccupation(e.target.value);
              if (isOccupationError) setIsOccupationError(false);
            }}
            type="text"
            placeholder="Enter your occupation*"
            className={`mt-4.5 text-neutral-300 px-6 text-sm md:text-base lg:text-lg bg-[#2c2c2c] outline-none border-none transition-colors ${
              isOccupationError ? "ring-1 ring-red-500" : ""
            }`}
          />
        </div>

        <Button
          disabled={isLoading}
          variant={"default"}
          type="submit"
          className="text-xs md:text-sm lg:text-lg rounded-full cursor-pointer bg-linear-to-r from-brandOrange to-brandBlue transition-all ease-in-out duration-200 hover:scale-105 mt-8 px-10 h-11"
        >
          {isLoading ? (
            <>
              Joining Waitlist
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            </>
          ) : (
            "Continue"
          )}
        </Button>
      </form>
    </main>,
    document.body
  );
};

export default Waitlist;
