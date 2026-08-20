"use client";
import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import { toast } from "react-toastify";
import { useState, useRef, useCallback } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import logo from "@/assets/img/logo.png"
import logoBlue from "@/assets/img/logo-blue.png"
import molabLogo from "@/assets/img/logo/molab_app_logo.png"

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

interface DataType {
    logoColor?: string;
    sectionClass?: string
}

const FooterV1 = ({ logoColor, sectionClass }: DataType) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const turnstileRef = useRef<TurnstileInstance | undefined>(undefined);
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

    const clearTurnstile = useCallback(() => {
        setTurnstileToken(null);
        turnstileRef.current?.reset();
    }, []);

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscribe")
    }

    const handleContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!siteKey) {
            toast.error("El formulario de contacto no está configurado correctamente.");
            return;
        }

        if (!turnstileToken) {
            toast.error("Completa la verificación de seguridad antes de enviar.");
            return;
        }

        setIsSubmitting(true);

        try {
            const form = event.target as HTMLFormElement;
            const formData = new FormData(form);
            formData.append("turnstile_token", turnstileToken);

            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok && data.success) {
                form.reset();
                clearTurnstile();
                toast.success("Mensaje enviado correctamente. Te responderemos pronto!");
            } else {
                toast.error(data.error || "Error al enviar el mensaje. Por favor, intenta nuevamente.");
                clearTurnstile();
            }
        } catch (error) {
            console.error("Error al enviar formulario:", error);
            toast.error("Error al enviar el mensaje. Por favor, intenta nuevamente.");
            clearTurnstile();
        } finally {
            setIsSubmitting(false);
        }
    }

    let logoSrc;
    switch (logoColor) {
        case "blue":
            logoSrc = logoBlue;
            break;
        case "light":
            logoSrc = molabLogo;
            break;
        default:
            logoSrc = logo;
    }

    return (
            <footer className={`bg-dark text-light ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="p-3">
                        <div className="row">

                            <section 
                                className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15 pr-md-15"
                                aria-label="Sobre nosotros - Software de gestión para laboratorios dentales"
                            >    
                                <div className="f-item about">
                                    <Image className="logo" src={logoSrc} alt="Molab.app - Software de gestión para laboratorios dentales" />
                                    <div className="mt-30">
                                        <p>
                                            Unete a nuestra lista de suscriptores para recibir las últimas noticias y ofertas especiales.
                                        </p>
                                        <form onSubmit={handleForm} className="d-flex flex-column gap-2">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" placeholder="Tu email" className="form-control" name="email" autoComplete="off" required />
                                            <button type="submit" className="w-100 btn btn-theme secondary mt-2">
                                                <i className="fas fa-envelope" />
                                                Suscribirse
                                            </button>
                                        </form>
                                    </div>
                                    <div className="copyright-text mt-40">
                                        <p>&copy; Copyright {(new Date().getFullYear())}. Todos los derechos reservados por <a href="https://themeforest.net/user/validthemes/portfolio" target="_blank">Ar-Tec Invent</a></p>
                                    </div>
                                    <div className="footer-social mt-20">
                                        <ul>
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section 
                                className="col-lg-4 col-md-6" 
                                aria-label="Contáctanos - Software de gestión para laboratorios dentales">
                                <div className="footer-item contact-form">
                                    <h2 className="widget-title">Contáctanos</h2>
                                    <p className="mb-30">¿Tienes alguna pregunta? Escríbenos y te responderemos lo antes posible.</p>
                                    <form onSubmit={handleContactForm} className="d-flex flex-column gap-3">
                                        <div className="form-group">
                                            <label htmlFor="name" className="sr-only">Nombre</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                placeholder="Tu nombre" 
                                                className="form-control" 
                                                required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="sr-only">Email</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                placeholder="Tu email" 
                                                className="form-control" 
                                                required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message" className="sr-only">Mensaje</label>
                                            <textarea 
                                                name="message"
                                                placeholder="Tu mensaje" 
                                                className="form-control" 
                                                rows={4}
                                                required
                                            ></textarea>
                                        </div>
                                        {siteKey ? (
                                            <div className="form-group">
                                                <Turnstile
                                                    ref={turnstileRef}
                                                    siteKey={siteKey}
                                                    onSuccess={setTurnstileToken}
                                                    onExpire={clearTurnstile}
                                                    onError={() => {
                                                        setTurnstileToken(null);
                                                    }}
                                                    options={{ theme: "dark" }}
                                                />
                                            </div>
                                        ) : null}
                                        <button type="submit" className="btn btn-theme secondary w-100 btn-sm" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                "Enviando..."
                                            ) : (
                                                <>
                                                    <i className="fas fa-paper-plane" />
                                                    Enviar mensaje
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </section>

                            <address 
                                className="col-lg-4 col-md-6"
                                aria-label="Atención al cliente - Software de gestión para laboratorios dentales"
                            >
                                <article className="footer-item contact">
                                    <h2 className="widget-title">Atención al cliente</h2>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Comercial:</strong>
                                                <a href="mailto:molabsystem@gmail.com">molabsystem@gmail.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Soporte:</strong>
                                                <a href="mailto:desarrolloartec@gmail.com">desarrolloartec@gmail.com</a>
                                            </div>
                                        </li>
                                        <li className="whatsapp-glass-item">
                                            <div className="icon">
                                                <i className="fab fa-whatsapp" />
                                            </div>
                                            <div className="content">
                                                <strong>Whatsapp:</strong>
                                                <a href="https://wa.me/5491173576766" target="_blank">+54 9 11 7357-6766</a>
                                            </div>
                                        </li>
                                    </ul>
                                </article>
                            </address>
                        </div>
                    </div>
                </div>
            </footer>

    );
};

export default FooterV1;
