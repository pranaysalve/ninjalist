import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(-1);
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List | 404 Not Found</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Ooops....</h1>
        <h2>That page can not found!</h2>
        <p>
          Go back to the{" "}
          <Link href="/" legacyBehavior>
            Home
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
