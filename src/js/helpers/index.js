import faker from 'faker';

export function getFakePayload() {
  const fakeData = getFakeData();

  return {
    id: Date.now(),
    title: faker.lorem.words(),
    ...fakeData[getRandomInt(fakeData.length)],
  };
}

function getFakeData() {
  return [
    {
      backTitle: faker.lorem.words(),
    },
    {
      image: faker.image.image(),
    },
    {
      description: faker.lorem.paragraph(),
    },
  ];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}