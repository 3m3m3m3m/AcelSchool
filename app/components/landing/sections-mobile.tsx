"use client";

import { schoolOfAccelCopy } from "@/app/copy/landing";

export default function SectionsMobile() {
  return (
    <section className="container">
      <div className="col-12 white-border-mob br-half bb-half">
        <img src="./img/school.png" className="w-100" />
      </div>

      <div
        id="schoolOfAccel"
        className="col-12 white-border-mob br-half bb-half Box-padding"
      >
        <div
          className="col-12 AccelTitle text-large-mob font-goodtimes mt-3"
          dangerouslySetInnerHTML={{ __html: schoolOfAccelCopy.header.title }}
        ></div>
        <div
          className="col-12 AccelText text-thin text-medium mt-5"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy.header.subtitle,
          }}
        ></div>
        <div className="br-gradient bg-blue-gradient"></div>
      </div>

      <div className="row px-2">
        <div
          id="educational"
          className="col-6 white-border-mob br-half bb-half Box-padding "
        >
          <span
            className="font-goodtimes text-uppercase text-medium-small"
            dangerouslySetInnerHTML={{
              __html: schoolOfAccelCopy.header["time-box"][0].title,
            }}
          ></span>
          <br />
          <span
            className="text-thin text-xsmall"
            dangerouslySetInnerHTML={{
              __html: schoolOfAccelCopy.header["time-box"][0].subtitle,
            }}
          ></span>
        </div>
        <div
          id="testing"
          className="col-6 white-border-mob br-half bb-half Box-padding"
        >
          <span
            className="font-goodtimes text-uppercase text-medium-small"
            dangerouslySetInnerHTML={{
              __html: schoolOfAccelCopy.header["time-box"][1].title,
            }}
          ></span>
          <br />
          <span
            className="text-thin text-xsmall"
            dangerouslySetInnerHTML={{
              __html: schoolOfAccelCopy.header["time-box"][1].subtitle,
            }}
          ></span>
        </div>
      </div>

      <div
        id="schoolOfAccelDescription"
        className="col-12 white-border-mob br-half bb-half Box-padding"
      >
        <div
          className="col-12 mt-4 font-goodtimes text-smal"
          dangerouslySetInnerHTML={{ __html: schoolOfAccelCopy.quote.text }}
        ></div>
      </div>

      <div
        id="keyConcepts"
        className="p-0 col-12 white-border-mob br-half bb-half"
      >
        <div className="bg-blue-gradient tl-gradient"></div>

        <div className="tr-squareContainer col-12 p-0">
          <div className="SquRow">
            <div className="bigSqu white-border-mob br-half bb-half"></div>
            <div className="smallSqu white-border-mob br-half bb-half"></div>
          </div>
          <div className="smallSqu white-border-mob SquPosition br-half bb-half"></div>
        </div>

        <div
          className="col-12 AccelTitle mt-2 text-medium-mob font-goodtimes"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].title,
          }}
        ></div>
        <div
          className="col-12 AccelTitle mt-5 pt-3 text-small font-goodtimes"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].items[0]["title-mob"],
          }}
        ></div>
        <div
          className="col-12 AccelText text-thin text-small Box-padding"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].items[0].description,
          }}
        ></div>

        <div
          className="col-12 AccelTitle mt-5 text-small font-goodtimes"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].items[1]["title-mob"],
          }}
        ></div>
        <div
          className="col-12 AccelText text-thin text-light text-small Box-padding"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].items[1].description,
          }}
        ></div>

        <div
          className="col-12 AccelTitle mt-4 text-small font-goodtimes"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].items[2]["title-mob"],
          }}
        ></div>
        <div
          className="col-12 AccelText text-thin text-light text-small Box-padding"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].items[2].description,
          }}
        ></div>

        <div
          className="col-12 AccelTitle mt-4 text-small font-goodtimes"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].items[3]["title-mob"],
          }}
        ></div>
        <div
          className="col-12 AccelText text-thin text-light text-small Box-padding"
          dangerouslySetInnerHTML={{
            __html: schoolOfAccelCopy["segment-1"].items[3].description,
          }}
        ></div>

        <div className="br-gradient bg-blue-gradient"></div>

        <div className="bl-squareContainer">
          <div className="bigSqu white-border">
            <div className="InsideSqu white-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
