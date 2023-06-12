
/**
 * 
 * @param {string} data : string coded data
 */

const vscode = acquireVsCodeApi();
function loadFits(data){
	u8a /** @type {Uint8Array} */ = new Uint8Array(Buffer.from(data));
	JS9.Load(new Blob([u8a]))
	
}

	window.addEventListener('message', async e => {
		const { type, body, requestId } = e.data;
		switch (type) {
			case 'init':
				{
					JS9.Load(body.value)
				}

		}
	});
$(document).ready(function(){
	window.alert("BreakPoint")
	vscode.postMessage({ type: 'ready' });
})
