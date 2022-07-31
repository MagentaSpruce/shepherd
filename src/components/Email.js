import Button from '../ui/Button';

const Email = () => {
  return (
    <div className="bg-red-200 h-[30rem]    max-w-xl">
      <h2>Email the author:</h2>
      <form className="w-[90vw] max-w-lg p-2 bg-yellow-300 mx-auto h-[28rem]">
        <div className="p-2 flex justify-center">
          <label htmlFor="name">Name:&nbsp;</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded-lg indent-1"
          />
        </div>
        <div className="flex justify-center p-2">
          <label htmlFor="email">Email:&nbsp;</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded-lg indent-1"
          />
        </div>
        <div className="flex justify-center p-2">
          <textarea
            name="message"
            id="message"
            cols="35"
            rows="11"
            className="rounded-md indent-1"
            placeholder="Write message here..."
          ></textarea>
        </div>
        <Button
          className="px-3 py-3 text-center rounded-lg shadow-lg   mt-2 shadow-indigo-500 hover:scale-110 active:scale-100 cursor-pointer transition-all text-xl tracking-wider bg-cyan-400"
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Email;
