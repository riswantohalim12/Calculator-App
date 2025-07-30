// script.js
const display = document.getElementById('result');

// Fungsi untuk memasukkan nilai ke layar
function insert(value) {
    // Mencegah beberapa titik desimal dalam satu angka
    const lastChar = display.value.slice(-1);
    if (value === '.' && (lastChar === '.' || display.value.split(/[\+\-\*\/%]/).pop().includes('.'))) {
        return;
    }
    display.value += value;
}

// Fungsi untuk membersihkan layar (AC - All Clear)
function clearScreen() {
    display.value = '';
}

// Fungsi untuk menghapus karakter terakhir (DEL - Delete)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Fungsi untuk menghitung hasil
function calculate() {
    try {
        // Menggunakan eval() untuk menghitung string matematika.
        // Hati-hati: eval() bisa berisiko jika input tidak terkontrol.
        // Untuk kalkulator sederhana ini, cukup aman.
        let expression = display.value.replace(/%/g, '/100'); // Mengganti % menjadi /100
        let result = eval(expression);
        
        // Memformat hasil agar tidak terlalu panjang
        display.value = parseFloat(result.toFixed(10));
    } catch (error) {
        display.value = 'Error';
    }
}