const terms = [
  {
    id: 1,
    title: "Acceptance of Terms",
    description: (
      <>
        By using <strong>Extroverts</strong> the Party Finder, you agree to
        these Terms and Conditions. If you do not agree with any part of these
        terms, please refrain from using our services.,
      </>
    ),
  },
  {
    id: 2,
    title: "Eligibility",
    description: (
      <>
        You must be at least 18 years old to use <strong>Extroverts</strong> the
        Party Finder. By using the service, you confirm that you meet this age
        requirement.
      </>
    ),
  },
  {
    id: 3,
    title: "User Conduct",
    description: (
      <>
        You agree to use <strong>Extroverts</strong> the Party Finder
        responsibly and to respect other users and venues. No inappropriate or
        illegal behavior will be tolerated.
      </>
    ),
  },
  {
    id: 4,
    title: "Limitation of Liability",
    description: (
      <>
        <strong>Extroverts</strong> the Party Finder is not responsible for any
        incidents, injuries, or damages that occur at events listed on our
        platform. Use the service at your own risk.
      </>
    ),
  },
  {
    id: 5,
    title: "Privacy Policy",
    description: (
      <>
        We value your privacy. For information on how we collect, use, and
        protect your data, please refer to our Privacy Policy.
      </>
    ),
  },
];
const TermsStep = ({ accepted, setAccepted, onNext }) => {
  return (
    <div className="terms min-h-screen  text-white px-6 py-12 flex justify-center">
      <div
        className="termWrapper bg-(--color-surface) p-5 rounded-xl"
        style={{ maxWidth: "450px" }}
      >
        <div className="termsContent">
          {/* Header */}
          <header className="text-center mb-12 flex flex-col items-center justify-center">
            <div className="headerLogo flex items-center justify-center">
              <img src="/logo.png" alt="Extroverts" className=" w-20 h-20" />
              <h1 className="text-3xl font-bold">Party Finder</h1>
            </div>
            <h2 className="text-3xl font-bold mb-2">TERMS & CONDITIONS</h2>
            <p className="text-gray-300 italic">
              Let's Get the Rules of the Party Started!
            </p>
          </header>

          {/* Terms Sections */}
          <section className="max-w-3xl mx-auto space-y-8">
            {terms &&
              terms.map((term) => (
                <div key={term.id}>
                  <h3 className="text-purple-400 text-[16px] font-semibold   mb-2">
                    {term.id}. {term.title}
                  </h3>
                  <p className="text-gray-300 text-[12px]">
                    {term.description}
                  </p>
                </div>
              ))}
            <label className="flex cursor-pointer items-start gap-3 ">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 accent-indigo-500"
              />

              <span className="text-[12px] text-zinc-300">
                I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </label>
            <div className="w-full flex items-center justify-center">
              <button
                onClick={onNext}
                disabled={!accepted}
                className="steps_button w-full rounded-xl px-5 py-3 font-semibold text-(--color-text) transition-all duration-300"
              >
                Accept & Continue
              </button>
            </div>
          </section>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-purple-800/30 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Feel free to contact us if you need any further information about
              our Terms & Conditions.
            </p>
            <button
              disabled={!accepted}
              onClick={onNext}
              className="footer_button text-white font-semibold px-6 py-3 rounded-md"
            >
              Contact Us
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-gray-400 text-sm">
            <p>
              By using <strong>Extroverts</strong> the Party Finder, you're
              agreeing to dance at your own risk! Party safely and responsibly.
            </p>
            <p className="mt-2">
              © 2026 <strong>Extroverts</strong> the Party Finder. All rights
              reserved. | Privacy Policy | Terms of Service
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TermsStep;
