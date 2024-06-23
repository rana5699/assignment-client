import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded rounded-t-2xl">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaTwitter className="text-4xl" />
            </Link>
            <Link>
              <FaYoutube className="text-4xl" />
            </Link>
            <Link>
              <FaFacebook className="text-4xl" />
            </Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by troist.com ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
