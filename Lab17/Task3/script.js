const countrySelect = document.getElementById('countrySelect');
const citySelect = document.getElementById('citySelect');
const output = document.getElementById('output');

const countries = {
    USA: ['New-York', 'Boston', 'Washington'],
    Ukraine: ['Kyiv', 'Lviv', 'Odesa'],
    Germany: ['Berlin', 'Munich', 'Hamburg']
};

countrySelect.addEventListener('change', () => {
    const selectedCountry = countrySelect.value;
    const cities = countries[selectedCountry];

    citySelect.innerHTML = '';
    if (cities) {
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }

    updateOutput();
});

citySelect.addEventListener('change', updateOutput);

function updateOutput() {
    const selectedCountry = countrySelect.value;
    const selectedCity = citySelect.value;

    output.innerHTML = `
                <p>Chosen country: ${selectedCountry}</p>
                <p>Chosen city: ${selectedCity}</p>
            `;
}