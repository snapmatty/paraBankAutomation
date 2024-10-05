import { faker } from "@faker-js/faker";

function generatePassword() {
  return faker.internet.password();
}
const password = generatePassword();

const newUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  cityName: faker.location.city(),
  stateName: faker.location.state(),
  zipCode: faker.location.zipCode(),
  phoneNumber: faker.phone.number(),
  userName: faker.internet.userName(),
  password: password,
  confirmPassword: password,
  socialSecurityNumber: faker.number
    .int({ min: 100000000, max: 999999999 })
    .toString(),
};

export { newUser };
