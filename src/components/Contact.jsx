import React, { useState } from "react";
import toast from "react-hot-toast";
import Reveal from "./Reveal";

const Contact = () => {
  const contactAccessKey = import.meta.env.VITE_CONTACT_ACCESS_KEY || 0;
  const [contactData, setContactData] = useState({
    site: "Portfolio",
    name: "",
    email: "",
    message: "",
    access_key: `${contactAccessKey}`,
  });

  const onContactClick = async () => {
    if (
      contactData.name === "" ||
      contactData.email === "" ||
      contactData.message === ""
    ) {
      toast.error("All fields are required");
      return;
    }

    const json = JSON.stringify(contactData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully.");
      setContactData({
        name: "",
        email: "",
        message: "",
        access_key: "1f2da906-be37-4c2f-bc52-537023bcbea4",
      });
    } else {
      toast.error("error: please try again later");
    }
  };
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Skilled in React.js, TypeScript, Tailwind CSS for frontend development, and Python for backend services such as creating Windows services and handling DICOM files. Proficient in Node.js, Express, and MongoDB for building robust backend systems.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  10
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Year of experience</span>
                </p>
              </div>
            </div>
          </div>
          <form
            className="max-w-6xl p-5 md:p-12"
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
              onContactClick();
            }}
          >
            <p className="text-gray-100 font-blod text-xl mb-2">
              Let's connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              value={contactData.name}
              onChange={(e) => {
                setContactData((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              value={contactData.email}
              onChange={(e) => {
                setContactData((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  };
                });
              }}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              id="textarea"
              placeholder="Your Message ..."
              rows={4}
              name="textarea"
              cols={30}
              value={contactData.message}
              onChange={(e) => {
                setContactData((prev) => {
                  return {
                    ...prev,
                    message: e.target.value,
                  };
                });
              }}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="sumbit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
