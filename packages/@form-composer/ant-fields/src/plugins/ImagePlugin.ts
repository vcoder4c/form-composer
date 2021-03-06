import {Plugin} from "@form-composer/core";

export interface IImagePlugin extends Plugin {
    persist(file: File): Promise<object>;
}

export class ImagePlugin implements IImagePlugin {
    name: string = 'image'

    persist(file: File): Promise<object> {
        console.log('start to persist')
        return new Promise((resolve, reject) => setTimeout(() => {
            resolve({url: URL.createObjectURL(file)})
            // reject('Upload fail')
        }, 2000))
    }
}