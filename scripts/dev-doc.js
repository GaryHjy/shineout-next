const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const chokidar = require('chokidar');
// const prettier = require('prettier');

const { markdownLoader } = require('./utils/markdown-loader');

const shineoutDir = path.join(__dirname, '../packages', 'shineout', 'src');
const hooksDir = path.join(__dirname, '../packages', 'hooks', 'src');
const styleDir = path.join(__dirname, '../packages', 'shineout-style', 'src');
const uiDir = path.join(__dirname, '../packages', 'ui', 'src');
const chunkDir = path.join(__dirname, '../docs', 'chunk');
const templatePath = path.resolve(__dirname, './doc-page.ejs');

function rmrfChunk(directory) {
  try {
    const files = fs.readdirSync(directory);
    files.forEach(function (file) {
      const curPath = directory + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        // 递归删除子目录
        rmrfChunk(curPath);
      } else {
        // 删除文件
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directory);
  } catch (e) {
    console.error(`删除目录 ${directory} 失败: ${e.message}`);
  }
}

function compile(dirPath = shineoutDir) {
  const pattern = new RegExp(`packages/(.*?)/`, 'i');
  const match = dirPath.match(pattern);

  if (!match[1]) return;

  const chunkModuleName = match[1];
  const chunkModulePath = path.join(chunkDir, chunkModuleName);

  if (!fs.existsSync(chunkModulePath)) {
    fs.mkdirSync(chunkModulePath);
  }

  fs.readdirSync(dirPath).forEach((dir) => {
    // 检查是否存在 .md 文件
    const mdPath = path.join(dirPath, dir, 'index.md');
    if (!fs.existsSync(mdPath)) return;
    // 读取 .md 文件
    const md = fs.readFileSync(mdPath, 'utf8');
    // 处理 .md 文件
    const result = markdownLoader(md, dir, dirPath);

    const template = ejs.compile(fs.readFileSync(templatePath, 'utf-8'));
    const render = template({ ...result, componentDir: dir, source: mdPath, chunkModuleName });

    fs.writeFileSync(`${chunkDir}/${chunkModuleName}/${dir}.tsx`, render);
  });
}

rmrfChunk(chunkDir);
fs.mkdirSync(chunkDir);

compile(shineoutDir);
compile(uiDir);

const watchList = [shineoutDir, hooksDir, styleDir, uiDir];
const watcher = chokidar.watch(watchList);

watcher.on('change', (filePath) => {
  const pattern = new RegExp(`src/(.*?)/`, 'i');
  const match = filePath.match(pattern);
  if (!match[1]) return;
  if (filePath.indexOf(shineoutDir) > -1) {
    compile(shineoutDir);
  }
  if (filePath.indexOf(uiDir) > -1) {
    compile(uiDir);
  }
});
