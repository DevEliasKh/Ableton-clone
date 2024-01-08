import { Outlet, useNavigate, Link } from "react-router-dom";
import "boxicons";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  if (pathname == "/") {
    setTimeout(() => {
      return navigate("/about");
    }, 0);
  }

  return (
    <>
      <nav>
        <div className="icon">
          <box-icon name="menu"></box-icon>
          <box-icon name="menu" rotate="90"></box-icon>
        </div>
        <div className="links-desktop hidden">
          <ul className="menu">
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
              More<box-icon name="plus"></box-icon>
              <div className="first">
                <h1>More on Ableton.com:</h1>
                <ul>
                  <li>Blog</li>
                  <li>Ableton for the Classroom</li>
                  <li>Abletn for Colleges and Universities</li>
                  <li>Certified Training</li>
                  <li>About Ableton</li>
                  <li>Jobs</li>
                  <li>Apprenticeships</li>
                </ul>
              </div>
              <div className="second">
                <h1>More from Ableton:</h1>
                <ul>
                  <li>
                    <h1>Loop</h1>
                    <p>
                      Watch Talks, Performances and Features from Ableton's
                      Summit for Music Makers
                    </p>
                  </li>
                  <li>
                    <h1>Learning Music</h1>
                    <p>
                      Learn the fundamentals of music making right in your
                      browser.
                    </p>
                  </li>
                  <li>
                    <h1> Learning Synths</h1>
                    <p>
                      Get started with synthesis using a web-based synth and
                      accompanying lessons.
                    </p>
                  </li>
                  <li>
                    <h1>Making Music</h1>
                    <p>
                      Some tips from 74 Creative Strategies for Electronic
                      Producers.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Try Live for free</Link>
            </li>
            <li>
              <Link to="#">Log in or register</Link>
            </li>
          </ul>
        </div>
        <div className="links-mobile">
          <ul className="menu">
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
              More<box-icon name="plus"></box-icon>
              <div className="first">
                <h1>More on Ableton.com:</h1>
                <ul>
                  <li>Blog</li>
                  <li>Ableton for the Classroom</li>
                  <li>Abletn for Colleges and Universities</li>
                  <li>Certified Training</li>
                  <li>About Ableton</li>
                  <li>Jobs</li>
                  <li>Apprenticeships</li>
                </ul>
              </div>
              <div className="second">
                <h1>More from Ableton:</h1>
                <ul>
                  <li>
                    <h1>Loop</h1>
                    <p>
                      Watch Talks, Performances and Features from Ableton's
                      Summit for Music Makers
                    </p>
                  </li>
                  <li>
                    <h1>Learning Music</h1>
                    <p>
                      Learn the fundamentals of music making right in your
                      browser.
                    </p>
                  </li>
                  <li>
                    <h1> Learning Synths</h1>
                    <p>
                      Get started with synthesis using a web-based synth and
                      accompanying lessons.
                    </p>
                  </li>
                  <li>
                    <h1>Making Music</h1>
                    <p>
                      Some tips from 74 Creative Strategies for Electronic
                      Producers.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Try Live for free</Link>
            </li>
            <li>
              <Link to="#">Log in or register</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
