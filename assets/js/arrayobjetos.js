// Agregar horas al arreglo de Traumatología
traumatologia.push(
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'}
);

// Eliminar el primer y último elemento del arreglo de Radiología
radiologia.shift(); //preguntar que va dentro de cada parentesis
radiologia.pop();

//preguntar que va dentro de cada parentesis


// Imprimir la lista de consultas médicas de Dental
document.write('<p>Consultas médicas de Dental:</p>');
for (let i = 0; i < traumatologia.length; i++) {
    let consulta =


let pacientesAtendidos = [
    'FRANCISCA ROJAS',
    'PAMELA ESTRADA',
    'ARMANDO LUNA',
    'MANUEL GODOY',
    'RAMON ULLOA',
    'PAULA SANCHEZ',
    'ANGÉLICA NAVAS',
    'ANA KLAPP',
    'FELIPE MARDONES',
    'DIEGO MARRE',
    'CECILIA MENDEZ',
    'MARCIAL SUAZO',
    'etc, etc',
];

// Imprimir un paciente por cada párrafo
for (let i = 0; i < pacientesAtendidos.length; i++) {
    document.write(pacientesAtendidos[i] + '<br>');
}

// Imprimir un paciente por cada párrafo
let consultasDental = [
    'ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE',
    'MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE',
    // ... (otros pacientes)
];

// Filtrar pacientes de ISAPRE
let pacientesIsapre = consultasDental.filter(function(consulta) {
    return consulta.includes('ISAPRE');
});

// Imprimir pacientes de ISAPRE
document.write('<p>Pacientes de ISAPRE en consultas médicas de Dental:</p>');
for (let i = 0; i < pacientesIsapre.length; i++) {
    document.write(pacientesIsapre[i] + '<br>');
}

// Filtrar pacientes de FONASA
let pacientesFonasa = consultasTraumatologia.filter(function(consulta) {
    return consulta.includes('FONASA');
});

// Imprimir pacientes de FONASA
document.write('<p>Pacientes de FONASA en consultas médicas de Traumatología:</p>');
for (let i = 0; i < pacientesFonasa.length; i++) {
    document.write(pacientesFonasa[i] + '<br>');
}