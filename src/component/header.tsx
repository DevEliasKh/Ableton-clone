import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(false);
  return (
    <header className={`w-full p-6 ${menuShow ? "bg-blue" : ""}`}>
      <nav className={`w-full ${menuShow ? "bg-blue" : ""}`}>
        <div className="links-desktop hidden desktop:flex justify-between px-2">
          <ul className="menu text-black flex justify-between items-center gap-4 font-semibold text-md">
            <li>
              <box-icon name="menu" size="md"></box-icon>
              <box-icon name="menu" rotate="90" size="md"></box-icon>
            </li>
            <li>
              <Link to="#">Live</Link>
            </li>
            <li>
              <Link to="#">Push</Link>
            </li>
            <li>
              <Link to="#">Note</Link>
            </li>
            <li>
              <Link to="#">Link</Link>
            </li>
            <li>
              <Link to="#">Shop</Link>
            </li>
            <li>
              <Link to="#">Packs</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
            <li
              onClick={() => setDesktopMenu(!desktopMenu)}
              className="text-orange flex items-center"
            >
              <span>More</span>
              <box-icon
                name="plus"
                size="sm"
                class={`fill-orange ${!desktopMenu ? "" : "hidden"}`}
              ></box-icon>
              <box-icon
                name="minus"
                size="sm"
                class={`fill-orange ${desktopMenu ? "" : "hidden"}`}
              ></box-icon>
            </li>
          </ul>
          <ul className="flex gap-4 text-lg">
            <li className="text-blue font-semibold">
              <Link to="#">Try Live for free</Link>
            </li>
            <li>
              <Link to="#">Log in or register</Link>
            </li>
          </ul>
        </div>
        <div className={`w-full ${desktopMenu ? "" : "hidden"}`}>
          <h1 className="font-semibold text-3xl pt-12 pb-6">
            More on Ableton.com:
          </h1>
          <ul className="flex gap-8 font-light">
            <li>Blog</li>
            <li>Ableton for the Classroom</li>
            <li>Abletn for Colleges and Universities</li>
            <li>Certified Training</li>
            <li>About Ableton</li>
            <li>Jobs</li>
            <li>Apprenticeships</li>
          </ul>
        </div>
        <div className={`w-full ${desktopMenu ? "" : "hidden"} pb-8`}>
          <h1 className="font-semibold text-3xl pt-12 pb-6">
            More from Ableton:
          </h1>
          <ul className="flex">
            <li>
              <h1 className="text-2xl pb-2">Loop</h1>
              <p>
                Watch Talks, Performances and Features from Ableton's Summit for
                Music Makers
              </p>
            </li>
            <li>
              <h1 className="text-2xl pb-2">Learning Music</h1>
              <p>
                Learn the fundamentals of music making right in your browser.
              </p>
            </li>
            <li>
              <h1 className="text-2xl pb-2"> Learning Synths</h1>
              <p>
                Get started with synthesis using a web-based synth and
                accompanying lessons.
              </p>
            </li>
            <li>
              <h1 className="text-2xl pb-2">Making Music</h1>
              <p>
                Some tips from 74 Creative Strategies for Electronic Producers.
              </p>
            </li>
          </ul>
        </div>
        <div
          className={`flex items-center text-xl font-bold ${
            menuShow ? "text-white" : "text-black"
          } desktop:hidden`}
          onClick={() => {
            setMenuShow(!menuShow);
          }}
        >
          <box-icon
            name="menu"
            size="md"
            class={`${!menuShow ? "" : "fill-white"}`}
          ></box-icon>
          <box-icon
            name="menu"
            rotate="90"
            size="md"
            class={`${!menuShow ? "" : "fill-white"}`}
          ></box-icon>
          <span className="pl-2">Menu</span>
          <box-icon
            name="chevron-down"
            class={`${!menuShow ? "" : "hidden"} fill-black`}
          ></box-icon>
          <box-icon
            name="chevron-up"
            class={`${menuShow ? "" : "hidden"} fill-white`}
          ></box-icon>
        </div>
        <div
          className={`links-mobile ${
            menuShow ? "flex" : "hidden"
          } flex-col justify-between pt-4 pl-2 animate-navBarAnime`}
        >
          <ul className="menu flex flex-col gap-8 font-bold">
            <li>
              <Link to="#">Live</Link>
            </li>
            <li>
              <Link to="#">Push</Link>
            </li>
            <li>
              <Link to="#">Note</Link>
            </li>
            <li>
              <Link to="#">Link</Link>
            </li>
            <li>
              <Link to="#">Shop</Link>
            </li>
            <li>
              <Link to="#">Packs</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
            <li>
              <ul className="flex flex-col gap-8">
                <li>
                  <Link to="#" className="">
                    Try Live for free
                  </Link>
                </li>
                <li>
                  <Link to="#" className="font-normal text-sm">
                    Log in or Register
                  </Link>
                </li>
              </ul>
            </li>
            <li className="flex flex-col justify-center gap-4">
              <div className="first flex flex-col gap-4">
                <h1 className="text-xl">More on Ableton.com:</h1>
                <ul className="flex flex-col gap-6 font-normal">
                  <li>Blog</li>
                  <li>Ableton for the Classroom</li>
                  <li>Abletn for Colleges and Universities</li>
                  <li>Certified Training</li>
                  <li>About Ableton</li>
                  <li>Jobs</li>
                  <li>Apprenticeships</li>
                </ul>
              </div>
              <div className="second ">
                <h1 className="pb-4 text-xl">More from Ableton:</h1>
                <ul className="flex gap-6 font-normal">
                  <li>
                    <h1 className="pb-3">Loop</h1>
                    <p>
                      Watch Talks, Performances and Features from Ableton's
                      Summit for Music Makers
                    </p>
                  </li>
                  <li>
                    <h1 className="pb-3">Learning Music</h1>
                    <p>
                      Learn the fundamentals of music making right in your
                      browser.
                    </p>
                  </li>
                  <li>
                    <h1 className="pb-3"> Learning Synths</h1>
                    <p>
                      Get started with synthesis using a web-based synth and
                      accompanying lessons.
                    </p>
                  </li>
                  <li>
                    <h1 className="pb-3">Making Music</h1>
                    <p>
                      Some tips from 74 Creative Strategies for Electronic
                      Producers.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
