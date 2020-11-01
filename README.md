# View with Google Geolonia Plugin

Google Maps へのリンクを追加する Geolonia プラグインです。

DEMO: https://geolonia.github.io/view-with-google-plugin/

## 使い方

View with Google Geolonia Plugin は、 Geolonia [Embed API](https://docs.geolonia.com/embed-api/) のプラグインとして動作します。
以下のように Embed API と一緒にスクリプトを読み込んでください。

```html
<body>
  <div class="geolonia"></div>
  <script src="https://cdn.geolonia.com/v1/embed?geolonia-api-key=YOUR-API-KEY" />
  <script src="https://cdn.geolonia.com/v1/view-with-google-plugin@latest" />
</body>
```

## カスタマイズ

## コントリビューション

Issue、プルリクエストはいつでも歓迎します。
以下のコマンドで開発用サーバーを立ち上げることができます。

```shell
$ git clone git@github.com:geolonia/view-with-google-plugin.git
$ cd fixed-map-geolonia-plugin
$ yarn # または npm install
$ npm start
```
