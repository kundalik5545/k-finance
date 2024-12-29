import React from "react";

function About() {
  const websiteName = process.env.NEXT_PUBLIC_WEBSITENAME;
  const websiteEmail = process.env.NEXT_PUBLIC_WEBSITE_EMAIL;
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 font-inter">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">About Us</h2>

      <p className="mb-4">
        Welcome to
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {websiteName}
        </span>
        , a leading financial institution dedicated to providing secure and
        reliable banking services. Our mission is to empower individuals and
        businesses to manage their finances efficiently while delivering
        excellent customer service.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 ">Our Mission</h3>
      <p className="mb-4">
        At
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {" "}
          {websiteName}
        </span>
        , our mission is to make banking accessible and convenient for everyone.
        We aim to provide innovative financial solutions that meet the evolving
        needs of our customers. Our core values of trust, transparency, and
        customer-centricity guide everything we do.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">What We Offer</h3>
      <p className="mb-4">
        We offer a wide range of banking services to help you manage your
        finances with ease, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal and business checking and savings accounts.</li>
        <li>Loans and credit facilities to support your goals.</li>
        <li>
          Online and mobile banking for convenient access to your accounts.
        </li>
        <li>
          Financial planning and advisory services to help you make informed
          decisions.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Our Commitment to Security
      </h3>
      <p className="mb-4">
        The security of your financial data is our top priority. We employ
        state-of-the-art encryption technology and security protocols to
        safeguard your sensitive information and ensure that your banking
        experience is secure and hassle-free.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Our Team</h3>
      <p className="mb-4">
        Our team consists of experienced professionals committed to providing
        the best banking services. From customer support to financial advisors,
        we are here to help you at every step of your financial journey.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Why Choose Us?</h3>
      <p className="mb-4">
        With
        <span className=" text-blue-500 font-inter font-semibold text-lg">
          {" "}
          {websiteName}
        </span>
        , you can expect:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Personalized financial services tailored to your needs.</li>
        <li>
          24/7 access to your accounts through our online and mobile banking
          platforms.
        </li>
        <li>
          A commitment to customer satisfaction with a responsive support team.
        </li>
        <li>
          Advanced security measures to protect your financial information.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
      <p className="mb-4">
        If you have any questions or need assistance, feel free to reach out to
        us at{" "}
        <span className="underline text-blue-600 font-inter font-semibold">
          {" "}
          {websiteEmail}
        </span>
        . We are here to help!
      </p>

      <p className="text-sm text-gray-600 mt-6">Last updated: [06/Nov/2024]</p>
    </div>
  );
}

export default About;
