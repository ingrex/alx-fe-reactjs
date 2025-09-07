import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Contact Page</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you, {name}! We’ll contact you soon.</p>
      )}
    </div>
  );
}

export default Contact;
