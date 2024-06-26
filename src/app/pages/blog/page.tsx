"use client";
import HeaderDisplay from "@/app/components/HeaderDisplay";
import Loading from "@/app/components/Loading";
import { useLoading } from "@/app/utils/hooks/useLoading";
import { fetcher } from "@/app/utils/libs";
import Image from "next/image";
import { useEffect } from "react";
import useSWR from "swr";
export default function Blogs() {
  const { loading, startLoading, stopLoading } = useLoading();
  const { data, error } = useSWR("/api/blogs", fetcher);
  const blogs = data?.items || []
  const headerData = {
    title: "Our Teachings ",
    desc: "our publications on the teachings of Faith and Holy Communion",
  };
  useEffect(() => {
    startLoading();
    const timer = setTimeout(() => {
      stopLoading();
    }, 111);
  }, [startLoading, stopLoading]);
  return (
    <>
      <Loading loading={loading} />
      <HeaderDisplay {...headerData}/>
      <div className="container-fluid blog py-5 my-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="text-primary">Our Blog</h5>
            <h1>Latest Blog & News</h1>
          </div>
          {blogs.length ? (
            <div className="row g-5 justify-content-center">
              {blogs.map((blog: any, index: number) => (
                <div
                  key={index}
                  className="col-lg-6 col-xl-4 wow fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="blog-item position-relative bg-light rounded">
                    <Image
                      width={400}
                      height={400}
                      src="/img/blog-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                    <span
                      className="position-absolute px-4 py-3 bg-primary text-white rounded"
                      style={{ top: "-28px", right: "20px" }}
                    >
                      Mobile App
                    </span>
                    <div
                      className="blog-btn d-flex justify-content-between position-relative px-3"
                      style={{ marginTop: "-75px" }}
                    >
                      <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                        <a
                          href={`/pages/blog/${blog?.id}`}
                          className="btn text-white "
                        >
                          Read More
                        </a>
                      </div>
                      <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                        <div className="blog-icon-1">
                          <p className="text-white px-2">
                            Share<i className="fa fa-arrow-right ms-3"></i>
                          </p>
                        </div>
                        <div className="blog-icon-2">
                          <a href="#" className="btn me-1">
                            <i className="fab fa-facebook-f text-white"></i>
                          </a>
                          <a href="#" className="btn me-1">
                            <i className="fab fa-twitter text-white"></i>
                          </a>
                          <a href="#" className="btn me-1">
                            <i className="fab fa-instagram text-white"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-content text-center position-relative px-3"
                      style={{ marginTop: "-25px" }}
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/admin.jpg"
                        className="img-fluid rounded-circle border border-4 border-white mb-3"
                        alt=""
                      />
                      <h5 className="">By Daniel Martin</h5>
                      <span className="text-secondary">30 jan 2023</span>
                      <p className="py-2">
                        Lorem ipsum dolor sit amet elit. Sed efficitur quis
                        purus ut interdum. Aliquam dolor eget urna ultricies
                        tincidunt libero sit amet
                      </p>
                    </div>
                    <div className="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                      <a href="#" className="text-white">
                        <small>
                          <i className="fas fa-share me-2 text-secondary"></i>
                          5324 Share
                        </small>
                      </a>
                      <a href="#" className="text-white">
                        <small>
                          <i className="fa fa-comments me-2 text-secondary"></i>
                          5 Comments
                        </small>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="text-center mx-auto pb-5 wow fadeIn"
              data-wow-delay=".3s"
              style={{ maxWidth: "600px", fontWeight: "bolder" }}
            >
              <p className="text-primary">Currently under development</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
