import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "styles/social.module.css";

export default function Social({iconSize='initial'}) {
  return (
    <ul className={styles.list} style={{'--icon-size': iconSize}}>
      <li>
        <Link href="/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </Link>
      </li>
    </ul>
  );
}