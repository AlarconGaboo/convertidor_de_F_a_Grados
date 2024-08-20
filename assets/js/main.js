document.getElementById('convertBtn').addEventListener('click', async function() {
    const tempF = document.getElementById('tempF').value;
    const tempC = await convertToFahrenheit(tempF);
    document.getElementById('result').innerText = `Grados °C: ${tempC.toFixed(2)}`;
});

async function convertToFahrenheit(fahrenheit) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const celsius = (5/9) * (fahrenheit - 32);
            resolve(celsius);
        }, 1000); // Simulamos un pequeño retraso para mostrar el uso de async/await
    });
}
