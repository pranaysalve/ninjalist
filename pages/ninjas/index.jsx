import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | All Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((item) => (
          <Link href={`/ninjas/${item.id}`} key={item.id} legacyBehavior>
            <a className={styles.single}>
              <h3 className={""}>{item.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
