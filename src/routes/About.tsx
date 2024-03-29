function About() {
  return (
    <>
      <div className="aboutImgHeader bgImg m-8 flex justify-center items-center box-border">
        <div className="desktop:text-9xl font-bold text-orange text-8xl">
          Ableton
        </div>
      </div>
      <div className="aboutText mx-auto my-0 w-8/12">
        <h1 className="text-2xl font-bold py-4">
          We make Live, Push and Link — unique software and hardware for music
          creation and performance. With these products, our community of users
          creates amazing things.
        </h1>
        <p className="text-lg">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
      <div className="aboutImg grid my-8 grid-cols-2 items-center">
        <div className="rightImg bgImg inline-block relative z-10"></div>
        <div className="yellowBox bg-yellow z-0 row-start-1 col-end-3 justify-self-end"></div>
        <div className="leftImg bgImg inline-block relative z-10 col-end-3 row-start-1 justify-self-end"></div>
      </div>
      <div className="aboutText mx-auto my-0 w-8/12">
        <h1 className="text-2xl font-bold py-4">
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </h1>
        <p className="text-lg">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
      </div>
      <div className="aboutImg2 bgImg mx-auto my-4"></div>
      <div className="aboutText mx-auto my-0 w-8/12">
        <h1 className="text-2xl font-bold py-4">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </h1>
        <p className="text-lg">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </div>
      <div className="aboutImg3 grid my-8 grid-cols-2 items-center">
        <div className="leftImg z-10 row-start-1 col-start-1 justify-self-start">
          <div className="img1 bgImg"></div>
          <div className="img2 bgImg"></div>
        </div>
        <div className="greenBox bg-green z-0 row-start-1 col-start-1 justify-self-start"></div>
        <div className="rightImg bgImg row-start-1 col-end-3 justify-self-end z-10"></div>
      </div>
      <div className="aboutText mx-auto my-0 w-8/12">
        <h1 className="text-2xl font-bold py-4">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </h1>
        <p className="text-lg">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </div>
      <div className="aboutImg4 bgImg mx-auto my-4"></div>
      <div className="aboutText mx-auto my-0 w-8/12">
        <h1 className="text-2xl font-bold py-4">
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </h1>
        <p className="text-lg">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other
        </p>
        <p className="text-lg">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </div>
      <div className="aboutImg grid my-8 grid-cols-2 items-center">
        <div className="rightImg bgImg row-start-1 col-start-1 z-10"></div>
        <div className="purpleBox bg-purple z-0 row-start-1 col-end-3 col-start-1 justify-self-center"></div>
        <div className="leftImg bgImg z-10 col-end-3 row-start-1 justify-self-end"></div>
      </div>
      <div className="aboutText mx-auto my-0 w-8/12">
        <h1 className="text-2xl font-bold py-4">
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </h1>
        <p className="text-lg">
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </p>
      </div>
      <div className="aboutImg w-full flex flex-col justify-center items-center h-min desktop:flex-row">
        <div className="w-2/5 bgImg leftImg3 ml-0"></div>

        <div className="w-2/5 bg-light_blue blueBox m-0 flex justify-center p-12 gap-8 flex-col">
          <span className="font-medium text-2xl">
            We’re really proud of the work we’ve done so far. But there’s so
            much more to come. If you’d like to be a part of it, please join us.
          </span>
          <span>
            <a href="#" className="font-medium text-2xl text-blue">
              See Latest Jobs!
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
