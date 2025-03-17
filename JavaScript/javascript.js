
function debounce(func, delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
};
}


// Function to toggle accordion
function toggleAccordion(element) {
    const header = element;
    const content = header.nextElementSibling;

  
    header.classList.toggle("active");

    content.style.display = content.style.display === "block" ? "none" : "block";
}

function calculateAndRedirect(){
    hitungVolume();
    window.location.href = 'RabSumurResapan.html';
}

function saveFormData(event){
    event.prevenDefault();

    const luasLantai = document.getElementById('luas_lantai').value;
    const diameterBuis = document.getElementById('diameter_buis').value;
    const kedalaman = document.getElementById('kedalaman').value;

    localStorage.setItem('luasLantai', luasLantai);
    localStorage.setItem('diameterBuis', diameterBuis);
    localStorage.setItem('kedalaman', kedalaman);

    windows.location.href = 'RabSumurResapan.html'


}


document.addEventListener('DOMContentLoaded', () => {

    const calculateButton = document.getElementById('calculate-button');
    if (calculateButton){
        calculateButton.addEventListener('click', calculateAndRedirect)  
    }
    
    // Change pattern image based on selected option
    const polaElement = document.getElementById('pola');
    if (polaElement) {
        polaElement.addEventListener('change', function() {
            var selectedOption = this.options[this.selectedIndex];
            var imgSrc = selectedOption.getAttribute('data-img');
            const patternImage = document.getElementById('pattern-image');
            if (patternImage) {
                patternImage.src = imgSrc;
            }
        });
    }


    // Function to check form completion
    function checkFormCompletion() { 
        const luasLantai = document.getElementById('luas_lantai')?.value.trim();
        const diameterBuis = document.getElementById('diameter_buis')?.value.trim();
        const kedalaman = document.getElementById('kedalaman')?.value.trim();

        const button = document.getElementById('calculate-button');
        if (button) {
            button.disabled = !(luasLantai && diameterBuis && kedalaman);
        }
    }

    // Set up event listeners for form fields if they exist
    const luasLantaiElement = document.getElementById('luas_lantai');
    const diameterBuisElement = document.getElementById('diameter_buis');
    const kedalamanElement = document.getElementById('kedalaman');

    if (luasLantaiElement && diameterBuisElement && kedalamanElement) {
        const inputs = [luasLantaiElement, diameterBuisElement, kedalamanElement];
        
        inputs.forEach(input => {
            input.addEventListener('input', checkFormCompletion);
        });

        // Initial check on page load
        checkFormCompletion();
    }
    


});
