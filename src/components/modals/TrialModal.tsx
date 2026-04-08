"use client";

import { useEffect, useId, useRef, useState } from "react";
import { toast } from "react-toastify";
import "@/assets/css/trial-modal.css";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

type TrialModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
};

export default function TrialModal({
  open,
  onClose,
  title = "Llev? tu laboratorio dental al siguiente nivel.",
}: TrialModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [labName, setLabName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | undefined>(undefined);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // prevent background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus the dialog for accessibility
    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!labName.trim() || !email.trim()) {
      toast.error("Complet? nombre del laboratorio y correo electr?nico.");
      return;
    }

    if (!siteKey) {
      toast.error("La verificaci?n de seguridad no est? configurada.");
      return;
    }

    if (!turnstileToken) {
      toast.error("Complet? la verificaci?n de seguridad.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/demo/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: labName.trim(),
          email: email.trim(),
          turnstile_token: turnstileToken,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const emailError =
          data?.errors?.email && Array.isArray(data.errors.email)
            ? data.errors.email[0]
            : null;
        toast.error(
          emailError ||
            data?.message ||
            data?.error ||
            "Error inesperado. Intenta nuevamente."
        );
        setTurnstileToken(null);
        turnstileRef.current?.reset();
        return;
      }

      toast.success("?Listo! Te enviamos la demo a tu correo.");
      onClose();
      setLabName("");
      setEmail("");
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch {
      toast.error("Error de red. Intenta nuevamente.");
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="modal fade show trial-modal-backdrop"
      style={{ display: "block" }}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog modal-dialog-centered trial-modal-dialog">
        <div
          className="modal-content trial-modal-content trial-modal text-light"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          ref={dialogRef}
        >
          <div className="modal-header trial-modal-header">
            <button
              type="button"
              className="btn-close trial-modal-close"
              aria-label="Cerrar"
              onClick={onClose}
            />
          </div>

          <div className="modal-body trial-modal-body">
            <div className="trial-modal-hero">
              <div className="trial-modal-icon" aria-hidden="true">
                <i className="fas fa-rocket" />
              </div>
              <h5 className="trial-modal-title" id={titleId}>
                {title}
              </h5>
              <p className="trial-modal-lead">
                Cre? tu cuenta gratuita y prob? nuestra demo completa: organizaci?n, control y
                eficiencia en un solo lugar.
              </p>
            </div>

            <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
              <div className="form-group">
                <label className="form-label" htmlFor="trial_lab_name">
                  Nombre del laboratorio
                </label>
                <input
                  id="trial_lab_name"
                  name="name"
                  className="form-control"
                  placeholder="Ej: Laboratorio Dental San Mart?n"
                  value={labName}
                  onChange={(e) => setLabName(e.target.value)}
                  required
                  autoComplete="organization"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="trial_email">
                  Correo electr?nico
                </label>
                <input
                  id="trial_email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="tu@laboratorio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>

              {siteKey ? (
                <div className="form-group">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={siteKey}
                    onSuccess={setTurnstileToken}
                    onExpire={() => {
                      setTurnstileToken(null);
                      turnstileRef.current?.reset();
                    }}
                    onError={() => {
                      setTurnstileToken(null);
                    }}
                    options={{ theme: "dark" }}
                  />
                </div>
              ) : null}

              <div className="d-flex w-100 gap-2 trial-modal-actions">
                <button
                  type="button"
                  className="btn btn-sm btn-theme secondary flex-fill"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-sm btn-theme flex-fill"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

