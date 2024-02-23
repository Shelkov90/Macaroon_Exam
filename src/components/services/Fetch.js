const BASE_URL = `http://localhost:3010`;


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
export const addDataBaseItem = async (key) => {
  const response = await fetch(`${BASE_URL}/${key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  });
  const data = await response.json();
  return data;
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