## babelのインストール

### babelとは

ES6で書かれたコードをES5に変換してくれるコンパイラ

```
npm install --save @babel/core @babel/cli @babel/preset-env
```

babel.config.js : babelの設定ファイル


## babelの実行

### babelを手動で実行

```
./node_modules/.bin/babel src --out-dir dist
```

babel コンパイル元 --out-dir コンパイル先

### package.json でコマンドを簡略化

package.json の script の部分に

```
"build": "./node_modules/.bin/babel src --out-dir dist"
```

などコマンドを登録すると `npm run build` で走る

## ファイルの実行

jsファイルをコンソールで直接実行したい場合は以下のようにnodeで動かせる

```
node dist/01.js
```