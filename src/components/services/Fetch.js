const BASE_URL = `http://localhost:3010`;

// Метод для получения массива Новостей из БД
export const getDataBaseInfo = async (key) => {
  const response = await fetch(`${BASE_URL}/${key}`);
  const data = await response.json();
  return data;
};

// Метод добавляет новость в БД
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