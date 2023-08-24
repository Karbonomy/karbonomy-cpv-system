import { faker } from '@faker-js/faker';

const certificates = [...Array(23)].map((_, index) => {
  const startDate = faker.date.recent(30);
  const endDate = faker.date.between(startDate, new Date());

  return {
    id: faker.random.alphaNumeric(3),
    name: faker.commerce.productName(),
    imageUrl: `/assets/images/jungles/jungle_${index + 1}.jpg`,
    usdtPrice: parseFloat(faker.finance.amount(0, 1000, 2)),
    carbonAmount: parseFloat(faker.finance.amount(0, 1000, 2)),
    createdAt: faker.date.recent().toISOString(),
    origin: faker.name.firstName(),
    avatar: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    address: faker.address.cityName(),
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
});

export default certificates;
