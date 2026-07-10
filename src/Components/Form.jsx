import { Input } from "../index";

const Form = ({ handleOnChange, handleSubmit, formData }) => {
  return (
    <>
      {" "}
      <h2 className="mb-8 text-3xl font-bold text-slate-800">
        Send Us a Message
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Input
            name={"name"}
            placeholder="Enter Your Name"
            type={"text"}
            text="Full Name"
            handleOnChange={handleOnChange}
            value={formData.name}
          />
        </div>

        <div>
          <Input
            name={"email"}
            placeholder="Enter Your Email"
            type={"email"}
            text="Email"
            handleOnChange={handleOnChange}
            value={formData.email}
          />
        </div>

        <div>
          <Input
            name={"subject"}
            placeholder="Enter Your Subject"
            type={"text"}
            text="Subject"
            handleOnChange={handleOnChange}
            value={formData.subject}
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Message
          </label>

          <textarea
            onChange={handleOnChange}
            value={formData.message}
            name="message"
            rows="5"
            placeholder="Write your message..."
            className="w-full resize-none rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-indigo-600"
          ></textarea>
        </div>

        <button className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </>
  );
};

export default Form;
