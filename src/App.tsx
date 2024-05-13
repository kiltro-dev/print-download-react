import React from "react";
import jsPDF from "jspdf";

class App extends React.Component {
  generateAndPrintPDF = () => {
    // Generar el PDF
    const doc = new jsPDF();
    doc.text("¡Hola, este es un PDF generado desde React!", 10, 10);
    //  Convertir el PDF a Blob
    const pdfBlob = doc.output("blob");
    // Crear una URL del Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);
    //  Abrir una nueva ventana con el PDF
    const printWindow = window.open(pdfUrl, "_blank");
    if (printWindow) {
      // Imprimir el PDF
      printWindow.print();
    } else {
      alert(
        "El navegador bloqueó la ventana emergente. Por favor, habilite las ventanas emergentes para imprimir."
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Generar PDF e imprimir</h1>
        <button onClick={this.generateAndPrintPDF}>
          Generar PDF e imprimir
        </button>
      </div>
    );
  }
}

export default App;
