import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface FooterProps {
  className?: string;
  classNameIcons?: string;
  classNameCopy?: string;
}

export default function Footer({
  className,
  classNameIcons,
  classNameCopy,
}: FooterProps) {
  return (
    <footer className={`${className ?? ""} container-small py-8`}>
      <div className="flex flex-col justify-between gap-y-3 md:flex-row md:gap-y-0">
        <div className={`${classNameCopy} order-2 md:order-1`}>
          <p className="text-center font-medium md:text-left">
            &copy; 2024 Pascal de Haan, All rights reserved.
          </p>
        </div>
        <div className={`${classNameIcons} order-1 md:order-2`}>
          <div className="flex justify-center gap-7 md:justify-start">
            <Link
              href="https://github.com/Pascaldhh/"
              target="_blank"
              className="transition-colors hover:text-red-primary-600"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
            <Link
              href="https://linkedin.com/in/pascal-de-haan/"
              target="_blank"
              className="transition-colors hover:text-red-primary-600"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </Link>
            <Link
              href="mailto:me@devpascal.nl"
              className="transition-colors hover:text-red-primary-600"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
