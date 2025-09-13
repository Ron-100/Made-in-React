import React, { useState } from "react";
import RunningClub from "../../JoinNow/RunningClub";

function FAQ() {

    
  const faqs = [
    {
      question: "Do I need to be an experienced runner to join?",
      answer:
        "Not at all! We welcome runners of all levels, from complete beginners to seasoned marathoners.",
    },
    {
      question: "How often does the club meet?",
      answer:
        "We organize group runs three times a week and have additional training sessions on weekends.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "Yes, we offer flexible membership plans. Check out our Pricing page for details.",
    },
    {
      question: "Do you provide training for races?",
      answer:
        "Absolutely! Our coaches create personalized training plans for 5K, 10K, half-marathons, and full marathons.",
    },
    {
      question: "Can I try a session before joining?",
      answer:
        "Yes! We offer a free trial run so you can experience our community and coaching style before committing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div id="thefaq">
        <div className="faq">
          <h1>
            Frequently asked <br /> questions
          </h1>
        </div>

      <div className="faq-page">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to the most common questions about our running club.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <RunningClub />
      </div>
    </>
  );
}

export default FAQ;
