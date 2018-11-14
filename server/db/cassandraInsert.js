const ExpressCassandra = require('express-cassandra');

const models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: { port: 9042 },
    keyspace: 'mykeyspace',
    queryOptions: { consistency: ExpressCassandra.consistencies.one },
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1,
    },
    migration: 'safe',
  },
});

const MyModel = models.loadSchema('Reviews', {
  fields: {
    id: 'int',
    product_id: 'int',
    rating: 'int',
    reviewer: 'text',
    title: 'text',
    body: 'text',
    recommend: 'boolean',
    helpful: 'int',
    unhelpful: 'int',
    posting_date: 'text',
  },
  key: ['id'],
});

MyModel.syncDB((err, result) => {
  if (err) {
    console.error(err);
  }
  console.log('schema was changed', result);
});
