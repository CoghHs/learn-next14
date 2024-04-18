"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" className={path === "/" ? styles.selected : ""}>
            홈
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={path === "/about-us" ? styles.selected : ""}
          >
            더보기
          </Link>
        </li>
      </ul>
    </nav>
  );
}
