/**
 * we have used the node-fetch library to send an ajax request to the Github API and get the response
 */
const fetch = require('node-fetch');

async function asyncajaxawait(x)
{
  const res = await fetch('https://api.github.com/users/KrunalLathiya')
  const data = await res.json();
  console.log(data.name);
}

asyncajaxawait(10);