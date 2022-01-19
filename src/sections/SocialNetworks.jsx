import { useState } from "react";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as UpWork } from "../assets/icons/upwork.svg";

export default function SocialNetworks() {
  const [socials] = useState([
    <GitHub key={0} />,
    <LinkedIn key={1} />,
    <Mail key={2} />,
    <UpWork key={3} />,
  ]);

  return socials;
}
