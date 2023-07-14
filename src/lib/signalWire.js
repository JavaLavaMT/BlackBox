import  { RestClient } from'@signalwire/node';

const {
  SIGNALWIRE_KEY,
  SIGNALWIRE_PROJECT
} = process.env;
let signalWireClient = SIGNALWIRE_KEY && new RestClient(SIGNALWIRE_PROJECT, SIGNALWIRE_KEY, { signalwireSpaceUrl: 'associated-employers.signalwire.com' });
// module.exports  = SIGNALWIRE_KEY && new RestClient(SIGNALWIRE_PROJECT, SIGNALWIRE_KEY, { signalwireSpaceUrl: 'associated-employers.signalwire.com' });
export default signalWireClient
