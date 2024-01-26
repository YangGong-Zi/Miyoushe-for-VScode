import { WebviewView, WebviewViewProvider } from 'vscode';
import * as vscode from 'vscode';
import { getNonce } from './getNonce';
export default class ReaderViewProvider implements WebviewViewProvider {
    public static readonly viewType = 'resin.open';
    private _view?: WebviewView;
    constructor(
        // private readonly _extensionUri: Uri,
        protected context: vscode.ExtensionContext,
        private readonly _extensionUri: vscode.Uri = context.extensionUri
    ) {}
    dispose(): void {}
    public resolveWebviewView(webviewView: WebviewView) {
        this._view = webviewView;

        this._view.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri],
        };
        this._view.webview.html = this.getHtmlForWebview(this._view.webview);
    }
    private getHtmlForWebview(webview: vscode.Webview) {
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'dist', 'static/index-tQv3iZGc.js'));
        const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'dist', 'static/index-HGnRy7eK.css'));
        // Use a nonce to 只允许特定脚本运行.
        const nonce = getNonce();
        return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8">
          <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${webview.cspSource}; script-src 'nonce-${nonce}'; ;">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="icon" href="/favicon.ico">
          <link href="${styleMainUri}" rel="stylesheet">
          <script type="module"  nonce="${nonce}" src="${scriptUri}"></script>
          </head>
              <body>
                <div id="app"></div>
              </body>
          </html>
        `;
    }
}
