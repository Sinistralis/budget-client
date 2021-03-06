import { Map as immutableMap, fromJS } from 'immutable';
import moment from 'moment';
import uuid from 'node-uuid';
import faker from 'faker';

import { dateFormat } from './utils';

const currentDay = moment().format(dateFormat.daily);

/* FAKER PROFILE - Seeding new values */
const profile = faker.helpers.createCard();

/* USER OBJECT - Skeleton for user object */
const user = {
  id: uuid.v4(),
  name: profile.name,
  firstName: profile.name.split(' ')[0],
  lastName: profile.name.split(' ')[1],
  username: profile.username,
  email: profile.email,
  address: profile.address,
  phone: profile.phone,
  website: profile.website,
  company: profile.company,
  imageUrl: faker.image.imageUrl(),
  isAuthenticated: true,
  isLoggedIn: true,
};

/* ERROR OBJECT - Skeleton for error object */
const errors = {

};

/* BUDGET OBJECT - Skeleton for budget object for use with budget1Day */
const budget1Day = '2015-11-14';
const budget1 = {
  user: user.name,
  user_id: user.id,
  name: `${user.firstName}'s Budget`,
  description: `This is ${user.firstName}'s test budget`,
  routine: [
    // Randomly generated via createRoutine
  ],
  nonroutine: {
    // Randomly generated via createNonRoutine
  },
};


/* Helper functions for creating transactions */
function createRoutine(day) {
  const id = uuid.v4();
  const t = faker.helpers.createTransaction();

  return immutableMap({
    id,
    name: t.business,
    description: t.name,
    type: t.type,
    active: true,
    createdOn: moment(day),
    startOn: day,
    endOn: moment(day).add(1, 'Y'),
    duration: '1 Year',
    amount: Number(t.amount),
    frequency: Math.floor((Math.random() * 4) + 1),
    frequencyDescription: '2x Month: 2*amount / # days in month',
    accounting: 'credit',
  });
}

function createNonRoutine(day) {
  const id = uuid.v4();
  const t = faker.helpers.createTransaction();
  let amount = Math.floor((Math.random() * 100));
  if (amount % 2 === 0) {amount = amount * -1;}
  return {
    id,
    name: t.business,
    description: t.name,
    type: t.type,
    active: true,
    createdOn: moment(day),
    startOn: day,
    amount: Number(t.amount),
    accounting: 'debit',
  };
}

/* Generate random transactions */
budget1.nonroutine[currentDay] = [];
budget1.nonroutine[currentDay].push(createNonRoutine(currentDay));
budget1.routine.push(createRoutine(currentDay));

for (let i = 0; i < Math.floor(Math.random() * 15 + 1); i++) {
  budget1.nonroutine[currentDay].push(createNonRoutine(currentDay));
}

for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
  budget1.routine.push(createRoutine(currentDay));
}

/* OUTPUT: EXAMPLE STORE OBJECT */
const exampleStore = fromJS({
  user,
  errors,
  budget: budget1,
});

console.log('New exampleStore created.');

module.exports = {
  budget1,
  budget1Day,
  createRoutine,
  createNonRoutine,
  exampleStore,
};
