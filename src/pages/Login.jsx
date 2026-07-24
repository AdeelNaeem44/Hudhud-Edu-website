import { useRef, useState } from "react";
import {
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
  deleteUser,
  reauthenticateWithPopup,
  reauthenticateWithPhoneNumber,
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

  // --- delete account state ---
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [needsReauth, setNeedsReauth] = useState(false);
  const [reauthPhoneConfirmation, setReauthPhoneConfirmation] = useState(null);
  const [reauthOtp, setReauthOtp] = useState("");
  const deleteRecaptchaRef = useRef(null);

  const isGoogleUser = user?.providerData?.some((p) => p.providerId === "google.com");
  const isPhoneUser = user?.providerData?.some((p) => p.providerId === "phone");

  const openDeleteModal = () => {
    setDeleteError("");
    setNeedsReauth(false);
    setReauthPhoneConfirmation(null);
    setReauthOtp("");
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    if (deleteLoading) return;
    setShowDeleteModal(false);
    setDeleteError("");
    setNeedsReauth(false);
    setReauthPhoneConfirmation(null);
    setReauthOtp("");
  };

  const performDelete = async () => {
    setDeleteLoading(true);
    setDeleteError("");
    try {
      await deleteUser(auth.currentUser);
      setShowDeleteModal(false);
    } catch (err) {
      if (err.code === "auth/requires-recent-login") {
        setNeedsReauth(true);
      } else {
        setDeleteError(err.message || t("login.deleteGenericError"));
      }
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleReauthGoogle = async () => {
    setDeleteLoading(true);
    setDeleteError("");
    try {
      await reauthenticateWithPopup(auth.currentUser, googleProvider);
      await performDelete();
    } catch (err) {
      setDeleteError(err.message || t("login.deleteGenericError"));
      setDeleteLoading(false);
    }
  };

  const setUpDeleteRecaptcha = () => {
    if (!deleteRecaptchaRef.current) {
      deleteRecaptchaRef.current = new RecaptchaVerifier(auth, "recaptcha-container-delete", {
        size: "invisible",
      });
    }
    return deleteRecaptchaRef.current;
  };

  const handleReauthPhoneSend = async () => {
    setDeleteLoading(true);
    setDeleteError("");
    try {
      const verifier = setUpDeleteRecaptcha();
      const result = await reauthenticateWithPhoneNumber(auth.currentUser, user.phoneNumber, verifier);
      setReauthPhoneConfirmation(result);
    } catch (err) {
      setDeleteError(err.message || t("login.deleteGenericError"));
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleReauthPhoneVerify = async (e) => {
    e.preventDefault();
    setDeleteLoading(true);
    setDeleteError("");
    try {
      await reauthPhoneConfirmation.confirm(reauthOtp);
      setNeedsReauth(false);
      setReauthPhoneConfirmation(null);
      setReauthOtp("");
      await performDelete();
    } catch (err) {
      setDeleteError(t("login.incorrectCode"));
      setDeleteLoading(false);
    }
  };

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
          <button className="btn-danger-link" onClick={openDeleteModal}>
            {t("login.deleteAccount")}
          </button>
        </div>

        {showDeleteModal && (
          <div className="app-modal-backdrop" onClick={closeDeleteModal}>
            <div className="app-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="app-modal-close"
                onClick={closeDeleteModal}
                aria-label="Close"
                disabled={deleteLoading}
              >
                &times;
              </button>

              {!needsReauth ? (
                <>
                  <h3>{t("login.deleteConfirmTitle")}</h3>
                  <p className="app-modal-subtitle">{t("login.deleteConfirmText")}</p>
                  {deleteError && <p className="auth-error">{deleteError}</p>}
                  <div className="delete-modal-actions">
                    <button className="btn-google" onClick={closeDeleteModal} disabled={deleteLoading}>
                      {t("login.cancel")}
                    </button>
                    <button className="btn-danger" onClick={performDelete} disabled={deleteLoading}>
                      {deleteLoading ? t("login.deleting") : t("login.deleteConfirmButton")}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3>{t("login.reauthTitle")}</h3>
                  <p className="app-modal-subtitle">{t("login.reauthText")}</p>
                  {deleteError && <p className="auth-error">{deleteError}</p>}

                  {isGoogleUser && (
                    <button className="btn-google" onClick={handleReauthGoogle} disabled={deleteLoading}>
                      {deleteLoading ? t("login.verifying") : t("login.reauthGoogleButton")}
                    </button>
                  )}

                  {isPhoneUser && !reauthPhoneConfirmation && (
                    <button className="btn-primary" onClick={handleReauthPhoneSend} disabled={deleteLoading}>
                      {deleteLoading ? t("login.sending") : t("login.reauthPhoneSendButton")}
                    </button>
                  )}

                  {isPhoneUser && reauthPhoneConfirmation && (
                    <form onSubmit={handleReauthPhoneVerify} className="phone-form">
                      <label htmlFor="reauth-otp">{t("login.otpLabel")}</label>
                      <input
                        id="reauth-otp"
                        type="text"
                        inputMode="numeric"
                        value={reauthOtp}
                        onChange={(e) => setReauthOtp(e.target.value)}
                        required
                      />
                      <button className="btn-primary" type="submit" disabled={deleteLoading}>
                        {deleteLoading ? t("login.verifying") : t("login.verify")}
                      </button>
                    </form>
                  )}

                  <div id="recaptcha-container-delete"></div>
                </>
              )}
            </div>
          </div>
        )}
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
