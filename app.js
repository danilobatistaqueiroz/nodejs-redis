const { log } = require('console');
const redis = require('redis');

log("starting app")


async function redisClient(){
  const client = redis.createClient({prefix: 'blocklist-access-token:' ,password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81'});

  client.on('error', (err) => console.error)

  await client.connect()

  //await client.set('mystring', 'Hello, Redis!');
  // Set a string value
  // client.set('mystring', 'Hello, Redis!', (err, reply) => {
  //     if (err) throw err;
  //     log(reply); // Should print "OK"
  // });
  // Get the string value
  // client.get('mystring', (err, reply) => {
  //     if (err) throw err;
  //     log(reply); // Should print "Hello, Redis!"
  // });
  const value = await client.get('mystring');

  const keys = await client.sendCommand(["keys","*"]);
  log(keys); // Should print "

  log(value)

  await client.disconnect();
  }

  redisClient();