import { useState, type FormEvent } from "react";
import { Reveal } from "../lib/hooks";
import { useI18n } from "../i18n";
import { CONTACT } from "../lib/data";
import SectionHeading from "./SectionHeading";
import {
  IconCheck,
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconPin,
  IconSend,
} from "./Icons";

type Status = "idle" | "sending" | "sent" | "error";

const CHANNELS = [
  {
    labelKey: "contact.channelPhone",
    icon: IconPhone,
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    accent: "#3B82F6",
  },
  {
    labelKey: "contact.channelEmail",
    icon: IconMail,
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    accent: "#06B6D4",
  },
  {
    labelKey: "contact.channelLinkedin",
    icon: IconLinkedIn,
    value: "linkedin.com/in/loubna-aktar-706b6b33b",
    href: CONTACT.linkedin,
    accent: "#3B82F6",
    external: true,
  },
  {
    labelKey: "contact.channelGithub",
    icon: IconGitHub,
    value: "github.com/loubnaaktar",
    href: CONTACT.github,
    accent: "#8B5CF6",
    external: true,
  },
];

export default function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/loubnaakt13@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.nom.value,
          email: form.email.value,
          subject: form.sujet.value,
          message: form.message.value,
          _template: "table",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("sent");
        form.reset();
        window.setTimeout(() => setStatus("idle"), 6000);
      } else {
        setErrorKey(
          /activation/i.test(data.message ?? "")
            ? "contact.errorActivation"
            : "contact.errorGeneric"
        );
        setStatus("error");
      }
    } catch {
      setErrorKey("contact.errorGeneric");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative pt-16 sm:pt-20 pb-6 sm:pb-10 overflow-hidden">
      <div
        className="absolute top-10 -right-40 w-[520px] h-[520px] rounded-full bg-primary/15 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow={t("contact.eyebrow")}
          title={
            <>
              {t("contact.titlePre")}
              <span className="text-grad">{t("contact.titleAccent")}</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-stretch">
          {/* Coordonnées */}
          <div className="flex flex-col gap-6">
            <Reveal variant="left">
              <p className="text-mist text-lg leading-relaxed">{t("contact.desc")}</p>
            </Reveal>

            <div className="flex flex-wrap gap-4">
              {CHANNELS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.labelKey} delay={i * 100}>
                    <a
                      href={c.href}
                      {...(c.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      title={t(c.labelKey)}
                      aria-label={`${t(c.labelKey)} — ${c.value}`}
                      className="group w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-8px_rgba(2,6,23,0.6)]"
                      style={{
                        color: c.accent,
                        background: `${c.accent}14`,
                        borderColor: `${c.accent}40`,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal variant="left" delay={300}>
              <div className="rounded-xl border border-dashed border-accent/30 bg-accent/[0.04] p-5 flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center flex-shrink-0">
                  <IconPin className="w-5 h-5" />
                </span>
                <p className="text-mist text-sm leading-relaxed">
                  <span className="text-snow font-semibold">{t("contact.location")}</span>
                  {t("contact.availA")}
                  <span className="text-accent">{t("contact.availB")}</span>.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Formulaire */}
          <Reveal variant="right" delay={150} className="h-full">
            <form
              onSubmit={onSubmit}
              className="glass-card rounded-xl p-7 sm:p-9 relative overflow-hidden h-full"
              aria-label={t("a11y.contactForm")}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-secondary"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between mb-7">
                <h3 className="font-display font-bold text-2xl text-snow">{t("contact.formTitle")}</h3>
                <span className="font-mono text-[11px] text-dim hidden sm:block">
                  {"<"}form{" />"}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nom" className="block font-mono text-[12px] text-mist mb-2">
                    {t("contact.labelName")} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    placeholder={t("contact.placeholderName")}
                    className="field"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[12px] text-mist mb-2">
                    {t("contact.labelEmail")} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("contact.placeholderEmail")}
                    className="field"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="sujet" className="block font-mono text-[12px] text-mist mb-2">
                  {t("contact.labelSubject")} <span className="text-accent">*</span>
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  required
                  placeholder={t("contact.placeholderSubject")}
                  className="field"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block font-mono text-[12px] text-mist mb-2">
                  {t("contact.labelMessage")} <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t("contact.placeholderMessage")}
                  className="field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-primary mt-7 w-full inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-semibold text-[15px] text-snow disabled:opacity-80"
              >
                {status === "sending" ? (
                  <>
                    <span
                      className="w-4.5 h-4.5 rounded-full border-2 border-snow/30 border-t-snow animate-spin"
                      aria-hidden="true"
                    />
                    {t("contact.sending")}
                  </>
                ) : status === "sent" ? (
                  <>
                    <IconCheck className="w-4.5 h-4.5" />
                    {t("contact.sent")}
                  </>
                ) : (
                  <>
                    {t("contact.submit")}
                    <IconSend className="w-4 h-4" />
                  </>
                )}
              </button>

              <p
                className={`mt-4 text-center font-mono text-[12px] transition-opacity duration-500 ${
                  status === "sent"
                    ? "text-accent opacity-100"
                    : status === "error"
                      ? "text-rose-400 opacity-100"
                      : "opacity-0"
                }`}
                role="status"
                aria-live="polite"
              >
                {status === "error"
                  ? `✗ ${t(errorKey)}`
                  : `✓ ${t("contact.thanks")}`}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
