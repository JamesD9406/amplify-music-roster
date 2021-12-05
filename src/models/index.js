// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artists } = initSchema(schema);

export {
  Artists
};