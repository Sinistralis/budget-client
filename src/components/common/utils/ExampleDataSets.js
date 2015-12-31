import { List, Map } from 'immutable';

const budget01 = Map({
    "user" : "barric.reed",
    "name" : "Barric's Budget",
    "description" : "This is Barric's test budget",
    "routine" : List.of(
        Map({
            "name": "Accenture Paycheck",
            "description": "2x month pay from Accenture",
            "type": "Salary",
            "timestamp": Date(),
            "amount": 4600.0,
            "frequency": 2,
            "frequencyDescription": "Twice a month -> 2*amount / # days in month",
            "accounting": "credit"
        }),
        Map({
            "name": "Rent",
            "description": "2x month pay from Accenture",
            "type": "Rent",
            "timestamp": Date(),
            "amount": -1350.0,
            "frequency": 1,
            "frequencyDescription": "Once a month -> amount / # days in month",
            "accounting": "debit"
        })
    ),
    "non-routine" : List.of(
        Map({
            "name": "Coffee",
            "description": "Starbucks",
            "type": "Coffee",
            "timestamp": Date(),
            "amount": -2.50,
            "accounting": "debit"
        }),
        Map({
            "name": "Lottery",
            "description": "Scratcher",
            "type": "Lottery",
            "timestamp": Date(),
            "amount": 5.0,
            "accounting": "credit"
        })
    )
});

module.exports = {
  budget01: budget01
};
