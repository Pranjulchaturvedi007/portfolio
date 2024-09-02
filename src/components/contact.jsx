import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-6">
      <div className="container mx-auto px-4">
        <p className="text-neutral-400 mb-4">Feel free to reach out to me via email or LinkedIn:</p>
        <ul className=" text-neutral-300">
          <li><a target='_blank' href="mailto:pranjulchaturvedi561@gmail.com">Email</a></li>
          <li><a target='_blank'  href="https://www.linkedin.com/in/pranjul-chaturvedi-049bb2278">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
