import { useState } from 'react';
import Button from '../ui/Button';

const Email = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="bg-orange-600 h-[30rem]    max-w-xl">
      <h2 className="text-xl">Email the author</h2>
      <form
        onSubmit={handleSubmit}
        className="w-[90vw] max-w-lg p-2 bg-orange-300 mx-auto h-[26rem]  border-amber-500 border-4 rounded-md"
      >
        <div className="p-2 flex justify-center">
          <label htmlFor="name">Name:&nbsp;</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded-lg indent-1 w-[80%] bg-orange-100"
            required
            minLength="4"
          />
        </div>
        <div className="flex justify-center p-2">
          <label htmlFor="email">Email:&nbsp;</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded-lg indent-1 w-[80%] bg-orange-100"
            required
          />
        </div>
        <div className="flex justify-center p-2">
          <textarea
            name="message"
            id="message"
            cols="35"
            rows="10"
            className="rounded-md indent-1 bg-orange-100"
            placeholder="Write message here..."
          ></textarea>
        </div>

        <Button
          className="px-3 py-1 text-center rounded-lg shadow-lg   mt-2 shadow-orange-500 hover:scale-110 active:scale-100 cursor-pointer transition-all text-xl tracking-wider bg-orange-600 text-orange-300 font-semibold"
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Email;
