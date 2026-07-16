import { useRef, useState } from "react";
import {
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useAuth } from "../AuthContext.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Login() {
  const { user } = useAuth();
  const { t } = useLanguage();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message);
    }
  };

  const setUpRecaptcha = () => {
    if (!recaptchaRef.current) {
      recaptchaRef.current = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
    }
    return recaptchaRef.current;
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const verifier = setUpRecaptcha();
      const result = await signInWithPhoneNumber(auth, phone, verifier);
      setConfirmation(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await confirmation.confirm(otp);
    } catch (err) {
      setError(t("login.incorrectCode"));
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <section className="auth-page">
        <div className="auth-card">
          <h1>{t("login.loggedInTitle")}</h1>
          <p className="auth-subtitle">
            {t("login.signedInAs", { name: user.displayName || user.phoneNumber || user.email })}
          </p>
          <button className="btn-primary" onClick={() => signOut(auth)}>
            {t("login.logout")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>{t("login.title")}</h1>
        <p className="auth-subtitle">{t("login.subtitle")}</p>

        <button className="btn-google" onClick={handleGoogleLogin}>
          {t("login.continueGoogle")}
        </button>

        <div className="divider">{t("login.or")}</div>

        {!confirmation ? (
          <form onSubmit={handleSendCode} className="phone-form">
            <label htmlFor="phone">{t("login.phoneLabel")}</label>
            <input
              id="phone"
              type="tel"
              placeholder="+998 90 123 45 67"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? t("login.sending") : t("login.sendCode")}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="phone-form">
            <label htmlFor="otp">{t("login.otpLabel")}</label>
            <input
              id="otp"
              type="text"
              inputMode="numeric"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? t("login.verifying") : t("login.verify")}
            </button>
          </form>
        )}

        {error && <p className="auth-error">{error}</p>}

        <div id="recaptcha-container"></div>
      </div>
    </section>
  );
}
