import React from "react";
import emailjs from 'emailjs-com';
import config from './config';
import Swal from 'sweetalert2';

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const SERVICE_ID = config.service_id;
  const TEMPLATE_ID = config.template_id;
  const USER_ID = config.user_id;

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text
          })
        });
    e.target.reset();
    
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Opalenica&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-8">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  LOCATION
                </h2>
                <p className="mt-1">
                  Opalenica, Poznan, <br />
                  Poland
                </p>
              </div>
              <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-xs text-indigo-400 leading-relaxed">
                  michalciesielski2000@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+48 508 987 689</p>
              </div>
            </div>
          </div>


          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="lg:w-3/8 md:w-1/4 flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5 text-justify">
              I'm interested in freelance opportunities or interns - something good to dig deep into
              web development and gain much needed commercial experience. If you have other request
              or question just contact me using the form below.
            </p>
            <div className="relative mb-4">
              <label htmlFor="from_name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="from_email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </form>
      </div>
    </section>
  );
}