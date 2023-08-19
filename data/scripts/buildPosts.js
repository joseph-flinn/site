import fs from 'fs';


const POSTS_DIR = './posts';
const OUTPUT_DIR = '.';
const POSTS_REQUIRED_METADATA = ["title", "published", "slug", "description"];


const assert = (condition, message) => {
    if (!condition) throw new Error(message || "Assertion failed");
}

const extractData = (metadataLines) => {
  const data = metadataLines
    .filter(line => line.startsWith("!!"))
    .map(line => {
      const [key, value] = line.substring(3).split(": ");
      return [key, value];
    })

  return Object.fromEntries(data);

}

const filenames = fs.readdirSync(POSTS_DIR);


// Compile 
const posts = filenames.reduce((results, filename) => {
  if (filename.substring(0, 3) == "wip" ) return results;

  const fileData = fs.readFileSync(`./${POSTS_DIR}/${filename}`, 'utf8');
  const [ data, ...rawBody ] = fileData.split("---\n");

  const body = rawBody.join('---\n');
  const postMetadata = extractData(data.split("\n"));

  POSTS_REQUIRED_METADATA.map(key => assert(
    key in postMetadata, 
    `${filename} - "${key}" is a required post metadata`
  ));

  const postData = {
    ...postMetadata,
    "body": body
  };
   
  return {
    ...results,
    [postData.slug]: postData
  };

}, {});


// Save post data to posts.json
fs.writeFile(`${OUTPUT_DIR}/posts.json`, JSON.stringify(posts, null, 2), (err) => {
  if (err) throw err;
})
