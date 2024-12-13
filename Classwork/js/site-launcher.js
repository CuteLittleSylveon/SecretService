const iframeScreen = document.getElementById("iframe");
const iframeSrcInput = document.getElementById("iframe-src-input");
const loadPageBtn = document.getElementById("load-page");
const loadAboutBlankBtn = document.getElementById("load-ab");
const loadBlob = document.getElementById("load-blob");



loadPageBtn.onclick = () => {
    let currentUrl = iframeSrcInput.value;
    iframeScreen.setAttribute("src", currentUrl);
}




var urlObj = new window.URL(window.location.href);
var url = iframeSrcInput;
if (url) {
    var win;
    loadAboutBlankBtn.onclick = function () {
        if (win) {
            win.focus();
        } else {
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = iframeSrcInput.value;
            win.document.body.appendChild(iframe);
            var interval = setInterval(function () {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;

                }
            }, 500);
        }
    };
}




loadBlob.onclick = () => {
    const blobIframeContent = `
        <html>
			<head>
                <link rel="shortcut icon" href="https://files.catbox.moe/vmy59b.png" type="image/x-icon">
				<title>Home</title>
				<style>
					body, html {
						margin: 0;
						padding: 0;
						width: 100%;
						height: 100%;
						overflow: hidden;
					}
					iframe {
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border: none;
					}
				</style>
			</head>
			<body>
				<iframe src="${iframeSrcInput.value}"></iframe>
            </body>
        </html>
`;


    const blob = new Blob([blobIframeContent], { type: 'text/html' });
    const blobUrl = URL.createObjectURL(blob);


    window.open(blobUrl);

}