import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const projects = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  organization: faker.company.name(),
  amount: faker.finance.amount(),
  price: faker.finance.amount(),
  date: "2023-08-08"
}));

export default projects;
