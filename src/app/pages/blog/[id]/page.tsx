import HeaderDisplay from "@/app/components/HeaderDisplay";
import {
  alt1,
  alt2,
  del1,
  del2,
  del3,
  p1,
  p2,
  quote,
} from "@/app/utils/consts";
import { inspiration } from "@/app/utils/fonts";
import formatTime from "@/app/utils/formatTime";
import { getEntries, getEntry } from "@/app/utils/libs";
import { faTag, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default async function Blog({ params }: { params: { id: string } }) {
  const timestamp = new Date().getTime();
  const blog = await getEntry({ id: params.id });
  const blogs = await getEntries({ contentType: "blog" });
  const headerData = {
    title: "Our Teachings ",
    desc: "our publications on the teachings of Faith and Holy Communion",
  };

  return (
    <>
      {/* <div className="container-fluid page-header py-5 mb-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Our Teachings
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <p className="breadcrumb breadcrumb-item justify-content-center mb-0">
              Read our publications on the teachings of Faith and Holy Communion
            </p>
          </nav>
        </div>
      </div> */}
      <HeaderDisplay {...headerData} />
      <div className="container-fluid  services py-3 mb-3">
        <div className="container pt-3">
          <div className="row g-5 services-inner">
            <div
              className="col-lg-8 col-md-8 col-sm-12 wow fadeIn"
              data-wow-delay=".5s"
            >
              <div className="services-item bg-light no-padding">
                <Image
                  src="/img/blog-2.jpg"
                  width={1000}
                  height={1000}
                  alt={alt2}
                  className="img-fluid mt-0 pt-0"
                  style={{
                    display: "block",
                    height: "auto",
                    width: "100%",
                    backgroundSize: "cover",
                  }}
                />
                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faTimesCircle} className="p-2" />
                      <Link href={``}>John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faTimesCircle} className="p-2" />
                      <Link href={``}>John Doe</Link>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>{p1}</h3>
                  <p>{del1}</p>
                  <p>{del2}</p>
                  <h4>{p2}</h4>
                  <p>{del3}</p>
                  <blockquote
                    className={inspiration.className}
                    style={{ fontSize: "30px" }}
                  >
                    {quote}
                  </blockquote>
                  <p>{del2}</p>
                  <p>
                    <Image
                      alt={alt1}
                      src="/img/dd3.jpeg"
                      width={1000}
                      height={1000}
                      className="img-fluid"
                    />
                  </p>
                  <p>{del1}</p>
                  <p>{del2}</p>
                </div>
                <div className="meta-bottom">
                  <ul className="d-flex">
                    <li className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faTag} className="p-2" />
                      <Link href={``}>John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faTimesCircle} className="p-2" />
                      <Link href={``}>John Doe</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 wow fadeIn">
              <div className="services-item bg-light no-padding">
                <div className="sidebar">
                  <div className="sidebar-item recent-posts">
                    <h4 className="sidebar-title">Recent Posts</h4>
                    <div className="mt-2">
                      {blogs.map((blog, index) => (
                        <div key={index} className="post-item mt-3">
                          <Image
                            alt={alt2}
                            src="/img/dd3.jpeg"
                            className="img-fluid"
                            width={100}
                            height={100}
                          />
                          <div>
                            <h4 className="d-flex">
                              <Link href="/" style={{ marginLeft: "15px" }}>
                                {p1}
                              </Link>
                            </h4>
                            <time className="d-flex" dateTime={`${timestamp}`}>
                              <span style={{ marginLeft: "15px" }}>
                                {formatTime({ timestamp: timestamp })}
                              </span>
                            </time>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
