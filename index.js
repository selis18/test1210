function getUsersController(limit = 15, offset = 0, age = 18) {
    // Подключение к базе данных и выполнение запроса
    // Пример кода для выполнения запроса:
    // const query = `SELECT name, surname, age, city FROM users WHERE age >= $1 OFFSET $2 LIMIT $3`;
    // const values = [age, offset, limit];
    // const result = await db.query(query, values); // Здесь db.query - это метод для выполнения запроса в базу данных
  
    // Пример данных, полученных из базы данных
    const dataFromDB = [
      {
        name: 'Александр',
        surname: 'Попов',
        city: 'msk',
        age: 35,
      },
      {
        name: 'Алексей',
        surname: 'Попов',
        city: 'msk',
        age: 35,
      },
      {
        name: 'Дмитрий',
        surname: 'Попов',
        city: 'spb',
        age: 35,
      },
      {
        name: 'Иван',
        surname: 'Попов',
        city: 'ijk',
        age: 35,
      },
      {
        name: 'Сергей',
        surname: 'Попов',
        city: 'ijk',
        age: 35,
      },
    ];
  
    // Обработка данных из базы данных
    const users = dataFromDB.map((user) => ({
      name: user.name,
      surname: user.surname,
      age: user.age,
    }));
  
    const cities = {};
    for (const user of dataFromDB) {
      const cityName = user.city;
      const userName = `${user.name} ${user.surname}`;
      
      if (cities[cityName]) {
        if (Array.isArray(cities[cityName])) {
          cities[cityName].push(userName);
        } else {
          cities[cityName] = [cities[cityName], userName];
        }
      } else {
        cities[cityName] = userName;
      }
    }
  
    return {
      users,
      cities,
    };
  }

console.log(getUsersController());