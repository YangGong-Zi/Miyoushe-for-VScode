// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';
import {
	window,
	ExtensionContext,
  } from 'vscode';
  import ReaderViewProvider from './web';
export function activate(context: ExtensionContext) {

	const readerViewProvider = new ReaderViewProvider(context);
	window.registerWebviewViewProvider('resin.open', readerViewProvider, {
	  webviewOptions: {
		retainContextWhenHidden: true,
	  },
	});


}

// This method is called when your extension is deactivated
export function deactivate() {}
