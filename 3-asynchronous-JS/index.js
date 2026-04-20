const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');
const { reject } = require('superagent/lib/request-base');

// Using Promise , to remove the Callback Hell
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😥');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file😂😁');
      resolve('Success');
    });
  });
};

// Now perform the same task with Async and await method to make it more easily
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
    );

    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
    );

    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
    );

    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    console.log(typeof all);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);

    await writeFilePro('dog-image.txt', imgs.join('\n'));

    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
    throw err;
  }

  return '2: Ready 🐕‍🦺';
};

(async () => {
  try {
    console.log('1: will get dog pics!');
    const x = await getDogPic();
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (error) {
    console.log('Error 🔥');
  }
})();
/*
console.log('1: will get dog pics!');
getDogPic()
  .then((x) => {
    console.log(x);
    console.log('3: Done getting dog pics!');
  })
  .catch((err) => {
    console.log('Error 🔥');
  });
*/

/*
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Bread: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('dog-image.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file!');
  })
  .catch((err) => {
    console.log(err);
  });
*/

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Bread: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       fs.writeFile('dog-image.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log('Random dog image saved to file!');
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });
