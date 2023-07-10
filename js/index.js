
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const menuItemsContainer = document.getElementById('menuItems');
    const orderList = document.getElementById('orderList');
    const menu = data.menu;
    const orders = data.orders;

    menu.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      const image = document.createElement('img');
      image.src = item.img;
      image.alt = item.name;
      menuItem.appendChild(image);

      const name = document.createElement('h3');
      name.textContent = item.name;
      menuItem.appendChild(name);

      const description = document.createElement('p');
      description.textContent = item.description;
      menuItem.appendChild(description);

      const price = document.createElement('p');
      price.textContent = 'Price: Ksh' + item.price;
      menuItem.appendChild(price);

      const orderButton = document.createElement('button');
      orderButton.textContent = 'Order';
      orderButton.addEventListener('click', () => {
        orders.push(item);
        updateOrderList();
        alert ('order placed')
      });
      menuItem.appendChild(orderButton);

      menuItemsContainer.appendChild(menuItem);
      const utensilsButton = document.createElement('button');
      utensilsButton.textContent = 'Utensils';
      utensilsButton.addEventListener('click', () => {
        alert ('Utensils added')
      });
      menuItem.appendChild(utensilsButton);

      menuItemsContainer.appendChild(menuItem);
    });

    function updateOrderList() {
      orderList.innerHTML = '';
      orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.textContent = order.name + " Ksh" + order.price ;
        orderList.appendChild(listItem);
      });
    }
  });
