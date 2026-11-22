import { locales, useI18n } from '../i18n';

export function LanguageSelect() {
  const { locale, setLocale } = useI18n();
  return (
    <label className="language-select">
      <span className="sr-only">Language</span>
      <select aria-label="Language" value={locale} onChange={(event) => setLocale(event.target.value as keyof typeof locales)}>
        {Object.entries(locales).map(([code, name]) => <option key={code} value={code}>{name}</option>)}
      </select>
    </label>
  );
}
