import { ShieldCheck, Lock, HardDrive, Heart, Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="container privacy-policy__container">
        
        {/* Navigation back */}
        <div className="privacy-policy__back-wrapper">
          <Link to="/" className="privacy-policy__back-link">
            <ArrowLeft size={18} />
            <span>Volver a la tienda</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="privacy-policy__header">
          <div className="privacy-policy__badge">
            <ShieldCheck size={18} />
            <span>Compromiso Bela & Luna</span>
          </div>
          <h1 className="privacy-policy__title">Política de Privacidad</h1>
          <p className="privacy-policy__subtitle">
            En <strong>Bela & Luna Petshop</strong> nos tomamos la privacidad de nuestros clientes y el bienestar de sus mascotas muy en serio.
            Aquí te explicamos de manera clara y transparente cómo cuidamos tus datos personales.
          </p>
        </header>

        {/* Highlights Grid */}
        <div className="privacy-policy__highlights">
          <div className="privacy-policy__card privacy-policy__card--green">
            <div className="privacy-policy__card-icon">
              <ShieldCheck size={28} />
            </div>
            <h3 className="privacy-policy__card-title">Datos Protegidos</h3>
            <p className="privacy-policy__card-text">
              Solicitamos únicamente los datos estrictamente necesarios para procesar tus pedidos de accesorios y productos.
            </p>
          </div>

          <div className="privacy-policy__card privacy-policy__card--pink">
            <div className="privacy-policy__card-icon">
              <Lock size={28} />
            </div>
            <h3 className="privacy-policy__card-title">Checkout Transparente</h3>
            <p className="privacy-policy__card-text">
              El proceso de pago se realiza directamente en el frontend sin almacenar información sensible en servidores de terceros.
            </p>
          </div>

          <div className="privacy-policy__card privacy-policy__card--purple">
            <div className="privacy-policy__card-icon">
              <HardDrive size={28} />
            </div>
            <h3 className="privacy-policy__card-title">Almacenamiento Local</h3>
            <p className="privacy-policy__card-text">
              Usamos el almacenamiento local de tu navegador exclusivamente para mantener el estado de tu carrito de compras.
            </p>
          </div>

          <div className="privacy-policy__card privacy-policy__card--blue">
            <div className="privacy-policy__card-icon">
              <Heart size={28} />
            </div>
            <h3 className="privacy-policy__card-title">Amor y Respeto</h3>
            <p className="privacy-policy__card-text">
              No vendemos, alquilamos ni compartimos tus datos personales con terceros para fines publicitarios no autorizados.
            </p>
          </div>
        </div>

        {/* Main Content Sections */}
        <main className="privacy-policy__content">
          
          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              1. Información que Recopilamos
            </h2>
            <p className="privacy-policy__text">
              Cuando interactuás con nuestra tienda virtual o realizás un pedido, recopilamos la siguiente información personal:
            </p>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__item">
                <strong>Datos de contacto:</strong> Nombre, apellido, correo electrónico y número telefónico.
              </li>
              <li className="privacy-policy__item">
                <strong>Datos de envío:</strong> Dirección de entrega y detalles específicos para la entrega del paquete.
              </li>
              <li className="privacy-policy__item">
                <strong>Detalles del pedido:</strong> Arneses, collares, camas, comederos o juguetes seleccionados para tu mascota.
              </li>
            </ul>
          </section>

          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              2. Uso de la Información
            </h2>
            <p className="privacy-policy__text">
              La información que nos proporcionás se utiliza exclusivamente para los siguientes propósitos:
            </p>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__item">Procesar y coordinar el envío de tus compras en la tienda.</li>
              <li className="privacy-policy__item">Brindarte soporte y responder tus dudas a través de nuestros canales oficiales.</li>
              <li className="privacy-policy__item">Mejorar la experiencia de usuario y la navegación en nuestra plataforma web.</li>
            </ul>
          </section>

          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              3. Almacenamiento Local (LocalStorage)
            </h2>
            <p className="privacy-policy__text">
              Nuestra plataforma utiliza tecnología de <code>LocalStorage</code> del navegador para guardar temporalmente
              los artículos que agregás al carrito de compras. Esto garantiza que tus selecciones no se pierdan al navegar entre
              las distintas categorías de productos. Podés limpiar esta información en cualquier momento borrando el historial o la memoria caché de tu navegador.
            </p>
          </section>

          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              4. Enlaces a Redes Sociales
            </h2>
            <p className="privacy-policy__text">
              Nuestro sitio incluye enlaces hacia nuestras cuentas oficiales en Instagram, Facebook y TikTok. Al hacer clic en estos enlaces, serás redirigido a plataformas externas que cuentan con sus propias políticas de privacidad independientes.
            </p>
          </section>

          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              5. Modificaciones a esta Política
            </h2>
            <p className="privacy-policy__text">
              Nos reservamos el derecho de actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestros servicios o en las normativas legales. Te recomendamos revisar esta página regularmente para mantenerte informado.
            </p>
          </section>

          {/* Contact Box */}
          <div className="privacy-policy__contact-box">
            <div className="privacy-policy__contact-header">
              <Mail size={24} />
              <h3>¿Tenés alguna pregunta sobre tus datos?</h3>
            </div>
            <p className="privacy-policy__contact-text">
              Si necesitás consultar, actualizar o solicitar la eliminación de tu información, escribinos por cualquiera de nuestras redes o canales de atención al cliente en <strong>Bela & Luna Petshop</strong>.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
