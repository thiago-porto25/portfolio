import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as UpWork } from "../assets/icons/upwork.svg";

export const socialsComponents = [
  {
    link: "https://github.com/thiago-porto25",
    component: <GitHub className="w-9 h-9" title="My Github profile" />,
  },
  {
    link: "https://www.linkedin.com/in/thiago-porto-675b8320a/",
    component: <LinkedIn className="w-9 h-9" title="My LinkedIn profile" />,
  },
  {
    link: "mailto:thiagoportodev@gmail.com",
    component: <Mail className="w-9 h-9" title="My e-mail address" />,
  },
  {
    link: "https://www.upwork.com/freelancers/~0121ea51217c88aaa1",
    component: <UpWork className="w-9 h-9" title="My UpWork profile" />,
  },
];
