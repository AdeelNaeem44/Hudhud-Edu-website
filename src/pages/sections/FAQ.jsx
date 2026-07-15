import { useState } from "react";

const FAQS = [
  {
    q: "What is HUDHUD EDU?",
    a: "HUDHUD EDU is an English vocabulary learning platform created specifically for Uzbek learners.",
  },
  {
    q: "How much does a subscription cost?",
    a: "Weekly: 20,000 UZS. Monthly: 60,000 UZS.",
  },
  {
    q: "What do I get with a subscription?",
    a: "Premium access unlocks all lessons, quizzes, and additional learning features.",
  },
  {
    q: "Can I use the app without a subscription?",
    a: "Yes, but some content and premium features are only available with an active subscription.",
  },
  {
    q: "How does vocabulary learning work?",
    a: "Each lesson introduces words with pronunciation, images, and Uzbek translations, followed by practice and review quizzes.",
  },
  {
    q: "Does the app save my progress?",
    a: "Yes. Your lessons, memorized words, points, rankings, and learning progress are automatically saved.",
  },
  {
    q: "What happens if my subscription expires?",
    a: "Premium content becomes unavailable until your subscription is renewed.",
  },
  {
    q: "Can I restore my subscription?",
    a: "Yes. Purchased subscriptions can be restored after successful payment verification.",
  },
  {
    q: "Can I update my profile information?",
    a: "Yes. You can edit supported profile information within the app.",
  },
  {
    q: "Does HUDHUD EDU send notifications?",
    a: "Yes. The app may send notifications about lessons, rankings, subscriptions, progress, and important announcements.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use reasonable technical and administrative measures to protect your personal information.",
  },
  {
    q: "Can I delete my account?",
    a: "Yes. You can request account deletion through the app. Your data will be processed according to our data retention policies.",
  },
  {
    q: "How can I contact support?",
    a: "Email us at support.hudhudedu@gmail.com",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="faq-answer">
        {item.q === "How can I contact support?" ? (
          <p>
            Email us at{" "}
            <a href="mailto:support.hudhudedu@gmail.com">support.hudhudedu@gmail.com</a>
          </p>
        ) : (
          <p>{item.a}</p>
        )}
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">FAQ</span>
        <h2>Frequently asked questions</h2>
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
