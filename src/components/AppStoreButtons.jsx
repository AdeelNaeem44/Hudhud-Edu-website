// Set these to your real store URLs once each is published.
const APP_STORE_URL = null; // e.g. "https://apps.apple.com/app/idXXXXXXXXX"
const GOOGLE_PLAY_URL = null; // e.g. "https://play.google.com/store/apps/details?id=com.hudhudedu.app"

function GooglePlayIcon() {
  // Official-style 4-color Play Store triangle
  return (
    <svg viewBox="0 0 512 512" className="store-badge-icon">
      <path fill="#00d2ff" d="M99 20c-8 8-13 20-13 35v402c0 15 5 27 13 35l3 2 225-225v-5L102 18l-3 2z" />
      <path fill="#00f076" d="M401 274l-75-75v-5l75-75 2 1 89 51c25 14 25 38 0 52l-89 51h-2z" />
      <path fill="#ff3a44" d="M328 274 102 492c8 9 22 10 37 2l269-152-80-68z" />
      <path fill="#ffcd00" d="M328 199l80-68L139 20c-15-9-29-8-37 1l226 178z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#ffffff" className="store-badge-icon store-badge-icon--apple">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.017-.12-.05-.25-.05-.4 0-1.13.55-2.29 1.22-3.05.72-.83 1.98-1.46 2.94-1.5.03.11.05.22.05.33.1.01.2.01.3.01ZM20.5 17.8c-.53 1.22-.78 1.77-1.46 2.85-.95 1.5-2.29 3.38-3.95 3.4-1.47.02-1.85-.96-3.84-.95-1.99.01-2.41.97-3.88.95-1.66-.02-2.93-1.7-3.88-3.2C1.05 17.6.2 13.9 1.5 11.4c.66-1.28 1.85-2.1 3.14-2.12 1.22-.02 2.37.83 3.11.83.74 0 2.13-1.02 3.6-.87.6.03 2.31.24 3.4 1.83-.09.06-2.03 1.19-2.01 3.54.02 2.81 2.46 3.75 2.49 3.76-.02.07-.39 1.34-1.23 2.63Z" />
    </svg>
  );
}

function StoreBadge({ href, comingSoon, icon, topLine, bottomLine }) {
  const content = (
    <>
      {icon}
      <span className="store-badge-text">
        <span className="store-badge-top">{topLine}</span>
        <span className="store-badge-bottom">{bottomLine}</span>
      </span>
    </>
  );

  if (comingSoon || !href) {
    return (
      <span className="store-badge" aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <a className="store-badge" href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

export default function AppStoreButtons() {
  return (
    <div className="store-badges">
      <StoreBadge
        href={GOOGLE_PLAY_URL}
        comingSoon={!GOOGLE_PLAY_URL}
        topLine={GOOGLE_PLAY_URL ? "GET IT ON" : "Coming soon on"}
        bottomLine="Google Play"
        icon={<GooglePlayIcon />}
      />
      <StoreBadge
        href={APP_STORE_URL}
        comingSoon={!APP_STORE_URL}
        topLine={APP_STORE_URL ? "Download on the" : "Coming soon on the"}
        bottomLine="App Store"
        icon={<AppleIcon />}
      />
    </div>
  );
}