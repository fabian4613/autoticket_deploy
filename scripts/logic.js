const envs = {
    'DEV': {
        'asi-dev-java-n1.gcba.gob.ar': '10.9.6.20'
    },
    'QA': {
        'asi-qa-java-n1.gcba.gob.ar': '10.16.0.80'
    },
    // ...
};

window.onload = () => {
    const title = document.getElementById('report-title');
    title.innerText = 'Informe de Despliegue de HIS en QA/HML';

    const nodosContainer = document.getElementById('nodos');
    Object.entries(envs.QA).forEach(([name, ip]) => {
        const label = document.createElement('label');
        label.innerText = `Nodo ${name}: `;
        nodosContainer.appendChild(label);

        const input = document.createElement('input');
        input.type = 'time';
        input.id = `nodo-${ip}`;
        nodosContainer.appendChild(input);
    });

    const button = document.getElementById('generate');
    button.onclick = generateReport;
}

function generateReport() {
    const startTime = document.getElementById('start').value;
    const report = document.getElementById('report');
    report.innerHTML = `<p>Inicia: ${startTime}</p>`;
    Object.entries(envs.QA).forEach(([name, ip]) => {
        const nodoTime = document.getElementById(`nodo-${ip}`).value;
        report.innerHTML += `<p>${name}: ${nodoTime}</p>`;
    });
    const warCheck = document.getElementById('warCheck').value;
    report.innerHTML += `<p>Revisión de WARs: ${warCheck}</p>`;
}
