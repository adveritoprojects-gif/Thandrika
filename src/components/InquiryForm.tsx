"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck, CircleAlert } from "lucide-react";
import { CONTACT_PAGE, UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";

type Field = "name" | "phone" | "email" | "preferred" | "message";

type Values = Record<Field, string>;

const EMPTY: Values = {
  name: "",
  phone: "",
  email: "",
  preferred: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function normalizePhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

export default function InquiryForm() {
  const { t } = useLanguage();
  const { form } = CONTACT_PAGE;
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(all: Values): Partial<Record<Field, string>> {
    const next: Partial<Record<Field, string>> = {};
    if (all.name.trim().length < 2) next.name = t(form.errors.name);
    if (normalizePhone(all.phone).length !== 10)
      next.phone = t(form.errors.phone);
    if (!EMAIL_RE.test(all.email.trim())) next.email = t(form.errors.email);
    if (!all.preferred) next.preferred = t(form.errors.preferred);
    if (all.message.trim().length < 5) next.message = t(form.errors.message);
    return next;
  }

  function update(field: Field, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
    }
  }

  const fieldClass = (field: Field) =>
    `w-full border bg-ivory px-4 py-3.5 text-[0.98rem] text-charcoal placeholder:text-charcoal/40 transition-colors duration-300 focus:outline-none ${
      errors[field]
        ? "border-red-700/70 focus:border-red-700"
        : "border-gold/35 focus:border-maroon"
    }`;

  if (submitted) {
    return (
      <div
        className="border border-gold/40 bg-ivory p-8 text-center sm:p-12"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-maroon">
          <CircleCheck className="h-8 w-8" strokeWidth={1.4} />
        </span>
        <h3 className="mt-6 font-display text-[1.7rem] font-semibold text-maroon-dark sm:text-[2rem]">
          {t(form.successTitle)}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-[0.97rem] leading-relaxed text-charcoal/65">
          {t(form.successText)}
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY);
            setErrors({});
            setSubmitted(false);
          }}
          className="btn-outline-dark mt-8"
        >
          {t(form.successAgain)}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-gold/35 bg-ivory p-6 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="eyebrow mb-2 block text-gold">
            {t(form.fields.name)} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t(form.placeholders.name)}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass("name")}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-2 flex items-center gap-2 text-[0.84rem] text-red-800"
            >
              <CircleAlert className="h-4 w-4" strokeWidth={1.6} />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="eyebrow mb-2 block text-gold">
            {t(form.fields.phone)} *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={t(form.placeholders.phone)}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass("phone")}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="mt-2 flex items-center gap-2 text-[0.84rem] text-red-800"
            >
              <CircleAlert className="h-4 w-4" strokeWidth={1.6} />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="eyebrow mb-2 block text-gold">
            {t(form.fields.email)} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t(form.placeholders.email)}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass("email")}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-2 flex items-center gap-2 text-[0.84rem] text-red-800"
            >
              <CircleAlert className="h-4 w-4" strokeWidth={1.6} />
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="preferred" className="eyebrow mb-2 block text-gold">
            {t(form.fields.preferred)} *
          </label>
          <select
            id="preferred"
            name="preferred"
            value={values.preferred}
            onChange={(event) => update("preferred", event.target.value)}
            aria-invalid={Boolean(errors.preferred)}
            aria-describedby={errors.preferred ? "preferred-error" : undefined}
            className={`${fieldClass("preferred")} appearance-none`}
          >
            <option value="">{t(form.selectDefault)}</option>
            {UI.consultationOptions.map((option) => (
              <option key={option.en} value={t(option)}>
                {t(option)}
              </option>
            ))}
          </select>
          {errors.preferred && (
            <p
              id="preferred-error"
              className="mt-2 flex items-center gap-2 text-[0.84rem] text-red-800"
            >
              <CircleAlert className="h-4 w-4" strokeWidth={1.6} />
              {errors.preferred}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="eyebrow mb-2 block text-gold">
            {t(form.fields.message)} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t(form.placeholders.message)}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClass("message")} resize-y`}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-2 flex items-center gap-2 text-[0.84rem] text-red-800"
            >
              <CircleAlert className="h-4 w-4" strokeWidth={1.6} />
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className="btn-maroon btn-interactive group mt-7 w-full sm:w-auto">
        {t(form.submit)}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      </button>

      <p className="mt-4 text-[0.82rem] text-charcoal/50">
        {t(UI.fieldsRequired)} {t(UI.formPrivacy)}
      </p>
    </form>
  );
}
