'use client'
import Image from "next/image";
import logoNome from "./images/logo-nome.png"
import CardBtn from "./CardBtn";

export default function Home() {
  return (
    <div className="font-body mx-auto p-4 mt-44 justify-items-center max-w-md w-full rounded-2xl bg-darkBlue">
      <div className="p-4 flex items-center flex-col">
        <Image
          alt="logo"
          src={logoNome}
          width={120}
          className=""
        />
        <h1 className="font-title text-center text-2xl mt-4">Guitech Informática</h1>

        <CardBtn content="WhatsApp" hrefDestiny="https://wa.me/5512991112772" />
        <CardBtn content="Instagram" hrefDestiny="https://www.instagram.com/guitech_assistencia/" />
        <CardBtn content="Facebook" hrefDestiny="https://www.instagram.com/guitech_assistencia/" />
        <CardBtn content="Site" hrefDestiny="https://www.instagram.com/guitech_assistencia/" />
      </div>

    </div>
  );
}
