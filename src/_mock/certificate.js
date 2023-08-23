import { faker } from '@faker-js/faker';

const certificates = [...Array(23)].map((_, index) => ({
  id: faker.random.alphaNumeric(3),
  name: faker.commerce.productName(),
  imageUrl: `/assets/images/jungles/jungle_${index + 1}.jpg`,
  usdtPrice: parseFloat(faker.finance.amount(0, 1000, 2)),
  carbonPrice: parseFloat(faker.finance.amount(0, 1000, 2)),
  createdAt: faker.date.recent().toISOString(),
  createdBy: faker.name.firstName()
}));

export default certificates;
