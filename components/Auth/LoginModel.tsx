"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const LoginModel = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li
          className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          onClick={() => setOpen(true)}
        >
          LogIN
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex items-center justify-between">
              <span>Login</span>
              <X onClick={() => setOpen(false)} className="cursor-pointer" />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form>
              <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
              <div className="mt-5">
                <label htmlFor="email">Email</label>
                <Input placeholder="Enter your Email" id="email" />
                <span className="text-red-500"></span>
              </div>
              <div className="mt-5">
                <label htmlFor="password">Password</label>
                <Input placeholder="Enter your Password" id="Password" />
                <span className="text-red-500"></span>
              </div>
              <div>
                <Button className="w-full mt-5 bg-brand">Continue</Button>
              </div>
              <h1 className="my-3 text-xl font-bold text-center">--OR--</h1>
              <Button variant={"outline"} className="w-full">
                <Image
                  src="/images/google.png"
                  alt="google-logo"
                  width={25}
                  height={25}
                  className="mr-5"
                />
                continue with Google
              </Button>
              <Button variant={"outline"} className="w-full mt-5">
                <Image
                  src="/images/github.png"
                  alt="google-logo"
                  width={25}
                  height={25}
                  className="mr-5"
                />
                continue with Github
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginModel;
