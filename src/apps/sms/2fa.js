import signalWireClient from '../../lib/signalWire';

export async function main(args) {
    console.log('Hello from SignalWire Functions!', args);
    // return [].forEach(async (phoneNumber) => {
    //     await signalWireClient.messages.create({
    //         body: args.body || 'Hello from SignalWire!',
    //         to: `+1${(phoneNumber).replace(/\D/g, '')}`,
    //         from: process.env.SIGNALWIRE_PHONE || '+14062834665'
    //     });
    // });
}
