import  { RestClient } from '@signalwire/node';

const {
  SIGNALWIRE_KEY,
  SIGNALWIRE_PROJECT
} = process.env;

module.exports  = SIGNALWIRE_KEY && new RestClient(SIGNALWIRE_PROJECT, SIGNALWIRE_KEY, { signalwireSpaceUrl: 'associated-employers.signalwire.com' });
