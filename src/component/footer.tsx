function Footer() {
  return (
    <div className="p-16 flex flex-col gap-8 desktop:grid desktop:grid-cols-3 desktop:auto-rows-auto">
      <section className="font-semibold text-4xl desktop:col-span-3">
        Ableton
      </section>
      <section className="">
        <div className="pb-2">
          <p className="font-semibold pb-2">Sign up to our newsletter</p>
          <span className="font-light">
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </span>
        </div>
        <form action="" className="flex flex-grow">
          <input
            type="mail"
            placeholder="Email Address"
            className="bg-gray py-2 desktop:h-12 px-2 font-light flex-grow h-8"
          />
          <button className="bg-blue text-white py-2 px-4 desktop:h-12 h-8 text-sm">
            Sign Up
          </button>
        </form>
      </section>
      <section className="desktop:col-start-1 desktop:row-start-2">
        <ul className="flex flex-col gap-2 font-light">
          <li>
            Register Live Or Push
            <box-icon name="chevron-right" size="xs"></box-icon>
          </li>
          <li>
            About Albeton<box-icon name="chevron-right" size="xs"></box-icon>
          </li>
          <li>
            Jobs<box-icon name="chevron-right" size="xs"></box-icon>
          </li>
        </ul>
        <div>
          <box-icon type="logo" name="youtube" size="lg"></box-icon>
          <box-icon type="logo" name="facebook-square" size="lg"></box-icon>
          <box-icon name="instagram-alt" type="logo" size="lg"></box-icon>
          <box-icon type="logo" name="twitter" size="lg"></box-icon>
        </div>
      </section>
      <section className="flex flex-col gap-2 font-light desktop:col-start-2 desktop:row-start-2">
        <p className="font-semibold">Education</p>
        <p>
          Offers for students and teachers
          <box-icon name="chevron-right" size="xs"></box-icon>
        </p>
        <p>
          Ableton for the Classroom
          <box-icon name="chevron-right" size="xs"></box-icon>
        </p>
        <p>
          Ableton for Colleges and Universities
          <box-icon name="chevron-right" size="xs"></box-icon>
        </p>
      </section>
      <section className="flex flex-col gap-2 font-light">
        <p className="font-semibold">Community</p>
        <p>
          Find Ableton User Groups{" "}
          <box-icon name="chevron-right" size="xs"></box-icon>
        </p>
        <p>
          Find Certified Training{" "}
          <box-icon name="chevron-right" size="xs"></box-icon>
        </p>
        <p>
          Become a Certified Trainer{" "}
          <box-icon name="chevron-right" size="xs"></box-icon>
        </p>
      </section>
      <section className="flex flex-col gap-2">
        <div>Language and Location</div>
        <div className="flex gap-2">
          <select
            name="language"
            id="language"
            className="bg-gray py-2 pr-4 pl-2"
          >
            <option value="English">English</option>
            <option value="Persian">Persian</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
          <select
            name="location"
            id="location"
            className="bg-gray py-2 pr-8 pl-2"
          >
            <option value="Germany">Germany</option>
            <option value="Iran">Iran</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
          </select>
        </div>
      </section>
      <section className="flex flex-col gap-2 text-xs desktop:flex-row desktop:col-start-1 desktop:col-span-2">
        <p>Contact Us</p>
        <p>Press Resources</p>
        <p>Legal Info</p>
        <p>Privacy Policy</p>
        <p>Cookie Settings</p>
        <p>Imprint</p>
      </section>
      <section className="flex items-center desktop:self-start">
        <box-icon name="menu" size="md"></box-icon>
        <box-icon name="menu" rotate="90" size="md"></box-icon>{" "}
        <span className="font-light">Made in Berlin</span>
      </section>
    </div>
  );
}

export default Footer;
