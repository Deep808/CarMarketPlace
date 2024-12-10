import React, {useState} from "react";
import axios from 'axios';

const ContactForm = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [username, setName] = useState('');
  const [showGreetings, setShowGreetings] = useState(false);
  const [emailInProgress, setEmailInProgress] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  const sendEmail = async () => {
    if (email === '' || message === '' || username === '') {
        alert('Please fill all the details of the Form');
    } else {
        try {
            setEmailInProgress(true);
            const response = await axios.post('https://resume-backend-9i7r.onrender.com/send-email', { name:username, email, message });
            console.log(response);
  
            if (response.status === 200) {
                setEmail('');
                setMessage('');
                setName('');
                setShowGreetings(true);
                setTimeout(() => {
                    setShowGreetings(false);
                }, 5000);
            }
        } catch (error) {
            console.error('Error in sending email' + error);
            alert('There is a problem in sending email');
        }
  
        setEmailInProgress(false);
    }
  }

  return (
    <form className="mx-auto bg-white rounded my-6" onSubmit={sendEmail}>
      {/* Form Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="firstName"
          >
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleName}
            value={username}
            placeholder="Your First Name"
            className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          />
        </div>

        {/* Last Name Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="lastName"
          >
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Your Last Name"
            className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            onChange={handleEmail}
            value={email}
            name="email"
            placeholder="Your Email"
            className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="mt-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleMessage}
          value={message}
          placeholder="Write Your Message Here..."
          className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          rows="5"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="mt-6 lg:w-1/4 mx-auto">
        <button
          type="submit"
          className="w-full p-4 bg-[#3B1C32] text-white font-medium shadow-sm cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
