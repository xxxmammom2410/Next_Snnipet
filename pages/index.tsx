import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/ssr">
            <h2 className={inter.className}>
              SSRサンプル <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="/ssg">
            <h2 className={inter.className}>
              SSGサンプル <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="/textStyleComponent">
            <h2 className={inter.className}>
              TextStyleComponent <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="/radio-group">
            <h2 className={inter.className}>
              RadioExample <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </main>
    </>
  );
}
