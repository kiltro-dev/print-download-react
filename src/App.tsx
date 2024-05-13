import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Componente que define el contenido del PDF
const PDFContent = () => {
  return (
    <div
      style={{
        fontFamily: "Arial",
        fontSize: "16px",
        color: "#eee",
        backgroundColor: "#242424",
        padding: "1rem",
      }}
    >
      <p>¡Hola, este es un PDF generado desde React!</p>
      <p>Este es un párrafo de ejemplo con algunos estilos CSS aplicados.</p>
      <ul>
        <li>Elemento de lista 1</li>
        <li>Elemento de lista 2</li>
        <li>Elemento de lista 3</li>
      </ul>
    </div>
  );
};

class App extends React.Component {
  generateAndPrintPDF = () => {
    // Generar el PDF
    const doc = new jsPDF();

    // Obtener una referencia al elemento que quieres convertir a imagen
    const element = document.getElementById("pdf-content");

    // Convertir el elemento a una imagen usando html2canvas
    html2canvas(element).then((canvas) => {
      // Convertir el canvas a una imagen en formato base64
      const imgData = canvas.toDataURL("image/png");

      // Agregar la imagen al PDF
      doc.addImage(imgData, "PNG", 10, 10, 180, 0);

      // Abrir la ventana de impresión
      doc.autoPrint();
      window.open(doc.output("bloburl"), "_blank");
    });
  };

  render() {
    return (
      <div>
        <h1>Generar PDF e imprimir</h1>
        <div id="pdf-content">
          {/* Renderizamos el componente PDFContent */}
          <PDFContent />
        </div>
        <button onClick={this.generateAndPrintPDF}>
          Generar PDF e imprimir
        </button>
      </div>
    );
  }
}

export default App;
