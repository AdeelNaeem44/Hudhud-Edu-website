import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="static-page">
      <h1>{t("notFound.title")}</h1>
      <p>{t("notFound.text")}</p>
      <Link to="/" className="btn-primary">
        {t("notFound.backHome")}
      </Link>
    </section>
  );
}
