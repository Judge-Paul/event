import Image from "next/image";
import React from "react";
import AuthImage from "assets/images/authSideImage.png";
import Header from "../web/header";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full h-screen overflow-hidden">
      <section className="hidden lg:flex lg:w-[45%] h-screen">
        <Image
          src={AuthImage}
          alt="logo"
          width={900}
          height={900}
          className="h-full w-full object-cover object-bottom"
        />
      </section>
      <section className="w-full lg:w-[60%] lg:flex items-center justify-center">
        <div className="lg:hidden">
          <Header />
        </div>
        {children}
      </section>
    </main>
  );
}
