document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Spike Model 1', description: 'High-quality spike imported from the best manufacturers.', image: 'images/product1.jpg' },
        { id: 2, name: 'Spike Model 2', description: 'Premium spike for professional use, ensuring top performance.', image: 'images/product2.jpg' },
        { id: 3, name: 'Spike Model 3', description: 'Durable and lightweight spike, perfect for all athletes.', image: 'images/product3.jpg' },
        { id: 4, name: 'Spike Model 4', description: 'High-quality spike imported from the best manufacturers.', image: 'images/product4.jpg' },
        { id: 5, name: 'Spike Model 5', description: 'Premium spike for professional use, ensuring top performance.', image: 'images/product5.jpg' },
        { id: 6, name: 'Spike Model 6', description: 'Durable and lightweight spike, perfect for all athletes.', image: 'images/product6.jpg' },
        { id: 7, name: 'Spike Model 7', description: 'High-quality spike imported from the best manufacturers.', image: 'images/product7.jpg' },
        { id: 8, name: 'Spike Model 8', description: 'Premium spike for professional use, ensuring top performance.', image: 'images/product8.jpg' },
        { id: 9, name: 'Spike Model 9', description: 'High-quality spike imported from the best manufacturers.', image: 'images/product9.jpg' },
        { id: 10, name: 'Spike Model 10', description: 'Premium spike for professional use, ensuring top performance.', image: 'images/product10.jpg' },
        { id: 11, name: 'Spike Model 11', description: 'High-quality spike imported from the best manufacturers.', image: 'images/product11.jpg' },
        { id: 12, name: 'Spike Model 12', description: 'Premium spike for professional use, ensuring top performance.', image: 'images/product12.jpg' },
        { id: 13, name: 'Spike Model 13', description: 'Durable and lightweight spike, perfect for all athletes.', image: 'images/product13.jpg' },
        { id: 14, name: 'Spike Model 14', description: 'High-quality spike imported from the best manufacturers.', image: 'images/product14.jpg' },
        { id: 15, name: 'Spike Model 15', description: 'Premium spike for professional use, ensuring top performance.', image: 'images/product15.jpg' }
    ];

    const productsPerPage = 6;
    const carouselInner = document.getElementById('carousel-inner-products');

    for (let i = 0; i < products.length; i += productsPerPage) {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${i === 0 ? 'active' : ''}`;

        const row = document.createElement('div');
        row.className = 'row justify-content-center';

        for (let j = i; j < i + productsPerPage && j < products.length; j++) {
            const product = products[j];

            const col = document.createElement('div');
            col.className = 'col-md-4';

            const card = document.createElement('div');
            card.className = 'card mb-4';

            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = product.image;
            img.alt = product.name;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = product.name;

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = product.description;

            const buyButton = document.createElement('a');
            buyButton.className = 'btn btn-primary';
            buyButton.href = 'https://wa.me/917010537504';
            buyButton.innerText = 'Buy Now';

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(buyButton);

            card.appendChild(img);
            card.appendChild(cardBody);

            col.appendChild(card);
            row.appendChild(col);
        }

        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);
    }

    // Add custom arrows
    const prevButton = document.querySelector('.custom-prev');
    const nextButton = document.querySelector('.custom-next');

    prevButton.addEventListener('click', function() {
        $('#productCarousel').carousel('prev');
    });

    nextButton.addEventListener('click', function() {
        $('#productCarousel').carousel('next');
    });
});
