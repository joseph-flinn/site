import fs from 'fs';
import { promises as pfs } from 'fs';


const extractData = (metadataLines) => {
  const data = metadataLines
    .filter(line => line.startsWith("!!"))
    .map(line => {
      const [key, value] = line.substring(3).split(": ");
      return [key, value]
    })

  console.log(`data: ${JSON.stringify(data)}`)
  return Object.fromEntries(data);

}

const filenames = fs.readdirSync('./posts/');

const posts = filenames.map(filename => {
  const postData = pfs.readFile(`./posts/${filename}`, 'utf8', (err, fileData) => {
    if (err) throw err;
    return fileData
  }).then( fileData => {
    const [ data, body ] = fileData.split("---\n");
    const dataLines = data.split("\n");

    console.log(`ExtractData: ${JSON.stringify(extractData(dataLines))}`);

    return {
      ...extractData(dataLines),
      "body": body
    }
  });
  

  console.log(`postData: ${postData}`);
  return postData;
});


console.log(posts);



/*
const filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data)
});
*/
