<!--
Copyright 2023 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
# sample-gas-with-nuxt3

Nuxt3を使ってGASでWebアプリを構築してみる

## 環境構築手順

1. リポジトリをクローン
2. パッケージをインストール
    ```bash
    npm install
    ```

## 初期構築手順

1. `npx @google/aside init` コマンドを実行してプロジェクトを作成
    ```bash
    npx @google/aside init
    ✔ Project Title: … gas-nuxt3-app
    ✔ Create an Angular UI? … No / Yes
    ✔ Generate package.json? … No / Yes
    ✔ Adding scripts...
    ✔ Saving package.json...
    ✔ Installing dependencies...
    ```

2. TypeScriptとESLintのバージョン互換性問題の解決

プロジェクトで使用しているTypeScriptのバージョンが@typescript-eslintと互換性がない場合、以下の手順で解決できます。

現在の@typescript-eslintパッケージをアンインストールします。
```bash
npm uninstall @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

サポートされているバージョンの@typescript-eslintパッケージをインストールします。

```bash
npm install @typescript-eslint/eslint-plugin@5.59.0 @typescript-eslint/parser@5.59.0
```

サポートされているバージョンのTypeScriptをインストールします。

```bash
npm install typescript@5.1.6
```

## 使い方

### デプロイ

```bash
npm run deploy
```
