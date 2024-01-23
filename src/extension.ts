// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
let myStatusBarItem: vscode.StatusBarItem;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function updateStatusBarItem(): void {
	const n = getNumberOfSelectedLines(vscode.window.activeTextEditor);
	if (n > 0) {
		myStatusBarItem.text = `$(megaphone) ${n+1} line(s) selected`;
		myStatusBarItem.show();
	} else {
		myStatusBarItem.text = 'not selected';
		myStatusBarItem.show();
	}
}

function getNumberOfSelectedLines(editor: vscode.TextEditor | undefined): number {
	let lines = 0;
	if (editor) {
		lines = editor.selections.reduce((prev, curr) => prev + (curr.end.line - curr.start.line), 0);
	}
	return lines;
}
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "original-resin-status" is now active!');

    // // The command has been defined in the package.json file
    // // Now provide the implementation of the command with registerCommand
    // // The commandId parameter must match the command field in package.json
    // const date = new Date();
    // const day = date.getTime();
    // console.log(day, 'time');
    // let disposable = vscode.commands.registerCommand('original-resin-status.helloWorld', () => {
    //     // The code you place here will be executed every time your command is executed
    //     // Display a message box to the user
    //     vscode.window.showInformationMessage(day.toString());
    // });

	// context.subscriptions.push(disposable);
	// register a command that is invoked when the status bar
	// item is selected
	const myCommandId = 'original-resin-status.myHello';
	context.subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
		const n = getNumberOfSelectedLines(vscode.window.activeTextEditor);
		vscode.window.showInformationMessage(`Yeah, ${n+1} line(s) selected... Keep going!`);
	}));

	// create a new status bar item that we can now manage
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 600);
	myStatusBarItem.command = myCommandId;
	context.subscriptions.push(myStatusBarItem);

	// register some listener that make sure the status bar
	// item always up-to-date
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));

	// update status bar item once at start
	updateStatusBarItem();
	const panel = vscode.window.createWebviewPanel(
		'juejin-posts', // 只供内部使用，这个 webview 的标识
		'Juejin Posts', // 给用户显示的面板标题
		vscode.ViewColumn.One, // 给新的 webview 面板一个编辑器视图
		{
		  enableScripts: true, // 启用 javascript 脚本
		  retainContextWhenHidden: true, // 隐藏时保留上下文
		} // webview 面板的内容配置
	);
	function getWebviewContent() {
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
			<div>233</div>
			<a href="https://juejin.cn"><img id="yoyo" src="https://cdn.jsdelivr.net/gh/youngjuning/images/20210817163229.png" width="100" /></a>
		  </body>
		  </html>
		`;
	  }

	  // 给 webview panel 设置 HTML 内容
	  panel.webview.html = getWebviewContent();

}

// This method is called when your extension is deactivated
export function deactivate() {}
