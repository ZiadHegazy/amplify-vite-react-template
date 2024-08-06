import { defineFunction } from '@aws-amplify/backend';

export const function1 = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'function1',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts'
});