import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10 text-(--color-text) flex flex-col items-center justify-center ">
      <h2 className="text-[20px] font-bold mb-5">Looking for a party ?</h2>
      <p className="max-w-md text-center text-[14px] mb-3">
        We've got you covered! Instantly find the best nearby clubs and events
        happening around your location. Let's get the parted started
      </p>
      <small className="mb-5 text-[12px] text-center">
        <strong className="text-red-500 ">Warning:</strong>Using this site may
        lead to spontaneous dancing and unsolicited high-fives!
      </small>
      <Link to="signup">
        <button className="px-5 py-2 footer_button font-bold">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Footer;
