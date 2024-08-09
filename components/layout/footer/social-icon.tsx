import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  socialIcon: "facebook" | "instagram" | "email";
  linkIcon: string;
};

const SocialIcon = ({ socialIcon, linkIcon }: Props) => {
  return (
    <li className="w-6 h-6">
      <Link
        href={linkIcon}
        aria-label={socialIcon}
        target="_blank"
        className="w-full h-full relative block"
      >
        <Image
          src={`/images/icon/${socialIcon}-icon.svg`}
          alt={socialIcon}
          loading="lazy"
          fill
        />
      </Link>
    </li>
  );
};

export default SocialIcon;
