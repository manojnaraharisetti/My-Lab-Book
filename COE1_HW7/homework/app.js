// app.js
const appRoot = document.getElementById('app-root');

// Create header
const header = document.createElement('h1');
header.textContent = 'Countries Search';
appRoot.appendChild(header);

// Create form
const form = document.createElement('form');

// Create radio buttons for type of search
const searchTypeLabel = document.createElement('label');
searchTypeLabel.textContent = 'Please choose the type of search:';
form.appendChild(searchTypeLabel);
form.appendChild(document.createElement('br'));

const byRegionRadio = document.createElement('input');
byRegionRadio.type = 'radio';
byRegionRadio.name = 'searchType';
byRegionRadio.value = 'region';
byRegionRadio.id = 'byRegion';
const byRegionLabel = document.createElement('label');
byRegionLabel.htmlFor = 'byRegion';
byRegionLabel.textContent = 'By Region';
form.appendChild(byRegionRadio);
form.appendChild(byRegionLabel);

const byLanguageRadio = document.createElement('input');
byLanguageRadio.type = 'radio';
byLanguageRadio.name = 'searchType';
byLanguageRadio.value = 'language';
byLanguageRadio.id = 'byLanguage';
const byLanguageLabel = document.createElement('label');
byLanguageLabel.htmlFor = 'byLanguage';
byLanguageLabel.textContent = 'By Language';
form.appendChild(byLanguageRadio);
form.appendChild(byLanguageLabel);

form.appendChild(document.createElement('br'));

// Create dropdown for search query
const searchQueryLabel = document.createElement('label');
searchQueryLabel.textContent = 'Please choose search query:';
form.appendChild(searchQueryLabel);
const searchQuerySelect = document.createElement('select');
searchQuerySelect.disabled = true;
form.appendChild(searchQuerySelect);

// Update dropdown options when a radio button is selected
form.searchType.forEach(radio => {
  radio.addEventListener('change', () => {
    searchQuerySelect.disabled = false;
    searchQuerySelect.innerHTML = ''; // Clear current options
    const data = radio.value === 'region' ? externalService.getRegionsList() : externalService.getLanguagesList();
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;
      searchQuerySelect.appendChild(option);
    });
  });
});

appRoot.appendChild(form);

// Create table
const table = document.createElement('table');
appRoot.appendChild(table);

// Update table when a search query is selected
searchQuerySelect.addEventListener('change', () => {
  table.innerHTML = ''; // Clear current table
  const data = form.byRegion.checked ? externalService.getCountryListByRegion(searchQuerySelect.value) : externalService.getCountryListByLanguage(searchQuerySelect.value);
  
  // Create table headers
  const headers = ['name', 'Capital', 'region', 'languages', 'area', 'flagURL'];
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');
  data.forEach(country => {
    const row = document.createElement('tr');
    headers.forEach(header => {
      const td = document.createElement('td');
      if (header === 'flagURL') {
        const img = document.createElement('img');
        img.src = country.flag;
        img.alt = `${country.name}'s flag`;
        td.appendChild(img);
      } else if (header === 'languages') {
        // Display languages properly
        const languages = Object.values(country.languages).join(', ');
        td.textContent = languages;
      } else {
        td.textContent = country[header.toLowerCase()];
      }
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
});
