import { ShieldCheck, Lock, HardDrive, Heart, Mail, CheckCircle, ArrowLeft, Scale } from 'lucide-react';
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
            <Scale size={18} />
            <span>Marco Legal Nicaragua</span>
          </div>
          <h1 className="privacy-policy__title">Política de Privacidad</h1>
          <p className="privacy-policy__subtitle">
            En <strong>Bela & Luna Petshop</strong> nos tomamos muy en serio la privacidad de nuestros clientes y el bienestar de sus mascotas.
            Esta política se rige en pleno cumplimiento de la <em>Ley No. 787 "Ley de Protección de Datos Personales de la República de Nicaragua"</em> y el <em>Artículo 26 de la Constitución Política</em>.
          </p>
        </header>

        {/* Highlights Grid */}
        <div className="privacy-policy__highlights">
          <div className="privacy-policy__card privacy-policy__card--green">
            <div className="privacy-policy__card-icon">
              <ShieldCheck size={28} />
            </div>
            <h3 className="privacy-policy__card-title">Ley No. 787 Nicaragua</h3>
            <p className="privacy-policy__card-text">
              Garantizamos la confidencialidad, integridad y seguridad de tus datos conforme a la legislación nicaragüense.
            </p>
          </div>

          <div className="privacy-policy__card privacy-policy__card--pink">
            <div className="privacy-policy__card-icon">
              <Lock size={28} />
            </div>
            <h3 className="privacy-policy__card-title">Checkout Transparente</h3>
            <p className="privacy-policy__card-text">
              El procesamiento de compras se realiza directamente en el frontend sin almacenar información bancaria ni datos sensibles.
            </p>
          </div>

          <div className="privacy-policy__card privacy-policy__card--purple">
            <div className="privacy-policy__card-icon">
              <HardDrive size={28} />
            </div>
            <h3 className="privacy-policy__card-title">Almacenamiento Local</h3>
            <p className="privacy-policy__card-text">
              Usamos el almacenamiento local de tu navegador exclusivamente para guardar el estado de tu carrito de compras.
            </p>
          </div>

          <div className="privacy-policy__card privacy-policy__card--blue">
            <div className="privacy-policy__card-icon">
              <Heart size={28} />
            </div>
            <h3 className="privacy-policy__card-title">Derechos ARCO</h3>
            <p className="privacy-policy__card-text">
              Tenés derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de tus datos personales en cualquier momento.
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
              En conformidad con el <em>Artículo 5 de la Ley No. 787</em>, solicitamos únicamente los datos personales estrictamente necesarios para brindar nuestros servicios:
            </p>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__item">
                <strong>Datos de Identificación y Contacto:</strong> Nombre, apellido, número telefónico y correo electrónico.
              </li>
              <li className="privacy-policy__item">
                <strong>Datos de Entrega en Nicaragua:</strong> Dirección física (municipio y departamento) para coordinar el envío de tus productos.
              </li>
              <li className="privacy-policy__item">
                <strong>Detalles del Pedido:</strong> Arneses, collares, camas, comederos o juguetes seleccionados para tu mascota.
              </li>
            </ul>
          </section>

          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              2. Finalidad del Tratamiento de Datos
            </h2>
            <p className="privacy-policy__text">
              Los datos personales recolectados serán utilizados exclusivamente para los siguientes fines legítimos:
            </p>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__item">Procesar, despachar y entregar tus pedidos dentro del territorio de la República de Nicaragua.</li>
              <li className="privacy-policy__item">Brindarte atención al cliente directa a través de nuestros canales oficiales de comunicación (WhatsApp / Redes Sociales).</li>
              <li className="privacy-policy__item">Garantizar una óptima experiencia de navegación y uso dentro de nuestra tienda virtual.</li>
            </ul>
          </section>

          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              3. Almacenamiento Local y Cookies
            </h2>
            <p className="privacy-policy__text">
              Nuestra plataforma utiliza la función de <code>LocalStorage</code> del navegador web del cliente únicamente para mantener activos los productos agregados al carrito de compras durante la sesión. No utilizamos cookies de rastreo invasivas ni compartimos tu información de navegación con redes de publicidad externas.
            </p>
          </section>

          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              4. Derechos ARCO del Usuario (Ley No. 787)
            </h2>
            <p className="privacy-policy__text">
              Como titular de tus datos personales en Nicaragua, contás con los siguientes derechos garantizados por ley:
            </p>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__item">
                <strong>Acceso:</strong> Consultar qué información personal poseemos sobre vos.
              </li>
              <li className="privacy-policy__item">
                <strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o desactualizados.
              </li>
              <li className="privacy-policy__item">
                <strong>Cancelación:</strong> Solicitar la eliminación de tus datos de nuestros registros cuando ya no sean necesarios para la finalidad recopilada.
              </li>
              <li className="privacy-policy__item">
                <strong>Oposición:</strong> Oponerte al tratamiento de tus datos para fines no autorizados.
              </li>
            </ul>
          </section>

          <section className="privacy-policy__section">
            <h2 className="privacy-policy__section-title">
              <CheckCircle size={22} className="privacy-policy__icon-bullet" />
              5. Enlaces a Sitios de Terceros
            </h2>
            <p className="privacy-policy__text">
              Nuestro sitio incluye enlaces directos a nuestras cuentas oficiales en Instagram, Facebook y TikTok. Al ser redirigido a estas plataformas, su interacción se regirá por las políticas de privacidad de cada red social correspondiente.
            </p>
          </section>

          {/* Contact Box */}
          <div className="privacy-policy__contact-box">
            <div className="privacy-policy__contact-header">
              <Mail size={24} />
              <h3>¿Querés ejercer tus Derechos ARCO?</h3>
            </div>
            <p className="privacy-policy__contact-text">
              Si querés acceder, corregir o eliminar tus datos personales almacenados en <strong>Bela & Luna Petshop Nicaragua</strong>, contactanos a través de cualquiera de nuestros canales oficiales de atención al cliente.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
