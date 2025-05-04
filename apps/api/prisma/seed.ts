import { PrismaClient } from 'generated/prisma';
import {faker} from "@faker-js/faker/locale/ar";

const prisma = new PrismaClient();

async function main() {
  const users = Array.from({ length: 10 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    bio: faker.lorem.sentence(),
    avatar: faker.image.avatar(),
  }));

  await prisma.user.createMany({
    data: users,
})
}