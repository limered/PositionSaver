var RNFS = require('react-native-fs');

export default class DataLoader{
    async loadPositionFile(){
        await RNFS.mkdir(RNFS.ExternalStorageDirectoryPath + '/PositionSaver');
        if(!await RNFS.exists(RNFS.ExternalStorageDirectoryPath + '/PositionSaver/positions.txt')){
            await RNFS.writeFile(RNFS.ExternalStorageDirectoryPath + '/PositionSaver/positions.txt', "");
        }
        
        return await RNFS.readFile(RNFS.ExternalStorageDirectoryPath + '/PositionSaver/positions.txt');
    }
    async writeToFile(content){
        console.warn(content);
        await RNFS.writeFile(RNFS.ExternalStorageDirectoryPath + '/PositionSaver/positions.txt', content);
    }
}