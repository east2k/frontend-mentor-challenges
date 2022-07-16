
slider.addEventListener('input', () => {
    updateDetails();
});

switchCheck.addEventListener('input', () => {
    billing.status = switchCheck.checked;
    updateDetails();
});