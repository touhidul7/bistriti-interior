'use client'
import React from 'react';
import toast from 'react-hot-toast';

export default function Page() {
  async function handleSubmit(event) {
    toast('Sending....');
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "63d92490-b288-426c-b811-46175ad3574a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      toast.success('Message Sent Successfully!')
    }
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.6233825219915!2d89.24702708024897!3d25.749965418981578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32dbd346d6e9b%3A0x1bb21462396e45c4!2sBistriti%20Architecture!5e0!3m2!1sen!2sbd!4v1731177198469!5m2!1sen!2sbd"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
              ></iframe>
              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Photo booth tattooed prism, Portland taiyaki hoodie neutra typewriter</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-red-500 leading-relaxed">example@email.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-10 rounded-lg">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <p className="leading-relaxed text-2xl font-bold text-center mb-5 text-white">
                Contact Us
              </p>
              <Input name={"name"} type={"text"} label={"Name"} />
              <Input name={"email"} type={"email"} label={"Email"} />
              <TextArea name={"message"} label={"Message"} />

              {/* Custom Field */}
              <input type="hidden" name="from_name" value="Bistriti Contact Form"></input>
              <input type="hidden" name="subject" value="Client Message"></input>
              <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

const Input = ({ type, name, label, placeholder }) => {

  return (
    <>
      <div className="relative mb-4">
        <label htmlFor={name} className="leading-7 text-sm text-gray-600">{label}</label>
        <input
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          className="w-full bg-gray-900 rounded border border-gray-800 focus:border-none focus:ring-2 focus:ring-red-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </>
  );
};
const TextArea = ({ name, label, placeholder }) => {

  return (
    <>
      <div className="relative mb-4">
        <label htmlFor={name} className="leading-7 text-sm text-gray-600">{label}</label>
        <textarea
          placeholder={placeholder}
          id={name}
          name={name}
          className="w-full bg-gray-900 rounded border border-gray-800 focus:border-none focus:ring-2 focus:ring-red-500 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
    </>
  );
};