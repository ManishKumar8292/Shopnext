const GetInTouch = () => {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-slate-800">Get in Touch</h2>

      <div className="space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-semibold">📍 Address</h3>

          <p className="mt-3 text-slate-600">
            123 Shopping Street,
            <br />
            Ranchi, Jharkhand 834001
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-semibold">📞 Phone</h3>

          <p className="mt-3 text-slate-600">+91 8651643009</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-semibold">📧 Email</h3>

          <p className="mt-3 text-slate-600">manishverma9122@gmail.com</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-semibold">🕒 Working Hours</h3>

          <p className="mt-3 text-slate-600">
            Monday - Saturday
            <br />
            9:00 AM - 8:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
