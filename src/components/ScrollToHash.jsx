import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// react-router doesn't scroll to #hash targets automatically. This runs
// on every route change and scrolls to the matching section if the URL
// has a hash (e.g. clicking "Features" from the Privacy Policy page,
// which first navigates to "/" then needs to scroll down to #features).
export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay lets the target page render first.
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);

  return null;
}
