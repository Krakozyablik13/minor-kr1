document.getElementById('apply').addEventListener('click', function() {
    const gallery = [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 4 },
        { name: 'thril', price: 4 },
        { name: 'hor', price: 4 },
        { name: 'fant', price: 4 },
        { name: 'thril&hor', price: 6 },
        { name: 'fant&rom', price: 6 }
        
    ];

    let totalItems = 0;
    let totalPrice = 0;

    gallery.forEach((item, index) => {
        const quantityInput = document.getElementById(`item${index + 1}`);
        const quantity = parseInt(quantityInput.value) || 0; 

        totalItems += quantity;
        totalPrice += quantity * item.price;
    });


    const output = `Total ordered items: ${totalItems}<br>Total price: $${totalPrice}`;
    document.getElementById('output').innerHTML = output;
});