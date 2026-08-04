import { useState, type FormEvent } from "react";
import { Reveal } from "../lib/hooks";
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
    icon: IconPhone,
    label: "Téléphone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    accent: "#3B82F6",
  },
  {
    icon: IconMail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    accent: "#06B6D4",
  },
  {
    icon: IconLinkedIn,
    label: "LinkedIn",
    value: "linkedin.com/in/loubna-aktar-706b6b33b",
    href: CONTACT.linkedin,
    accent: "#3B82F6",
    external: true,
  },
  {
    icon: IconGitHub,
    label: "GitHub",
    value: "github.com/loubnaaktar",
    href: CONTACT.github,
    accent: "#8B5CF6",
    external: true,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
        setErrorMsg(
          /activation/i.test(data.message ?? "")
            ? "Le formulaire n'est pas encore activé. Ouvrez l'email « Activate Form » envoyé à votre adresse et cliquez sur le lien d'activation, puis réessayez."
            : "Une erreur est survenue. Réessayez dans un instant."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Une erreur est survenue. Réessayez dans un instant.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div
        className="absolute top-10 -right-40 w-[520px] h-[520px] rounded-full bg-primary/15 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={
            <>
              Construisons quelque chose <span className="text-grad">ensemble</span>
            </>
          }
          desc="Un stage, une alternance, un premier poste, une mission freelance ? Parlons-en — je réponds à tous les messages sous 24 heures."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Coordonnées */}
          <div className="space-y-4">
            {CHANNELS.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <span
                  className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ color: c.accent, background: `${c.accent}14`, borderColor: `${c.accent}45` }}
                >
                  <Icon className="w-5 h-5" />
                </span>
              );
              return (
                <Reveal key={c.label} variant="left" delay={i * 100}>
                  {c.external ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${c.label} — ${c.value}`}
                      className="glass-card card-sheen group flex items-center justify-center rounded-xl p-5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <a
                      href={c.href}
                      aria-label={`${c.label} — ${c.value}`}
                      className="glass-card card-sheen group flex items-center justify-center rounded-xl p-5"
                    >
                      {inner}
                    </a>
                  )}
                </Reveal>
              );
            })}

            <Reveal variant="left" delay={420}>
              <div className="rounded-xl border border-dashed border-accent/30 bg-accent/[0.04] p-5 flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center flex-shrink-0">
                  <IconPin className="w-5 h-5" />
                </span>
                <p className="text-mist text-sm leading-relaxed">
                  <span className="text-snow font-semibold">{CONTACT.location}</span> — disponible
                  sur site, en hybride ou en <span className="text-accent">full remote</span>.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Formulaire */}
          <Reveal variant="right" delay={150}>
            <form
              onSubmit={onSubmit}
              className="glass-card rounded-xl p-7 sm:p-9 relative overflow-hidden"
              aria-label="Formulaire de contact"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-secondary"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between mb-7">
                <h3 className="font-display font-bold text-2xl text-snow">Envoyez-moi un message</h3>
                <span className="font-mono text-[11px] text-dim hidden sm:block">
                  {"<"}form{" />"}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nom" className="block font-mono text-[12px] text-mist mb-2">
                    Nom <span className="text-accent">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="field"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[12px] text-mist mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="vous@exemple.com"
                    className="field"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="sujet" className="block font-mono text-[12px] text-mist mb-2">
                  Sujet <span className="text-accent">*</span>
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  required
                  placeholder="Stage, alternance, collaboration…"
                  className="field"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block font-mono text-[12px] text-mist mb-2">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Parlez-moi de votre projet, de votre équipe, de vos besoins…"
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
                    Envoi en cours…
                  </>
                ) : status === "sent" ? (
                  <>
                    <IconCheck className="w-4.5 h-4.5" />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    Envoyer
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
                  ? `✗ ${errorMsg}`
                  : "✓ Merci ! Je reviens vers vous très rapidement."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
