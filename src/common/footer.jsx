function Footer() {
  return (
    <>
      <footer className="light-bg flex justify-space">
        <span className="white">
          Copyright © 2023 <a href="/">Bipin Profile</a> - All rights reserved.
        </span>
        <ul className="flex">
          <li>
            <a
              href="https://www.facebook.com/bipin.karna.3"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/icons/facebook.svg"
                width={24}
                height={24}
                alt="facebook-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/its_bipin_karn/?next=%2F"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/icons/instagram.svg"
                width={24}
                height={24}
                alt="instagram-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bipin-karn-43014a141/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/icons/linkedin.svg"
                width={24}
                height={24}
                alt="linkedin-icon"
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
