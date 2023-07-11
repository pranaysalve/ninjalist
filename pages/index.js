import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World NextJs is here!</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
          distinctio veniam, doloribus nihil eveniet quod laborum quisquam
          perspiciatis iure ullam quaerat neque. Nemo delectus facilis
          perspiciatis fuga voluptates, facere dolore?
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
          distinctio veniam, doloribus nihil eveniet quod laborum quisquam
          perspiciatis iure ullam quaerat neque. Nemo delectus facilis
          perspiciatis fuga voluptates, facere dolore?
        </p>
        <Link href="/ninjas" legacyBehavior>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
