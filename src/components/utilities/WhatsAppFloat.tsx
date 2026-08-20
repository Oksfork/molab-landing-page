import Link from "next/link";
import "@/assets/css/whatsapp-float.css";

const WHATSAPP_HREF =
  "https://wa.me/5491173576766?text=Hola,%20tengo%20una%20consulta%20sobre%20MOLAB";

const WhatsAppFloat = () => {
  return (
    <Link
      href={WHATSAPP_HREF}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </Link>
  );
};

export default WhatsAppFloat;
