"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useRouter } from 'next/navigation';

export function ConnectWalletButton() {
  const router = useRouter()

  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <Button
                      size={"custom"}
                      className="uppercase"
                      onClick={openConnectModal}
                    >
                      Connect Wallet
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className="ml-auto flex items-center justify-between gap-1.5">
                    {chain.iconUrl && (
                      <img
                        alt={chain.name ?? "Chain icon"}
                        src={chain.iconUrl}
                        className="rounded-full h-[32px] w-[32px] object-cover object-center cursor-pointer"
                        onClick={openChainModal}
                      />
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger className='bg-[#5B5B5B] px-3 py-2 min-w-[191px] rounded-[8px]'>
                        <p className='text-sm text-white font-bold pl-2'>{account.displayName}</p>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end' className='bg-[#3B3B3B] border-none p-3 min-w-[300px]'>
                        <DropdownMenuItem className='justify-center text-[#E7E7E7] cursor-pointer' onClick={()=>router.push("/me")}>My Account</DropdownMenuItem>
                        <DropdownMenuItem className='justify-center text-[#E7E7E7] cursor-pointer' onClick={()=>router.push("/me/project")}>Funded Project</DropdownMenuItem>
                        <DropdownMenuItem className='justify-center text-[#CC2727] cursor-pointer' onClick={openAccountModal}>Logout</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
}
