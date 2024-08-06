import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { function1 } from './functions/function1/resource';
defineBackend({
  auth,
  data,
  function1,
});
