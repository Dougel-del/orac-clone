"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const AppConnectButton = () => {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
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
                    <button
                      onClick={openConnectModal}
                      className="p-[10px] bg-white text-[14px] w-full uppercase h-[45px]"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <div className="text-sm font-bold">Connect Wallet</div>
                      </div>
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal}>Wrong network</button>
                  );
                }

                return (
                  <div className="flex items-center gap-2">
                    <button onClick={openAccountModal}>
                      <div className="p-[10px] bg-white text-[14px] w-full uppercase h-[45px] font-bold">
                        <div>
                          <div
                            className="border "
                            style={{
                              background: chain.iconBackground,
                              width: 24,
                              height: 24,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          ></div>
                        </div>
                        {account.displayBalance && (
                          <div>{account.displayBalance} </div>
                        )}

                        <span className={"lowercase"}>
                          {account.displayName}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};
