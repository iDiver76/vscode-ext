import * as vscode from 'vscode';

export class OpaccWasHoverProvider implements vscode.HoverProvider {
    public provideHover(
        document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
        Thenable<vscode.Hover> {
            .then
            console.log("test");
        }
}