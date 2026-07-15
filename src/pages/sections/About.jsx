const LESSON_INCLUDES = [
  "Vocabulary with Uzbek translations",
  "Image-based learning",
  "Audio pronunciation",
  "Interactive quizzes",
  "Smart review system",
  "Progress tracking",
  "Gamified learning with points and rankings",
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">About Hudhud Edu</span>
        <h2>A structured, step-by-step learning experience</h2>
        <h3 className="section-subtitle">
          HUDHUD EDU helps learners improve their English vocabulary through
          a structured, step-by-step learning experience.
        </h3>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Every lesson combines</h3>
          <ul className="about-checklist">
            {LESSON_INCLUDES.map((item) => (
              <li key={item}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-card">
          <h3>Our mission</h3>
          <h4>
            Our mission is to make English vocabulary learning easier, more
            engaging, and accessible for everyone.
          </h4>
        </div>
      </div>
    </section>
  );
}
