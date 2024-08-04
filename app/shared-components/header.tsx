import Link from "next/link";
import { navbarCopy } from "../copy/navbar";
export default function Header() {

  return (
    <nav className="container" id="navbar">
      <div className="navbar navbar-expand-lg navbar-dark justify-content-between mb-3 mt-1">
        <Link
          className="navbar-brand  d-flex align-items-center text-large "
          href="/"
        >
          {navbarCopy.title}
        </Link>
        <div className="light-text">
          <Link
            href={navbarCopy.button.url}
            className="box btn bg-blue text-oxford btn-padding fw-bold"
            target={navbarCopy.button.target}
          >
            {navbarCopy.button.name}
          </Link>
        </div>
      </div>
    </nav>
  );
}
