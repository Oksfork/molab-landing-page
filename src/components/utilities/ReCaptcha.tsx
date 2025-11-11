"use client";
import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export const useReCaptcha = (siteKey: string) => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Cargar el script de reCAPTCHA solo una vez
    if (scriptLoaded.current || !siteKey) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      // Limpiar el script al desmontar (opcional)
      const existingScript = document.querySelector(`script[src*="recaptcha"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, [siteKey]);

  const executeRecaptcha = useCallback(async (action: string = "submit"): Promise<string | null> => {
    if (!window.grecaptcha || !siteKey) {
      return null;
    }

    try {
      return new Promise((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(siteKey, { action });
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      });
    } catch (error) {
        console.log(error);
      return null;
    }
  }, [siteKey]);

  return { executeRecaptcha };
};

