import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

try {
  contextBridge.exposeInMainWorld('context', {
    //ToDo
  })
} catch (error) {
  console.log(error)
}
