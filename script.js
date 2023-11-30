let documentId = 1;

function addInfo() {
    const infoBox = document.createElement('div');
    infoBox.classList.add('infoBox');
    infoBox.innerHTML = `
        <p><strong>ID:</strong> ${documentId++}</p>
        <p><strong>Documento:</strong> ${document.getElementById('documentName').value}</p>
        <p><strong>Tipo de Arquivo:</strong> ${document.getElementById('fileType').value}</p>
        <p><strong>Descrição:</strong> ${document.getElementById('description').value}</p>
        <p><strong>Proprietário:</strong> ${document.getElementById('owner').value}</p>
        <p><strong>Local de Arquivo:</strong> ${document.getElementById('fileLocation').value}</p>
        <p><strong>Campo Quadrado:</strong> ${document.getElementById('squareField').value}</p>
        <p><strong>Campo Retângulo:</strong> ${document.getElementById('rectangleField').value}</p>
        <p><strong>Campo Bloco:</strong> ${document.getElementById('blockField').value}</p>
        <p><strong>Data de Arquivamento:</strong> ${document.getElementById('archiveDate').value}</p>
        <p><strong>Arquivado:</strong> ${document.getElementById('archived').value}</p>
        <p><strong>Digitalizado:</strong> ${document.getElementById('scanned').value}</p>
    `;
    document.getElementById('columnSquareArea').appendChild(infoBox);
}
