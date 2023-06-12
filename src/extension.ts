import * as vscode from 'vscode';
import { FitsProvider } from './fitsView';
// import { FitsProvider } from './fitsImagePreviewer';

export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	// context.subscriptions.push(CatScratchEditorProvider.register(context));
	context.subscriptions.push(FitsProvider.register(context));
	// context.subscriptions.push(FitsProvider.register(context));
}
