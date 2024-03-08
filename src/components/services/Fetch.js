const BASE_URL = `http://localhost:3010`;

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data;
};

export const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

// Метод для добавления продукта в корзину
export const addProductToCart = async (product) => {
  try {
    const existingProductResponse = await fetch(`${BASE_URL}/cart/${product.id}`);
    if (existingProductResponse.status === 404) {
      // Товара с указанным ID еще нет в корзине, добавляем его
      const response = await fetch(`${BASE_URL}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      return await response.json();
    } else {
      // Если товар уже есть в корзине, обновляем его количество
      const existingProductData = await existingProductResponse.json();
      const updatedQuantity = existingProductData.quantity + 1;
      const updatedProduct = { ...existingProductData, quantity: updatedQuantity };

      const updateResponse = await fetch(`${BASE_URL}/cart/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update product in cart');
      }

      return await updateResponse.json();
    }
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
};

// Метод для удаления продукта из корзины
export const removeProductFromCart = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/${productId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Не удалось удалить товар из корзины');
    }
    return true; // Возвращаю true после успешного удаления
  } catch (error) {
    console.error('Ошибка при удалении товара из корзины:', error);
    throw error;
  }
};

// Метод для полной очситки корзины
export const clearCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart`, {
      method: 'DELETE',
    });
    return response.status; // Возвращаю только статус ответа
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};

// Метод для получения юзера по имейлу
export const getUserByEmail = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/users?email=${email}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user by email');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
};

// Метод для добавления нового пользователя в БД
export const addUserToDatabase = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to add user to database');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding user to database:', error);
    throw error; // Перехватываем ошибку и передаем ее обратно
  }
};

// Метод для получения массива информации из БД
export const getDataBaseInfo = async (key) => {
  const response = await fetch(`${BASE_URL}/${key}`);
  const data = await response.json();
  return data;
};

// Метод добавляет информацию в БД
export const addDataBaseItem = async (key, item) => {
  try {
    const response = await fetch(`${BASE_URL}/${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error('Failed to add item to database');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding item to database:', error);
    throw error; // Перехватываем ошибку и передаем ее обратно
  }
};

// Метод редактирования єлемента в БД (кроме продуктов)
export const editDataBaseItem = async (key, id, item) => {
  const response = await fetch(`${BASE_URL}/${key}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

// Метод редактирования єлемента в БД (кроме продуктов)
export const editDataBaseProductItem = async (key, id, item) => {
  const response = await fetch(`${BASE_URL}/${key}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

export const deleteDataBaseItem = async (key, id) => {
  fetch(`${BASE_URL}/${key}/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
    if (response.ok) {
      console.log('Элемент успешно удален');
    } else {
      console.error('Ошибка при удалении элемента:', response.status);
    }
    })
    .catch(error => console.error('Ошибка при отправке запроса:', error));
};