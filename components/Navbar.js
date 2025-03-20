import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.headerBar}> 
      <div className={`${styles.headerContainer} ${styles.sectionBorder}`}>
        <h1>
          <Link href="/">WP NextJs</Link>
        </h1>
        <nav>
          <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>☰</div>
          <ul className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
