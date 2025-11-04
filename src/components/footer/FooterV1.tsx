"use client";
import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import { toast } from "react-toastify";
import { useState } from "react";

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

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscribe")
    }

    const handleContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const form = event.target as HTMLFormElement;
        // const formData = new FormData(form);
        // const data = {
        //     name: formData.get('name'),
        //     email: formData.get('email'),
        //     message: formData.get('message')
        // };

        // Simular envío (aquí puedes agregar tu lógica de API)
        setTimeout(() => {
            form.reset();
            toast.success("Mensaje enviado correctamente. Te responderemos pronto!");
            setIsSubmitting(false);
        }, 1500);
    }

    // Footer Logo Color

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
                                            <button type="submit" className="w-100 btn btn-primary mt-2">Suscribirse</button>
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
                                        <button type="submit" className="btn btn-primary w-100 btn-sm" disabled={isSubmitting}>
                                            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
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
                                                <a href="mailto:info@validtheme.com">contacto@contacto.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Soporte:</strong>
                                                <a href="mailto:info@validtheme.com">soporte@soporte.com</a>
                                            </div>
                                        </li>
                                        <li className="whatsapp-glass-item">
                                            <div className="icon">
                                                <i className="fab fa-whatsapp" />
                                            </div>
                                            <div className="content">
                                                <strong>Whatsapp:</strong>
                                                <a href="https://wa.me/5491136457906" target="_blank">+54 9 11 3645-7906</a>
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