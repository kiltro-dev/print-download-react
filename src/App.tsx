import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDFContent = () => {
  return (
    <table
      style={{
        fontFamily: "Arial",
        borderCollapse: "collapse",
        width: "100%",
        background: "#242424",
        marginBottom: "1rem",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#242424", color: "#fff" }}>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nombre</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Edad</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>País</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: "#242424", color: "#fff" }}>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Juan</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>25</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>España</td>
        </tr>
        <tr style={{ backgroundColor: "#242424", color: "#fff" }}>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>María</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>30</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Francia</td>
        </tr>
        <tr style={{ backgroundColor: "#242424", color: "#fff" }}>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Carlos</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>22</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Italia</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const generateAndPrintPDF = () => {
    const doc = new jsPDF();
    const element = document.getElementById("pdf-content");
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 10, 10, 180, 0);
        doc.autoPrint();
        window.open(doc.output("bloburl"), "_blank");
      });
    } else {
      console.error("No se encontró el elemento con el id 'pdf-content'");
    }
  };

  const generateAndDownloadPDF = () => {
    const doc = new jsPDF();
    const element = document.getElementById("pdf-content");
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 10, 10, 180, 0);
        doc.save("documento.pdf");
      });
    } else {
      console.error("No se encontró el elemento con el id 'pdf-content'");
    }
  };

  return (
    <div>
      <h1>Imprimir y Descargar</h1>
      <div id="pdf-content">
        <PDFContent />
      </div>
      <button style={{ marginRight: "1rem" }} onClick={generateAndPrintPDF}>
        Generar PDF e imprimir
      </button>
      <button onClick={generateAndDownloadPDF}>Generar PDF y descargar</button>
    </div>
  );
};

export default App;
