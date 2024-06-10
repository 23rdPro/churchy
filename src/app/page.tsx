"use client";
import { useEffect } from "react";
import { useLoading } from "./utils/hooks/useLoading";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import BannerSlider from "./components/Slider/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../../public/img/icon.jpeg";
import {
  faBookBible,
  faChurch,
  faDove,
  faHandsPraying,
  faPersonPraying,
  faStarAndCrescent,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { welcomeCharge } from "./utils/consts";
// import styles from "./page.module.css";
{
  /* TODO: abstract loading for use in all pages */
}
export default function Home() {
  const factBoxes = [
    // { icon: faChurch },
    // { icon: faHandsPraying },
    { icon: faPersonPraying, title: "Holy Spirit" },
    { icon: faDove, title: "Holy Spirit" },
    { icon: faBookBible, title: "Holy Spirit" },
    // { icon: faStarAndCrescent },
  ];
  const { loading, startLoading, stopLoading } = useLoading();
  useEffect(() => {
    startLoading();
    setTimeout(() => stopLoading(), 699);
  }, [startLoading, stopLoading]);
  return (
    <>
      <Loading loading={loading} />
      <BannerSlider />
      <div className="container-fluid services py-5 mb-3">
        <div className="container">
          <div className="row g-5 services-inner">
            {factBoxes.map((fact: any, index: number) => (
              <div
                key={index++}
                className="col-lg-4 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <FontAwesomeIcon
                        icon={fact.icon}
                        size="7x"
                        className="mb-4 text-primary icon-hover"
                      />
                      <h4 className="mb-3">{fact.title}</h4>
                      <a
                        href="#"
                        className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid py-3 my-3">
        <div className="container pt-3">
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".3s"
            >
              <Image
                src={icon}
                width={100}
                height={100}
                className="img-fluid w-75 rounded"
                alt=""
                style={{ marginBottom: "5%" }}
              />
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".5s"
            >
              <h4 className="text-primary">Bishop Bankole Jefferson DD</h4>
              <h1 className="mb-4" style={{ fontWeight: "bolder" }}>
                Mercy World Outreach
              </h1>
              <p style={{ fontStyle: "italic" }}>{welcomeCharge}</p>
              <a
                href="#"
                className="btn btn-secondary rounded-pill px-5 py-3 text-white"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
