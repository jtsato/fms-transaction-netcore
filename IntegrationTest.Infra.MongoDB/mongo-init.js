﻿print('Start #################################################################');

db = new Mongo().getDB("transactions-mongodb");

db.createUser({
    user: 'xunit',
    pwd: 'xunit',
    roles: [
        {
            role: 'readWrite',
            db: 'transactions-mongodb',
        },
    ],
});

db.createCollection('transactions', {capped: false});
db.createCollection('transactions_sequences', {capped: false});

print('End #################################################################');
