import { MapPin, Truck, Bus, PackageCheck, Clock, ShieldCheck, ArrowLeft, DollarSign, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ShippingPolicy.css';

export default function ShippingPolicy() {
  return (
    <div className="shipping-policy">
      <div className="container shipping-policy__container">
        
        {/* Navigation back */}
        <div className="shipping-policy__back-wrapper">
          <Link to="/" className="shipping-policy__back-link">
            <ArrowLeft size={18} />
            <span>Volver a la tienda</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="shipping-policy__header">
          <div className="shipping-policy__badge">
            <Truck size={18} />
            <span>Envíos a toda Nicaragua</span>
          </div>
          <h1 className="shipping-policy__title">Información de Envíos</h1>
          <p className="shipping-policy__subtitle">
            En <strong>Bela & Luna Petshop</strong> nos aseguramos de que los accesorios de tu mascota lleguen de forma rápida, segura y confiable hasta la puerta de tu casa o agencia más cercana.
          </p>
        </header>

        {/* Highlight Cards Grid */}
        <div className="shipping-policy__highlights">
          
          {/* Option 1: Managua Urbana */}
          <div className="shipping-policy__card shipping-policy__card--green">
            <div className="shipping-policy__card-header">
              <div className="shipping-policy__card-icon">
                <MapPin size={28} />
              </div>
              <span className="shipping-policy__card-price">C$ 50</span>
            </div>
            <h3 className="shipping-policy__card-title">Managua (Zona Urbana)</h3>
            <p className="shipping-policy__card-text">
              Envío delivery rápido y directo dentro del casco urbano de Managua a una tarifa fija accesible.
            </p>
            <ul className="shipping-policy__card-list">
              <li><CheckCircle2 size={16} /> Tarifa fija: C$ 50 cordobas</li>
              <li><CheckCircle2 size={16} /> Entrega directa a tu domicilio u oficina</li>
              <li><CheckCircle2 size={16} /> Tiempo estimado: 24 a 48 horas</li>
            </ul>
          </div>

          {/* Option 2: Alrededores de Managua */}
          <div className="shipping-policy__card shipping-policy__card--pink">
            <div className="shipping-policy__card-header">
              <div className="shipping-policy__card-icon">
                <Clock size={28} />
              </div>
              <span className="shipping-policy__card-price">Según Distancia</span>
            </div>
            <h3 className="shipping-policy__card-title">Alrededores de Managua</h3>
            <p className="shipping-policy__card-text">
              Para zonas periféricas y municipios aledaños a Managua (Tipitapa, Ciudad Sandino, Carretera a Masaya, Ticuantepe, etc.).
            </p>
            <ul className="shipping-policy__card-list">
              <li><CheckCircle2 size={16} /> El costo se calcula según la distancia</li>
              <li><CheckCircle2 size={16} /> Coordinación previa por WhatsApp</li>
              <li><CheckCircle2 size={16} /> Entrega en punto de referencia o domicilio</li>
            </ul>
          </div>

          {/* Option 3: Envíos Nacionales */}
          <div className="shipping-policy__card shipping-policy__card--purple">
            <div className="shipping-policy__card-header">
              <div className="shipping-policy__card-icon">
                <Truck size={28} />
              </div>
              <span className="shipping-policy__card-price">Costo Adicional</span>
            </div>
            <h3 className="shipping-policy__card-title">Toda Nicaragua (Departamentos)</h3>
            <p className="shipping-policy__card-text">
              Realizamos envíos a todos los departamentos de Nicaragua mediante agencias de paquetería o buses interurbanos.
            </p>
            <ul className="shipping-policy__card-list">
              <li><CheckCircle2 size={16} /> Vía Cargotrans o Encomienda de Bus</li>
              <li><CheckCircle2 size={16} /> Cobertura a nivel nacional</li>
              <li><CheckCircle2 size={16} /> Se entrega número de guía o recibo</li>
            </ul>
          </div>

        </div>

        {/* Detailed Shipping Methods */}
        <main className="shipping-policy__content">
          
          {/* National Shipping Details Section */}
          <section className="shipping-policy__section">
            <h2 className="shipping-policy__section-title">
              <Truck size={24} className="shipping-policy__icon-bullet" />
              Medios de Envío a Departamentos
            </h2>
            <p className="shipping-policy__intro-text">
              Si te encontrás fuera de Managua, disponemos de dos métodos confiables para hacerte llegar tu pedido a cualquier municipio de Nicaragua con un costo adicional ajustado a la empresa de transporte:
            </p>

            <div className="shipping-policy__methods-grid">
              
              {/* Cargotrans */}
              <div className="shipping-policy__method-box">
                <div className="shipping-policy__method-badge shipping-policy__method-badge--cargotrans">
                  <PackageCheck size={22} />
                  <span>Cargotrans</span>
                </div>
                <h3 className="shipping-policy__method-title">Servicio de Paquetería Cargotrans</h3>
                <p className="shipping-policy__method-desc">
                  Ideal para una entrega profesional y segura. Podés retirar tu paquete en la sucursal de Cargotrans de tu ciudad o solicitar entrega a domicilio en ciudades con cobertura.
                </p>
                <div className="shipping-policy__method-features">
                  <span className="shipping-policy__tag">Seguimiento con número de guía</span>
                  <span className="shipping-policy__tag">Sucursal o Domicilio</span>
                  <span className="shipping-policy__tag">Empaque seguro</span>
                </div>
              </div>

              {/* Bus Interurbano */}
              <div className="shipping-policy__method-box">
                <div className="shipping-policy__method-badge shipping-policy__method-badge--bus">
                  <Bus size={22} />
                  <span>Bus Interurbano</span>
                </div>
                <h3 className="shipping-policy__method-title">Encomienda de Bus Interurbano</h3>
                <p className="shipping-policy__method-desc">
                  Enviamos tu paquete como encomienda en las rutas de buses que salen desde las principales terminales de Managua (Mayoreo, Mercado Huembes, Israel Lewites o UCA).
                </p>
                <div className="shipping-policy__method-features">
                  <span className="shipping-policy__tag">Entrega el mismo día o al día siguiente</span>
                  <span className="shipping-policy__tag">Retiro en terminal local</span>
                  <span className="shipping-policy__tag">Foto de comprobante enviada por WhatsApp</span>
                </div>
              </div>

            </div>
          </section>

          {/* Process Step by Step */}
          <section className="shipping-policy__section">
            <h2 className="shipping-policy__section-title">
              <ShieldCheck size={24} className="shipping-policy__icon-bullet" />
              ¿Cómo funciona el proceso de envío?
            </h2>
            
            <div className="shipping-policy__steps">
              
              <div className="shipping-policy__step">
                <div className="shipping-policy__step-number">1</div>
                <div className="shipping-policy__step-content">
                  <h4>Selección de Productos</h4>
                  <p>Agregás tus arneses, collares, camas, platos o juguetes favoritos al carrito y avanzás al checkout.</p>
                </div>
              </div>

              <div className="shipping-policy__step">
                <div className="shipping-policy__step-number">2</div>
                <div className="shipping-policy__step-content">
                  <h4>Confirmación y Dirección</h4>
                  <p>Coordinamos por WhatsApp tus datos de entrega en Managua o la agencia/ruta interurbana elegida para departamentos.</p>
                </div>
              </div>

              <div className="shipping-policy__step">
                <div className="shipping-policy__step-number">3</div>
                <div className="shipping-policy__step-content">
                  <h4>Despacho de Pedido</h4>
                  <p>Preparamos tu paquete con todo el cuidado que merece tu mascota y te enviamos la guía o comprobante de encomienda.</p>
                </div>
              </div>

              <div className="shipping-policy__step">
                <div className="shipping-policy__step-number">4</div>
                <div className="shipping-policy__step-content">
                  <h4>¡Recepción Feliz!</h4>
                  <p>Recibís tu pedido listo para ser estrenado por tu compañero peludo.</p>
                </div>
              </div>

            </div>
          </section>

          {/* FAQ / Contact Box */}
          <div className="shipping-policy__contact-box">
            <div className="shipping-policy__contact-header">
              <HelpCircle size={26} />
              <h3>¿Tenés dudas sobre las tarifas o métodos de envío?</h3>
            </div>
            <p className="shipping-policy__contact-text">
              Estamos para ayudarte en cada detalle. Si querés cotizar la tarifa exacta para tu municipio o tenés alguna indicación especial para la entrega, escribinos directamente por nuestras redes sociales o WhatsApp oficial.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
