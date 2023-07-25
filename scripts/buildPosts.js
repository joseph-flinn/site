import fs from 'fs';


const assert = (condition, message) => {
    if (!condition) throw new Error(message || "Assertion failed");
}

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


// Compile 
const posts = filenames.reduce((results, filename) => {
  const requiredMetaDataKeys = ["title", "published", "slug", "description"];

  const fileData = fs.readFileSync(`./posts/${filename}`, 'utf8');
  const [ data, body ] = fileData.split("---\n");

  const postMetadata = extractData(data.split("\n"));

  requiredMetaDataKeys.map(key => assert(
    key in postMetadata, 
    `${filename} - "${key}" is a required post metadata`
  ));

  const postData = {
    ...postMetadata,
    "body": body
  }
   
  return {
    ...results,
    [postData.slug]: postData
  }

}, {});


// Save post data to posts.json
fs.writeFile("./src/posts.json", JSON.stringify(posts, null, 2), (err) => {
  if (err) throw err;
})
