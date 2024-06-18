"use client";
import { useEffect } from "react";
import { useLoading } from "./utils/hooks/useLoading";
import Loading from "./components/Loading";
import BannerSlider from "./components/Slider/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../../public/img/icon.jpeg";
import Image from "next/image";
import { factBoxes, welcomeCharge } from "./utils/consts";
import { montserratAlternates } from "./utils/fonts";
import Facebook from "./components/Facebook";
// import styles from "./page.module.css";
{
  /* TODO: abstract loading for use in all pages */
}
export default function Home() {
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
              <p className={montserratAlternates.className}>{welcomeCharge}</p>
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
      <div className="container-fluid py-5 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="text-primary">What&apos;s new at</h5>
            <h1 className="mb-3">The Mercy Tabernacle</h1>
            <p className="mb-2">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you are done.{" "}
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
          </div>
          <div className="contact-detail position-relative p-5">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                <div className="p-5 h-100 rounded contact-map">
                  {/* <iframe
                    className="rounded w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe> */}
                  {/* <Facebook /> */}
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                <div className="p-5 rounded contact-form">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control border-0 py-3"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Project"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-100 form-control border-0 py-3"
                      rows={6}
                      cols={10}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="text-start">
                    <button
                      className="btn bg-primary text-white py-3 px-5"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
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
