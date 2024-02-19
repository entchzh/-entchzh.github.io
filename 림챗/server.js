const fs = require('fs');

function readQAFromFile() {
  try {
    const data = fs.readFileSync('qa_pairs.txt', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
}

function saveQAToFile(qaPairs) {
  try {
    fs.writeFileSync('qa_pairs.txt', JSON.stringify(qaPairs), 'utf8');
    console.log('Saved QA pairs to file');
  } catch (err) {
    console.error('Error saving file:', err);
  }
}

const qaPairsFromFile = readQAFromFile();
console.log('Loaded QA pairs from file:', qaPairsFromFile);

const newQAPair = { question: '새로운 질문', answer: '새로운 답변' };
qaPairsFromFile.push(newQAPair);
saveQAToFile(qaPairsFromFile);
