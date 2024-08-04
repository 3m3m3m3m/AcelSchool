"use client";

import { schoolOfAccelCopy } from "@/app/copy/landing";

export default function Sections() {
  return (
    <>
      <div className="row position-relative overflow-hidden">
        <div className="col-lg-7 ps-4 white-border br-half bb-half position-relative overflow-hidden">
          <div className=" mt-high text-uppercase font-goodtimes text-xxlarge text-narrow-height ">
            <h1
              className="text-uppercase font-goodtimes text-xxlarge text-narrow-height"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy.header.title,
              }}
            ></h1>
          </div>
          <div
            className="text-thin text-medium my-5 text-narrow-height mb-high"
            dangerouslySetInnerHTML={{
              __html: schoolOfAccelCopy.header.subtitle,
            }}
          ></div>
          <div className="bg-blue-gradient br-gradient-medium"></div>
        </div>
        <div className="col-lg-5">
          <div className="row">
            <div className="col-12 white-border bl-half bb-half p-0 overflow-hidden">
              <img
                src="/img/bg-school-header.png"
                className="w-100"
                alt="School of ACCEL"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 white-border border-half p-5 text-center text-n100 position-relative overflow-hidden">
              <h5
                className="font-goodtimes text-medium text-thin"
                dangerouslySetInnerHTML={{
                  __html: schoolOfAccelCopy.header["time-box"][0].title,
                }}
              ></h5>
              <div
                className="text-thin"
                dangerouslySetInnerHTML={{
                  __html: schoolOfAccelCopy.header["time-box"][0].subtitle,
                }}
              ></div>
              <div className="bg-blue-gradient br-gradient-small"></div>
            </div>
            <div className="col-6 white-border bt-half bl-half bb-half p-5 text-center text-n100 position-relative overflow-hidden">
              <h5
                className="font-goodtimes text-medium text-thin"
                dangerouslySetInnerHTML={{
                  __html: schoolOfAccelCopy.header["time-box"][1].title,
                }}
              ></h5>
              <div
                className="text-thin"
                dangerouslySetInnerHTML={{
                  __html: schoolOfAccelCopy.header["time-box"][1].subtitle,
                }}
              ></div>
              <div className="bg-blue-gradient br-gradient-small"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div
          className="col-12 white-border bt-half bb-half p-5 d-flex justify-content-center "
          id="bg-dots-school"
        >
          <h3
            className="text-medium font-goodtimes mt-high mb-high w-60"
            dangerouslySetInnerHTML={{ __html: schoolOfAccelCopy.quote.text }}
          ></h3>
        </div>
      </div>
      {/* <!-- Key Concepts --> */}
      <div className="row white-border bt-half bb-half position-relative overflow-hidden">
        <div className="p-5 m-0">
          <h2
            className="font-goodtimes text-xlarge text-narrow-height text-center mt-high"
            dangerouslySetInnerHTML={{
              __html: schoolOfAccelCopy["segment-1"].title,
            }}
          ></h2>
        </div>
        <div
          id="key-concept-main"
          className="row align-center justify-content-center  pb-3 mt-5"
        >
          {/* <!-- 1 --> */}
          <div className="col-lg-3 px-4">
            <h4
              className="font-goodtimes text-medium  text-center"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy["segment-1"].items[0].title,
              }}
              style={{ height: "4rem" }}
            ></h4>
            <p
              className="text-xsmall text-thin text-center text-n300 mt-4"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy["segment-1"].items[0].description,
              }}
            ></p>
          </div>
          {/* <!-- 2 --> */}
          <div className="col-lg-3 px-4">
            <h4
              className="font-goodtimes text-medium  text-center"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy["segment-1"].items[1].title,
              }}
              style={{ height: "4rem" }}
            ></h4>
            <p
              className="text-xsmall text-thin text-center text-n300 mt-4"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy["segment-1"].items[1].description,
              }}
            ></p>
          </div>
          {/* <!-- 3 --> */}
          <div className="col-lg-3 px-4">
            <h4
              className="font-goodtimes text-medium  text-center"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy["segment-1"].items[2].title,
              }}
              style={{ height: "4rem" }}
            ></h4>
            <p
              className="text-xsmall text-thin text-center text-n300 mt-4"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy["segment-1"].items[2].description,
              }}
            ></p>
          </div>
          {/* <!-- 4 --> */}
          <div className="col-lg-3 px-4">
            <h4
              className="font-goodtimes text-medium  text-center"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy["segment-1"].items[3].title,
              }}
              style={{ height: "4rem" }}
            ></h4>
            <p
              className="text-xsmall text-thin text-center text-n300 mt-4"
              dangerouslySetInnerHTML={{
                __html: schoolOfAccelCopy["segment-1"].items[3].description,
              }}
            ></p>
          </div>
        </div>
        <div className="bg-blue-gradient br-gradient-medium"></div>
        <div className="bg-blue-gradient tl-gradient-medium"></div>
        {/* <!-- TOP RIGHT SQUARES --> */}
        <div id="right-sq-main">
          <div className="small-square white-border"></div>
          <div className="big-square white-border"></div>
          <div className="small-square-l small-square white-border"></div>
        </div>
        {/* <!-- BOTTOM LEFT SQUARES --> */}
        <div className="position-absolute bottom-0 start-0">
          <div className="big-square white-border position-absolute bottom-0 start-0"></div>
          <div className="small-square white-border position-absolute bottom-0 start-0"></div>
        </div>
      </div>
    </>
  );
}
