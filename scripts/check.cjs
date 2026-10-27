const fs=require('node:fs'),vm=require('node:vm');
for(const path of ['public/app.js','public/curriculum.js','api/ai.js'])new vm.Script(fs.readFileSync(path,'utf8'),{filename:path});
const context={window:{}};vm.runInNewContext(fs.readFileSync('public/curriculum.js','utf8'),context);
for(const level of ['Beginner','Intermediate','Advanced']){const topics=Array.from({length:90},(_,i)=>context.window.lessonTopic(level,i+1));if(new Set(topics).size!==90)throw Error('Missing/duplicate topic: '+level)}
for(const file of ['public/index.html','public/style.css'])if(!fs.statSync(file).size)throw Error('Empty '+file);
console.log('Syntax passed; 90 distinct topic/stage entries per level.');
