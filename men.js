let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let listProducts = [
        {
            id: 1,
            name: 'Name product white-black',
            price: 150 ,
            quantity: 0,
            image: 'men-image/men-image1.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'Shirt'
            }
        },
        {
            id: 2,
            name: 'Name product white-black-grey',
            price: 80,
            quantiy: 30,
            image: 'men-image/men-image2.jpg',
            nature: {
                color: ['white', 'black', 'grey'],
                size: ['S', 'M', 'L'],
                type: 'Shirt'
            }
        },
        {
            id: 3,
            name: 'Name product black',
            price: 60,
            quantiy: 30,
            image: 'men-image/men-image3.jpg',
            nature: {
                color: ['black'],
                size: ['S', 'M', 'L'],
                type: 'Shirt'
            }
        },
        {
            id: 4,
            name: 'Name product blue-black',
            price: 40,
            quantiy: 30,
            image: 'men-image/men-image4.jpg',
            nature: {
                color: ['black', 'blue'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 5,
            name: 'Name product brown',
            price: 70,
            quantiy: 30,
            image: 'men-image/men-image5.jpg',
            nature: {
                color: ['brown'],
                size: ['S', 'M', 'L'],
                type: 'T-shirt'
            }
        },
        {
            id: 6,
            name: 'Name product white-black',
            price: 100,
            quantiy: 30,
            image: 'men-image/men-image6.jpg',
            nature: {
                color: ['white', 'black'],
                size: ['S', 'M', 'L'],
                type: 'Polo'
            }
        },
    
    ];
    
    let productFilter = listProducts;
    
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            // check color
            if(valueFilter.color.value != ''){
                if(!item.nature.color.includes(valueFilter.color.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            // check min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })
    function showProduct(productFilter) {
       
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // Create anchor tag
            let newLink = document.createElement('a');
            newLink.href = `productdetail1.html?id=${item.id}`; // Replace with actual product page
            
    
            // Create image
            let newImage = new Image();
            newImage.src = item.image;
            newLink.appendChild(newImage);
            
            // Append link to newItem
            newItem.appendChild(newLink);
    
            // Create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
    
            // Create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + ' €';
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    }
    