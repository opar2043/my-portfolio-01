import React from "react";

const Form = () => {
  return (
    <form action="#" className="space-y-4 w-full  ">
      <div>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded-lg border border-yellow-500 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Name"
          type="text"
          id="name"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-lg border border-yellow-500 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Email address"
            type="email"
            id="email"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full rounded-lg border border-yellow-500 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Phone Number"
            type="tel"
            id="phone"
          />
        </div>
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full rounded-lg border border-yellow-500 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Message"
          rows="8"
          id="message"
        ></textarea>
      </div>

      <div className="mt-4 text-center">
        <button
          type="submit"
          className="inline-block w-full rounded-lg  px-5 py-3 font-medium text-black sm:w-auto bg-yellow-500 hover:text-white hover:bg-violet-900"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
};

export default Form;
