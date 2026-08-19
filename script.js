let selectedQty = 3;
let selectedPrice = 999;

function selectOffer(qty, price, element) {
    selectedQty = qty;
    selectedPrice = price;
    
    document.querySelectorAll('.offer-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
    
    document.getElementById('totalPrice').innerText = price + ' টাকা';
}

function sendToWhatsApp(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const size = document.getElementById('size').value;
    const colors = document.getElementById('colors').value;

    const whatsappNumber = "8809658754629";
    
    const message = `*নতুন অর্ডার (LinkUp Tex Global)*%0A%0A` +
        `*নাম:* ${encodeURIComponent(name)}%0A` +
        `*ফোন নম্বর:* ${encodeURIComponent(phone)}%0A` +
        `*ঠিকানা:* ${encodeURIComponent(address)}%0A` +
        `*প্যাকেজ:* ${selectedQty} টি টি-শার্ট (মূল্য: ${selectedPrice} টাকা)%0A` +
        `*সাইজ:* ${encodeURIComponent(size)}%0A` +
        `*কালার পছন্দ:* ${encodeURIComponent(colors)}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}