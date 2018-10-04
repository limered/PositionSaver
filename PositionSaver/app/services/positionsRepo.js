import DataLoader from './dataLoader';

class PositionsRepository{
    allPositions = [];
    loader;

    onLoaded;

    async savePosition(lat, long){
        this.allPositions.push(lat + "," + long);
        await this.save();
    }

    async save(){
        await this.loader.writeToFile(this.allPositions.join("\n"));
    }

    async load(){
        this.loader = new DataLoader();
        let positionFile = await this.loader.loadPositionFile();
        this.allPositions = positionFile.split("\n");

        console.warn(this.allPositions);
    }
}

const repo = new PositionsRepository();
export default positions = repo;