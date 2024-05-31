document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.product-dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', () => {
            updateDropdowns();
        });
    });

    function updateDropdowns() {
        const selectedValues = Array.from(dropdowns)
            .map(dropdown => dropdown.value)
            .filter(value => value !== '');

        dropdowns.forEach(dropdown => {
            const options = dropdown.querySelectorAll('option');
            options.forEach(option => {
                if (selectedValues.includes(option.value) && option.value !== dropdown.value) {
                    option.style.display = 'none';
                } else {
                    option.style.display = 'block';
                }
            });
        });
    }
});
