"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import userStore from '@/store/userStore';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const Nav = () => {
  const { data: userData, login } = userStore();
  const router = useRouter()

  const logoutAcc = useCallback(()=>{
    login(false)
  }, [login])

  const loginAcc = useCallback(()=>{
    login(true)
  }, [login])

  return (
    <div className="bg-[#0A0A0A]/50 backdrop-blur-[100px] flex justify-center">
      <div className="flex py-6 items-center max-w-[1280px] w-full">
        <Link href={"/"}>
          <Logo />
        </Link>
        <nav className={cn("flex items-center space-x-4 lg:space-x-6  ml-8")}>
          {/* <Link
                href={"/"}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </Link> */}
        </nav>

        {userData.isLogin ? (
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger className='bg-[#121212] p-2 min-w-[191px] rounded-[8px]'>
                <div className="flex items-center gap-1.5">
                  <img
                    className="rounded-full h-[32px] w-[32px] object-cover object-center"
                    src="https://placehold.co/32"
                    alt="User avatar placeholder"
                  />

                  <p className='text-xs text-white font-bold'>09x90..39hjd</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='bg-[#3B3B3B] border-none p-3 min-w-[300px]'>
                <DropdownMenuItem className='justify-center text-[#E7E7E7]' onClick={()=>router.push("/me")}>My Account</DropdownMenuItem>
                <DropdownMenuItem className='justify-center text-[#E7E7E7]' onClick={()=>router.push("/me/project")}>Funded Project</DropdownMenuItem>
                <DropdownMenuItem className='justify-center text-[#CC2727]' onClick={logoutAcc}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="ml-auto flex items-center space-x-4">
            <Button size={"custom"} className="uppercase" onClick={loginAcc}>
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
