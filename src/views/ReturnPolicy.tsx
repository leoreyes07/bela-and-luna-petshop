import { RotateCcw, PackageCheck, AlertTriangle, DollarSign, CheckCircle2, ArrowLeft, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ReturnPolicy.css';

export default function ReturnPolicy() {
  return (
    <div className="return-policy">
      <div className="container return-policy__container">
        
        {/* Navigation back */}
        <div className="return-policy__back-wrapper">
          <Link to="/" className="return-policy__back-link">
            <ArrowLeft size={18} />
            <span>Volver a la tienda</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="return-policy__header">
          <div className="return-policy__badge">
            <RotateCcw size={18} />
            <span>Garantía de Satisfacción</span>
          </div>
          <h1 className="return-policy__title">Política de Devoluciones</h1>
          <p className="return-policy__subtitle">
            En <strong>Bela & Luna Petshop</strong> queremos que vos y tu mascota queden 100% satisfechos con cada compra. Por eso mantenemos condiciones claras, transparentes y justas para la gestión de devoluciones y cambios.
          </p>
        </header>

        {/* Highlight Cards Grid */}
        <div className="return-policy__highlights">
          
          {/* Card 1: Estado del Producto */}
          <div className="return-policy__card return-policy__card--green">
            <div className="return-policy__card-header">
              <div className="return-policy__card-icon">
                <PackageCheck size={28} />
              </div>
              <span className="return-policy__card-badge">Requisito</span>
            </div>
            <h3 className="return-policy__card-title">Empaque Original y Limpieza</h3>
            <p className="return-policy__card-text">
              Las devoluciones se aceptan <strong>únicamente</strong> si el producto se encuentra completamente limpio, sin uso ni pelos de mascota, y dentro de su paquete/empaque original intacto.
            </p>
          </div>

          {/* Card 2: Costos de Envío */}
          <div className="return-policy__card return-policy__card--pink">
            <div className="return-policy__card-header">
              <div className="return-policy__card-icon">
                <DollarSign size={28} />
              </div>
              <span className="return-policy__card-badge">Importante</span>
            </div>
            <h3 className="return-policy__card-title">Reembolso del Producto</h3>
            <p className="return-policy__card-text">
              El reembolso o crédito aplica <strong>exclusivamente sobre el valor del producto</strong>. El costo de envío/delivery original no es reembolsable y los gastos de transporte para la devolución corren por cuenta del cliente.
            </p>
          </div>

          {/* Card 3: Plazo de Solicitud */}
          <div className="return-policy__card return-policy__card--purple">
            <div className="return-policy__card-header">
              <div className="return-policy__card-icon">
                <ShieldCheck size={28} />
              </div>
              <span className="return-policy__card-badge">Plazo</span>
            </div>
            <h3 className="return-policy__card-title">Plazo de 48 a 72 Horas</h3>
            <p className="return-policy__card-text">
              Tenés hasta <strong>48 a 72 horas hábiles</strong> después de haber recibido tu pedido para reportar cualquier inconveniente o solicitar el proceso de cambio/devolución.
            </p>
          </div>

        </div>

        {/* Main Detailed Content */}
        <main className="return-policy__content">
          
          {/* Section 1: Condiciones de Devolución */}
          <section className="return-policy__section">
            <h2 className="return-policy__section-title">
              <CheckCircle2 size={24} className="return-policy__icon-bullet" />
              1. Condiciones para Aceptar una Devolución
            </h2>
            <p className="return-policy__text">
              Para garantizar la higiene y salud de todas las mascotas que compran en <strong>Bela & Luna Petshop</strong>, requerimos cumplir estrictamente con los siguientes puntos:
            </p>
            
            <ul className="return-policy__list">
              <li className="return-policy__item">
                <strong>Higiene y Limpieza Absoluta:</strong> El producto no debe presentar suciedad, olores, manchas, signos de uso ni pelos de mascota.
              </li>
              <li className="return-policy__item">
                <strong>Empaque Original Intacto:</strong> Debe conservar su empaque, caja, bolsa y etiquetas originales en perfecto estado.
              </li>
              <li className="return-policy__item">
                <strong>Accesorios Completos:</strong> Si el producto incluía piezas o accesorios adicionales (ej. hebillas, correas, protectores), deben devolverse íntegros.
              </li>
              <li className="return-policy__item">
                <strong>Comprobante de Compra:</strong> Es necesario presentar la nota o comprobante del pedido realizado en la tienda.
              </li>
            </ul>
          </section>

          {/* Section 2: Política de Costos de Envío y Reembolsos */}
          <section className="return-policy__section">
            <h2 className="return-policy__section-title">
              <DollarSign size={24} className="return-policy__icon-bullet" />
              2. Política de Reembolso y Gastos de Envío
            </h2>
            <p className="return-policy__text">
              Queremos ser 100% transparentes respecto al desglose financiero en el manejo de devoluciones:
            </p>

            <div className="return-policy__rules-box">
              <div className="return-policy__rule-item">
                <span className="return-policy__rule-tag return-policy__rule-tag--check">Reembolsable</span>
                <div>
                  <h4 className="return-policy__rule-title">Valor del Producto</h4>
                  <p className="return-policy__rule-desc">
                    Se devolverá el 100% del monto pagado por el accesorio (arnés, collar, cama, plato o juguete), siempre que cumpla con las condiciones de estado e higiene.
                  </p>
                </div>
              </div>

              <div className="return-policy__rule-item">
                <span className="return-policy__rule-tag return-policy__rule-tag--cross">No Reembolsable</span>
                <div>
                  <h4 className="return-policy__rule-title">Costo del Envío / Delivery</h4>
                  <p className="return-policy__rule-desc">
                    Los costos del envío inicial (Managua C$50, tarifa por distancia o envío a departamentos vía Cargotrans/Bus) son pagados al servicio de transporte y <strong>no son reembolsables</strong> bajo ninguna circunstancia.
                  </p>
                </div>
              </div>

              <div className="return-policy__rule-item">
                <span className="return-policy__rule-tag return-policy__rule-tag--info">A cargo del Cliente</span>
                <div>
                  <h4 className="return-policy__rule-title">Envío de Retorno</h4>
                  <p className="return-policy__rule-desc">
                    Los gastos de envío o mensajería para hacer llegar el producto de regreso a nuestra sede corren por cuenta del cliente, salvo en casos de defecto comprobado de fábrica.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Excepciones por Higiene */}
          <section className="return-policy__section">
            <h2 className="return-policy__section-title">
              <AlertTriangle size={24} className="return-policy__icon-bullet" />
              3. Productos Excluidos por Higiene
            </h2>
            <p className="return-policy__text">
              Por razones de bioseguridad y prevención de enfermedades o parásitos entre mascotas:
            </p>
            <ul className="return-policy__list">
              <li className="return-policy__item">
                No se aceptan devoluciones de artículos que muestren señales evidentes de haber sido usados prolongadamente por una mascota.
              </li>
              <li className="return-policy__item">
                Si recibimos un producto con suciedad, olores o sin su empaque original, el paquete será devuelto al cliente y los gastos de transporte correrán por su cuenta.
              </li>
            </ul>
          </section>

          {/* Section 4: Paso a Paso para Solicitar una Devolución */}
          <section className="return-policy__section">
            <h2 className="return-policy__section-title">
              <Sparkles size={24} className="return-policy__icon-bullet" />
              4. ¿Cómo solicitar un cambio o devolución?
            </h2>

            <div className="return-policy__steps">
              <div className="return-policy__step">
                <div className="return-policy__step-num">1</div>
                <h4>Contactanos por WhatsApp</h4>
                <p>Escribinos dentro de las 48-72 hrs hábiles posteriores a la entrega con tu número de pedido y fotos del producto.</p>
              </div>

              <div className="return-policy__step">
                <div className="return-policy__step-num">2</div>
                <h4>Verificación del Estado</h4>
                <p>Confirmamos que el producto esté limpio, sin uso y en su paquete original antes de autorizar el envío de retorno.</p>
              </div>

              <div className="return-policy__step">
                <div className="return-policy__step-num">3</div>
                <h4>Envío del Producto</h4>
                <p>Hacés llegar el producto a nuestra sede física o por el medio de envío coordinado.</p>
              </div>

              <div className="return-policy__step">
                <div className="return-policy__step-num">4</div>
                <h4>Reembolso o Cambio</h4>
                <p>Una vez recibido y revisado, procesamos el cambio de talla o el reembolso exclusivo del valor del producto.</p>
              </div>
            </div>
          </section>

          {/* Contact Box */}
          <div className="return-policy__contact-box">
            <div className="return-policy__contact-header">
              <HelpCircle size={26} />
              <h3>¿Tenés dudas sobre el tamaño o especificaciones antes de comprar?</h3>
            </div>
            <p className="return-policy__contact-text">
              Te recomendamos medir a tu mascota antes de realizar el pedido. ¡Escribinos por WhatsApp o Instagram y te asesoramos con la talla ideal para tu peludo!
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
