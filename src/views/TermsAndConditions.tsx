import { FileText, Scale, DollarSign, Truck, ShieldAlert, CheckCircle, ArrowLeft, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

export default function TermsAndConditions() {
  return (
    <div className="terms-conditions">
      <div className="container terms-conditions__container">
        
        {/* Navigation back */}
        <div className="terms-conditions__back-wrapper">
          <Link to="/" className="terms-conditions__back-link">
            <ArrowLeft size={18} />
            <span>Volver a la tienda</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="terms-conditions__header">
          <div className="terms-conditions__badge">
            <Scale size={18} />
            <span>Marco Legal Nicaragua</span>
          </div>
          <h1 className="terms-conditions__title">Términos y Condiciones</h1>
          <p className="terms-conditions__subtitle">
            El presente contrato regula el uso de la tienda virtual <strong>Bela & Luna Petshop</strong> y las compras realizadas
            dentro del territorio de la <strong>República de Nicaragua</strong>, en pleno cumplimiento de la 
            <em> Ley No. 842 "Ley de Protección de los Derechos de las Personas Consumidoras y Usuarias"</em>.
          </p>
        </header>

        {/* Highlights Grid */}
        <div className="terms-conditions__highlights">
          <div className="terms-conditions__card terms-conditions__card--green">
            <div className="terms-conditions__card-icon">
              <Scale size={28} />
            </div>
            <h3 className="terms-conditions__card-title">Ley No. 842 Nicaragua</h3>
            <p className="terms-conditions__card-text">
              Respetamos y garantizamos todos los derechos consagrados para los consumidores en el territorio nicaragüense.
            </p>
          </div>

          <div className="terms-conditions__card terms-conditions__card--pink">
            <div className="terms-conditions__card-icon">
              <DollarSign size={28} />
            </div>
            <h3 className="terms-conditions__card-title">Moneda Oficial (C$)</h3>
            <p className="terms-conditions__card-text">
              Todos los precios están reflejados en Córdobas Nicaragüenses (C$), incluyendo los impuestos correspondientes.
            </p>
          </div>

          <div className="terms-conditions__card terms-conditions__card--purple">
            <div className="terms-conditions__card-icon">
              <Truck size={28} />
            </div>
            <h3 className="terms-conditions__card-title">Envíos Nacionales</h3>
            <p className="terms-conditions__card-text">
              Coordinación de entregas en Managua y departamentos a través de servicios de mensajería autorizados.
            </p>
          </div>

          <div className="terms-conditions__card terms-conditions__card--blue">
            <div className="terms-conditions__card-icon">
              <ShieldAlert size={28} />
            </div>
            <h3 className="terms-conditions__card-title">Garantía de Calidad</h3>
            <p className="terms-conditions__card-text">
              Derecho a cambio o devolución en caso de desperfectos de fábrica según los plazos de ley.
            </p>
          </div>
        </div>

        {/* Main Content Sections */}
        <main className="terms-conditions__content">
          
          <section className="terms-conditions__section">
            <h2 className="terms-conditions__section-title">
              <CheckCircle size={22} className="terms-conditions__icon-bullet" />
              1. Aspectos Generales y Aceptación
            </h2>
            <p className="terms-conditions__text">
              Al acceder, navegar o realizar un pedido en el sitio web de <strong>Bela & Luna Petshop</strong>, aceptás de manera expresa e incondicional estos Términos y Condiciones. Si no estás de acuerdo con alguna de las cláusulas, te solicitamos abstenerte de realizar transacciones en nuestra plataforma.
            </p>
          </section>

          <section className="terms-conditions__section">
            <h2 className="terms-conditions__section-title">
              <CheckCircle size={22} className="terms-conditions__icon-bullet" />
              2. Precios, Moneda y Facturación
            </h2>
            <p className="terms-conditions__text">
              Conforme a las disposiciones del Banco Central de Nicaragua (BCN) y la legislación mercantil de la República de Nicaragua:
            </p>
            <ul className="terms-conditions__list">
              <li className="terms-conditions__item">
                <strong>Moneda:</strong> Los precios de los arneses, collares, camas, comederos y juguetes se expresan en Córdobas (C$).
              </li>
              <li className="terms-conditions__item">
                <strong>Ajustes de Precios:</strong> Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso, manteniendo siempre el precio vigente al momento de confirmar el checkout.
              </li>
              <li className="terms-conditions__item">
                <strong>Comprobantes de Pago:</strong> Bela & Luna Petshop emitirá el comprobante correspondiente por cada compra realizada.
              </li>
            </ul>
          </section>

          <section className="terms-conditions__section">
            <h2 className="terms-conditions__section-title">
              <CheckCircle size={22} className="terms-conditions__icon-bullet" />
              3. Proceso de Compra y Pedidos
            </h2>
            <p className="terms-conditions__text">
              La selección de productos en el carrito de compras representa una solicitud de pedido. La confirmación final y coordinación de entrega se realiza mediante nuestros canales oficiales de atención al cliente (WhatsApp / Redes Sociales), garantizando una atención personalizada para confirmar medidas y especificaciones de tu mascota.
            </p>
          </section>

          <section className="terms-conditions__section">
            <h2 className="terms-conditions__section-title">
              <CheckCircle size={22} className="terms-conditions__icon-bullet" />
              4. Entregas y Envíos en Nicaragua
            </h2>
            <p className="terms-conditions__text">
              Ofrecemos cobertura de envíos en el municipio de Managua y hacia los departamentos de Nicaragua:
            </p>
            <ul className="terms-conditions__list">
              <li className="terms-conditions__item">
                <strong>Tiempos de Entrega:</strong> Los tiempos aproximados serán comunicados al momento de coordinar el pedido.
              </li>
              <li className="terms-conditions__item">
                <strong>Costos de Envío:</strong> La tarifa de envío se calcula de acuerdo a la zona geográfica dentro del país y corre por cuenta del comprador, salvo promociones específicas de envío gratis.
              </li>
              <li className="terms-conditions__item">
                <strong>Recepción del Paquete:</strong> El cliente debe verificar el estado del paquete al momento de la entrega.
              </li>
            </ul>
          </section>

          <section className="terms-conditions__section">
            <h2 className="terms-conditions__section-title">
              <CheckCircle size={22} className="terms-conditions__icon-bullet" />
              5. Cambios, Devoluciones y Garantía Legal
            </h2>
            <p className="terms-conditions__text">
              En cumplimiento del <em>Artículo 34 y conexos de la Ley No. 842 de Nicaragua</em>:
            </p>
            <ul className="terms-conditions__list">
              <li className="terms-conditions__item">
                <strong>Defectos de Fábrica:</strong> Si el producto presenta un defecto de fabricación, tenés derecho al cambio por un producto equivalente o a la devolución conforme las condiciones acordadas.
              </li>
              <li className="terms-conditions__item">
                <strong>Cambios por Talla:</strong> Para accesorios como arneses y collares, se admiten cambios de talla siempre y cuando el producto se encuentre en perfectas condiciones, sin uso, en su empaque original y en un plazo máximo de 48 a 72 horas hábiles tras recibirlo.
              </li>
              <li className="terms-conditions__item">
                <strong>Productos de Higiene o Uso Personal:</strong> Por razones de salubridad para las mascotas, ciertos artículos en contacto directo o usados no aplican para devolución si ya fueron usados.
              </li>
            </ul>
          </section>

          <section className="terms-conditions__section">
            <h2 className="terms-conditions__section-title">
              <CheckCircle size={22} className="terms-conditions__icon-bullet" />
              6. Propiedad Intelectual
            </h2>
            <p className="terms-conditions__text">
              Todo el contenido del sitio web, incluyendo logotipos, textos, fotografías de catálogo, diseños e iconografía de <strong>Bela & Luna Petshop</strong>, son propiedad exclusiva de la marca y están protegidos por las leyes de propiedad intelectual de la República de Nicaragua.
            </p>
          </section>

          <section className="terms-conditions__section">
            <h2 className="terms-conditions__section-title">
              <CheckCircle size={22} className="terms-conditions__icon-bullet" />
              7. Jurisdicción y Ley Aplicable
            </h2>
            <p className="terms-conditions__text">
              Cualquier controversia o discrepancia derivada del uso de este sitio o de las transacciones comerciales realizadas en el mismo será sometida a las leyes de la <strong>República de Nicaragua</strong> y a la jurisdicción de los Juzgados y Tribunales ordinarios de la ciudad de Managua, Nicaragua.
            </p>
          </section>

          {/* Contact Box */}
          <div className="terms-conditions__contact-box">
            <div className="terms-conditions__contact-header">
              <Building2 size={24} />
              <h3>¿Dudas sobre nuestros términos legales?</h3>
            </div>
            <p className="terms-conditions__contact-text">
              En <strong>Bela & Luna Petshop Nicaragua</strong> estamos para atenderte. Escribinos a través de nuestras redes oficiales en Instagram, Facebook o TikTok para resolver cualquier duda sobre tus compras.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
