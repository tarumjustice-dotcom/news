// Simpan ke daftar transaksi keuangan
try {
    const arr = JSON.parse(localStorage.getItem('kantinTransactions') || '[]');
    arr.push({
        id: 'trx-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        customerName: customerName,
        room: 'Meja ' + tableNumber,
        orderType: orderType,
        paymentMethod: paymentMethod,
        items: orderData.items,
        total: subtotal,
        notes: orderNotes,
        date: new Date().toISOString().slice(0, 10),
        timestamp: new Date().toISOString(),
        status: paymentMethod === 'hutang' ? 'hutang' : 'lunas'
    });
    localStorage.setItem('kantinTransactions', JSON.stringify(arr));
} catch(e) { /* ignore */ }