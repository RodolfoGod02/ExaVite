import './App.css';

function App() {
  return (
    <div className="container">
      {/* Encabezado con título y descripción */}
      <header className="header">
        <h2>IZI</h2>
        <p>Obtén tu cotizacion en menos tiempo.</p>
      </header>

      {/* Formulario */}
      <form className="form">
        {/* Sección de información de contacto */}
        <fieldset className="fieldset">
          <legend>Información de contacto</legend>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Nombre" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" placeholder="Correo" />
            </div>
          </div>
        </fieldset>

        {/* Sección de información adicional */}
        <fieldset className="fieldset">
          <legend>Información adicional</legend>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="quantity">Cantidad de productos</label>
              <input type="number" id="quantity" placeholder="Cantidad de productos" />
            </div>
            <div className="input-group">
              <label htmlFor="delivery">Tipo de entrega</label>
              <select id="delivery">
                <option value="">Seleccionar</option>
                <option value="standard">Estándar</option>
                <option value="express">Express</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Términos y condiciones */}
        <div className="checkbox-group">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Acepto los términos y condiciones</label>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="submit-button">Enviar cotización</button>
      </form>
    </div>
  );
}

export default App;
