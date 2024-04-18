import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className=" py-[97px] px-[51px] h-screen flex flex-col gap-7 items-center">
      <img className="w-[100px] h-[52px]" src="/icons/logo.svg" alt="logo" />
      <p className=" text-[#57a6f8] text-center text-4xl/9 font-bold">
        Welcome
      </p>
      <p>Click on the button below to log in to your account.</p>
      <Link
        to="login"
        className="w-[116px] h-12 bg-[#051423] flex items-center justify-center border border-[#51bc51] rounded-md"
        type="button"
      >
        Login
      </Link>
      <div className=" flex flex-col items-center gap-4">
        <p>or copy and paste this URL into your browser</p>
        <div className=" h-auto px-3 py-4 flex bg-[#0000007f] rounded">
          <a
            className=" text-center underline underline-offset-1 text-[#57a6f8]"
            href="https://base-4zv3bbedo-lawato.vercel.app/signin?callbackUrl=https%3A%2F%2Fbase-4zv3bbedo-lawato.vercel.app%2F&error=Callback"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://base-4zv3bbedo-.vercel.app/api/auth/callback/email?callbackUrl=https%3A%2F%2Fbase-4zv3bbedo-vercel.app%2F&token=38010292f418a9712c23b4d8b02cd9eeaf09f6550afc33043dc710deda897cf2&email=info%.io
          </a>
        </div>
      </div>
      <p className="text-center">
        This invite was sent from Askel.io. If you were not expecting this
        invitation, you can ignore this email. If you are concerned about your
        account`s safety, please let us know at{" "}
        <a
          className=" hover:text-[#51bc51] underline underline-offset-2 transition-colors"
          href="mailto:info@askel.io"
        >
          info@askel.io
        </a>
      </p>
    </div>
  );
}
