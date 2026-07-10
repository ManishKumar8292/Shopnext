import { useState } from "react";
import { toast } from "react-toastify";
import { HeroSection, FormSuccess, Form, GetInTouch } from "../index";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [success, setSuccess] = useState(false);

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    } else {
      toast.success("Form submitted successfully!");
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <section className="bg-slate-50">
      <HeroSection
        title={"Contact Us"}
        heading={"We'd Love to Hear From You"}
        description="Have questions, feedback, or need support? Fill out the form below and our team will get back to you as soon as possible."
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          {success ? (
            <FormSuccess />
          ) : (
            <Form
              handleOnChange={handleOnChange}
              handleSubmit={handleSubmit}
              formData={formData}
            />
          )}
        </div>
        <GetInTouch />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Ranchi,Jharkhand&output=embed"
            className="h-[400px] w-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
