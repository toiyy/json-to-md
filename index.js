const fs = require("fs");
const data = require('./contents.json');

console.log(data)

const titleArray = data.map((jsonItem) => ({id: jsonItem['id'], title: jsonItem['title'], content: jsonItem['content']}));

titleArray.forEach((item) => {
  fs.writeFile(`${item.id}.md`, `# ${item.title}\n${item.content}`, (err) => {
    if (err) throw err;
    console.log(`File ${item.id}.md has been saved!`);
  });
});
