import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNav() {
    setNavOpen((prev) => !prev);
  }

  const mobileNav = (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={() => setNavOpen((prev) => !prev)}>
            About
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setNavOpen((prev) => !prev)}>
            Discover
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setNavOpen((prev) => !prev)}>
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );

  const desktopNav = (
    <nav className="desktop-nav">
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Get Started</a>
        </li>
      </ul>
    </nav>
  );

  return (
    <header>
      <h1 style={{color:'white'}}>Crowd Fund</h1>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        aria-expanded={navOpen}
        aria-controls="menu"
        onClick={handleNav}
      >
        <img
          src="../assets/icon-hamburger.svg"
          alt=""
          className="hamburger-icon"
        />
      </button>
      {navOpen && mobileNav}
      {desktopNav}
    </header>
  );
}
