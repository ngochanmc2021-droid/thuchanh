// --- BÀI TẬP 1: SẢN PHẨM ---
const products = [
    { name: "Laptop Gaming Victus", price: "18.500.000đ" },
    { name: "iPhone 15 Pro Max", price: "32.000.000đ" },
    { name: "Chuột Logitech G502", price: "1.200.000đ" },
    { name: "Bàn phím cơ Akko", price: "1.500.000đ" },
    { name: "Tai nghe Sony WH-1000XM5", price: "6.500.000đ" }
];

function displayProducts(data) {
    const list = document.getElementById('product-list');
    if(!list) return;
    list.innerHTML = '';
    if (data.length === 0) {
        list.innerHTML = '<p class="error">Không tìm thấy sản phẩm phù hợp!</p>';
        return;
    }
    data.forEach(item => {
        list.innerHTML += `<div class="product-item"><h3>${item.name}</h3><p>${item.price}</p></div>`;
    });
}

function searchProduct() {
    const term = document.getElementById('search-input').value.toLowerCase().trim();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
}

// --- BÀI TẬP 2: VALIDATE FORM ---
function validateForm(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const agree = document.getElementById('agree').checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!emailRegex.test(email)) { alert("Email sai định dạng!"); return; }
    if (!passRegex.test(pass)) { alert("Mật khẩu ít nhất 8 ký tự, có chữ hoa, thường và số!"); return; }
    if (!agree) { alert("Bạn phải đồng ý điều khoản!"); return; }

    localStorage.setItem('userData', JSON.stringify({email, pass}));
    alert("Đăng ký và lưu LocalStorage thành công!");
}

// --- BÀI TẬP 3: TIMER ---
let timerInterval;
function startTimer() {
    let time = 600; // 10 phút = 600 giây
    const display = document.getElementById('timer');
    
    timerInterval = setInterval(() => {
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        
        display.textContent = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        if (time < 60) display.classList.add('danger');
        
        if (time <= 0) {
            clearInterval(timerInterval);
            alert("Hết giờ làm bài!");
        }
        time--;
    }, 1000);
}