const FEATURES = [
  {
    title: "Learn Vocabulary",
    desc: "Master new English words with images, translations, and pronunciation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
  },
  {
    title: "Interactive Quizzes",
    desc: "Practice what you've learned through fun and engaging quizzes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11.5a3 3 0 1 1 3 3v1.5" />
        <path d="M12 19h.01" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    ),
  },
  {
    title: "Audio Pronunciation",
    desc: "Listen to the correct pronunciation of every word.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H2v6h4l5 4Z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M18.5 5.5a9 9 0 0 1 0 13" />
      </svg>
    ),
  },
  {
    title: "Progress Tracking",
    desc: "Keep track of completed lessons and monitor your learning journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-4 4" />
      </svg>
    ),
  },
  {
    title: "Smart Review System",
    desc: "Review difficult words regularly to improve long-term memory.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    title: "Rankings & Rewards",
    desc: "Earn points, maintain learning streaks, and compete on the leaderboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10l-1 9a4 4 0 0 1-8 0L7 4Z" />
        <path d="M5 4h2v4a3 3 0 0 1-3-3c0-.5.2-1 .5-1Z" />
        <path d="M19 4h-2v4a3 3 0 0 0 3-3c0-.5-.2-1-.5-1Z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-heading">
        <span className="eyebrow eyebrow--dark">Features</span>
        <h2>Everything you need to learn English</h2>
      </div>

      <div className="feature-grid feature-grid--5">
        {FEATURES.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h2>{f.title}</h2>
            <h3>{f.desc}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
