
var FileBrowserDialogue = {
    fileSubmit : function (FileURL) {
        window.parent.postMessage({
          mceAction: 'insertContent',
          content: FileURL
        }, '*');

        window.parent.postMessage({
          mceAction: 'close',
        }, '*');
    },
}

