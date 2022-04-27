

const select = element => document.querySelector(element);
const selectAll = elements => document.querySelectorAll(elements);

const mostrarSeleccionados = select('#seleccionados');
const alerta = select('#alerta');
const formulario = select('#formulario');


const equipos = [
  'River',
  'Boca',
  'Racing',
  'Independiente',
  'San Lorenzo',
  'Velez',
  'Newells',
  'Lanús',
  'Estudiantes',
  'Ferro',
  'Huracán',
  'Gimnasia',
  'Banfield',
  'Talleres'
]


equipos.forEach( equipo => {

  formulario.innerHTML += `
  <input type="checkbox" id="${equipo}" name="${equipo}" value="${equipo}">
  <label for="${equipo}">${equipo}</label><br>
  `;

})
  

const checkboxes = selectAll('input[type=checkbox]');

checkboxes.forEach( checkbox => {

  checkbox.addEventListener('change', (e) => {

    const seleccionados = selectAll('input[type=checkbox]:checked');

    if (seleccionados.length < 5) {

      alerta.innerText = '';
      mostrarSeleccionados.innerHTML = '';
      
      seleccionados.forEach( equipo => {
        mostrarSeleccionados.innerHTML += `<li>${equipo.value}</li>`;
      })

    } else {
      e.target.checked = false;
      alerta.innerText = 'No podés elegir más de 4 equipos!';
    }
  })
})

