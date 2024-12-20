# 快速实现一个翻译的脚手架

```shell
pnpm init
pnpm i axios md5  minimist zx
```

```index.js
#!/usr/bin/env node

import { chalk  } from 'zx';
import minimist from 'minimist'
import fy from "./fy.js"

const args =  minimist(process.argv.slice(2));

const {l:type, _:query}= args
try {
    const data = await fy(query.join(" "),type)
    console.log(chalk.green(data))
} catch (error) {
    console.log(chalk.blue(error))
}
```

```fy.js
import axios from 'axios';
import md5 from 'md5';
import config from '../config.json' assert { type: 'json' };

async function fy(keywords, type = 'zh') {
  if (!config?.fyappid || !config?.fykey) {
    throw new Error('please set config fyappid or fykey');
  }
  const data = {
    appid: config.fyappid,
    q: keywords,
    salt: '1435660288',
    key: config.fykey,
  };
  const str = Object.values(data).reduce((x, y) => x + y, '');
  const sign = md5(str);

  const res = await axios(
    'https://fanyi-api.baidu.com/api/trans/vip/translate',
    {
      method: 'post',
      params: {
        q: keywords,
        from: 'auto',
        to: type,
        appid: data.appid,
        salt: data.salt,
        sign,
      },
    },
  );
  if (res.status === 200) {
    return res.data['trans_result'][0].dst;
  }
}

export default fy;

```
