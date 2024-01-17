function Footer() {
  return (
    <div className="p-16 flex flex-col gap-8">
      <section className="font-semibold text-4xl">Ableton</section>
      <section>
        <p className="font-semibold pb-2">Sign up to our newsletter</p>
        <span className="font-light">
          Enter your email address to stay up to date with the latest offers,
          tutorials, downloads, surveys and more.
        </span>
      </section>
      <section className="">
        <form action="" className="flex flex-grow">
          <input
            type="mail"
            placeholder="Email Address"
            className="bg-gray py-2 h-8 px-2 font-light flex-grow"
          />
          <button className="bg-blue text-white py-2 px-4">Sign Up</button>
        </form>
      </section>
      <section>
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
      </section>
      <section>
        <box-icon type="logo" name="youtube" size="lg"></box-icon>
        <box-icon type="logo" name="facebook-square" size="lg"></box-icon>
        <box-icon name="instagram-alt" type="logo" size="lg"></box-icon>
        <box-icon type="logo" name="twitter" size="lg"></box-icon>
      </section>
      <section className="flex flex-col gap-2 font-light">
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
      <section className="flex flex-col gap-2 text-xs">
        <p>Contact Us</p>
        <p>Press Resources</p>
        <p>Legal Info</p>
        <p>Privacy Policy</p>
        <p>Cookie Settings</p>
        <p>Imprint</p>
      </section>
      <section className="flex items-center">
        <box-icon name="menu" size="md"></box-icon>
        <box-icon name="menu" rotate="90" size="md"></box-icon>{" "}
        <span className="font-light">Made in Berlin</span>
      </section>
    </div>
  );
}

export default Footer;
