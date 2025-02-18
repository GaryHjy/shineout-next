/**
 * cn -
 *    -- 此事例演示通过自定义函数压缩文件后上传
 * en -
 *    -- Zip file and upload
 */
import React from 'react';
import { Button, TYPE, Upload } from 'shineout';
import { UploadIcon } from './static/icon';
import JSZip from 'jszip';

type ValueItem = { name: string };
type UploadProps = TYPE.Upload.Props<ValueItem>;
const request: UploadProps['request'] = (options) => {
  const { file, onLoad, onError, onProgress } = options;

  const xhr = new XMLHttpRequest();
  xhr.open('post', '//jsonplaceholder.typicode.com/posts');

  // @ts-ignore
  const zip = new JSZip();
  zip.file(file.name, file);
  zip
    .generateInternalStream({ type: 'blob' })
    .accumulate((e) => {
      // @ts-ignore
      onProgress(e, 'zipping...');
    })
    .then((content: Blob) => {
      const zipFile = new File([content], `${file.name}.zip`);
      const data = new FormData();
      data.append('file', zipFile);
      xhr.upload.onprogress = (m) => onProgress(m, 'sending...');
      xhr.onload = () => onLoad(xhr);
      xhr.onerror = () => onError({ statusText: 'error message' });
      xhr.send(data);
    });

  return xhr;
};

const App: React.FC = () => (
  <Upload
    onSuccess={(_res, file) => ({ name: `upload ${file.name}` })}
    limit={3}
    style={{ width: 400 }}
    request={request}
    renderResult={(d) => d.name}
  >
    <Button mode={'outline'}>
      <UploadIcon style={{ marginInlineEnd: 4 }} />
      Upload file
    </Button>
  </Upload>
);
export default App;
