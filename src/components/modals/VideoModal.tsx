"use client";

import { useEffect, useId, useRef } from "react";
import "@/assets/css/video-modal.css";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  videoId: string;
  title?: string;
};

export default function VideoModal({
  open,
  onClose,
  videoId,
  title = "Video de Molab.app",
}: VideoModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="video-modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="video-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          type="button"
          className="video-modal-close"
          aria-label="Cerrar video"
          onClick={onClose}
        >
          <i className="fas fa-times" />
        </button>
        <h2 id={titleId} className="visually-hidden">
          {title}
        </h2>
        <div className="video-modal-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
