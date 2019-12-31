
var FileBrowserDialogue = {
    fileSubmit : function (FileURL) {
        window.parent.postMessage({
          action: 'chooseUrl',
          content: FileURL
        }, '*');

        window.parent.postMessage({
          mceAction: 'close',
        }, '*');
    },
}

