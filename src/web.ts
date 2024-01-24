import {
    Uri,
    WebviewView,
    WebviewViewProvider,
    WebviewViewResolveContext,
    CancellationToken,
  } from 'vscode';
//   import { configState } from './utils/config';
  export default class ReaderViewProvider implements WebviewViewProvider {

    public static readonly viewType = 'resin.open';

    private _view ? : WebviewView;

    constructor(
      private readonly _extensionUri: Uri,
    ) {}

    public resolveWebviewView(
      webviewView: WebviewView,
      context: WebviewViewResolveContext,
      _token: CancellationToken,
    ) {
      this._view = webviewView;

      this._view.webview.options = {
        enableScripts: true,
      };

      this._view.webview.html = this.getHtmlForWebview();
    }

    private getHtmlForWebview() {
    //   const { scale } = configState;
    //   const width = 95 / scale;
    //   const height = width;
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Juejin Posts</title>
          <style>
            html, body {
              padding: 0px;
              height: 100vh;
              position: relative;
              margin: 0;
              padding: 0;
              overflow: hidden;
            }
            #yoyo {
              position: absolute;
              bottom: 50px;
              right: -90px;
              opacity: 0;
              transition: .25s ease-in-out
            }
            #yoyo:hover {
              opacity: 1;
              right: 0;
            }
          </style>
      </head>
      <body>
        <img  src="https://cdn.jsdelivr.net/gh/youngjuning/images/20210817163229.png" width="100" />
        <a href="https://juejin.cn"><img id="yoyo" src="https://cdn.jsdelivr.net/gh/youngjuning/images/20210817163229.png" width="100" /></a>
      </body>
      </html>
    `;
    }
  }