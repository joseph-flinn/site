import fs from 'fs';


const extractData = (metadataLines) => {
  const data = metadataLines
    .filter(line => line.startsWith("!!"))
    .map(line => {
      const [key, value] = line.substring(3).split(": ");
      return [key, value]
    })

  return Object.fromEntries(data);

}

const filenames = fs.readdirSync('./posts/');

const posts = filenames.reduce((results, filename) => {
  const fileData = fs.readFileSync(`./posts/${filename}`, 'utf8');
  const [ data, body ] = fileData.split("---\n");
  const dataLines = data.split("\n");

  const postData = {
    ...extractData(dataLines),
    "body": body
  }
   
  return {
    ...results,
    [postData.stub]: postData
  }

}, {});


fs.writeFile("./src/posts.json", JSON.stringify(posts, null, 2), (err) => {
  if (err) throw err;
})



/*
const filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data)
});
*/
