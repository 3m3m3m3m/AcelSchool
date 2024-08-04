import { navbarCopy } from "../copy/navbar";
export default function HeaderMobile() {
  return (
    <header className="header mb-2 ">
      <nav className="container px-4" id="navbar-mobile">
        <div className="navbar mt-3 d-flex align-items-center">
          <a
            className="navbar-brand text-light  text-medium"
            style={{ fontFamily: "GoodTimes',sans-serif" }}
            href="/"
          >
            {navbarCopy.title}
          </a>
          <a target="_self" className="w-50">
            <button className="QuestionButton button text-xsmall">
              {navbarCopy.button.name}
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
