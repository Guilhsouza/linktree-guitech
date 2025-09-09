'use client'
import Image from "next/image";
import logoNome from "./images/logo-nome.png"
import wppLogo from "./images/whatsapp-logo.png"
import facebookLogo from "./images/facebook-logo.png"
import instaLogo from "./images/Instagram-logo.png"
import CardBtn from "./CardBtn";

import styles from "./styles.module.css"

export default function Home() {
  return (
    <div className="font-body mx-auto max-w-xl mt-44 bg-darkBlue">
      <div className="p-4 flex items-center flex-col">
        <Image
          alt="logo"
          src={logoNome}
          width={160}
          className=""
        />
        <h1 className="font-title text-center text-yellowLight text-2xl mt-4">Guitech Informática</h1>

        <CardBtn content="WhatsApp" hrefDestiny="https://wa.me/5512991112772" />
        <CardBtn content="Instagram" hrefDestiny="https://www.instagram.com/guitech_assistencia/" />
        <CardBtn content="Facebook" hrefDestiny="" />
        <CardBtn content="Site" hrefDestiny="" />
      </div>
      <div className="flex justify-center gap-14 mt-4">
        <a href="https://wa.me/5512991112772" target="_blank">
          <Image
            alt="logo-whatsapp"
            src={wppLogo}
            width={35}
            className={styles.imageScale}
          />
        </a>

        <a href="https://www.instagram.com/guitech_assistencia/" target="_blank">
          <Image
            alt="logo-instagram"
            src={instaLogo}
            width={35}
            className={styles.imageScale}
          />
        </a>

        <a href="">
          <Image
            alt="logo-facebook"
            src={facebookLogo}
            width={33}
            className={styles.imageScale}
          />
        </a>
      </div>
    </div >
  );
}
