const { Titlebar, Color } = require('custom-electron-titlebar')
const TabGroup = require('electron-tabs')
const dragula = require('dragula')

new Titlebar({
    backgroundColor: Color.fromHex('#302723')
})

let tabGroup = new TabGroup({
    ready: (tabGroup) => {
        dragula([tabGroup.tabContainer], {
            direction: 'horizontal'
        })
    }
})

tabGroup.addTab({
    title : "Electron1",
    src: "http://electron.atom.io",
    visible: true
})

tabGroup.addTab({
    title : "Electron2",
    src: "http://electron.atom.io",
    visible: true
})

tabGroup.addTab({
    title : "Electron3",
    src: "http://electron.atom.io",
    visible: true
})

