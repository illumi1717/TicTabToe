import JSONBroadcastChannelService from "./JSONBroadcastChannelService";

export default class FieldService {
    constructor() {
        this.matrixField = [['', '', ''], ['', '', ''], ['', '', '']];
        
        this.gameBroadcast = new JSONBroadcastChannelService('game');
        this.gameBroadcast.handleJSONMessage((data) => this.updateMatrixField(data));
    }

    createField(boxSize) {
        for(let rid = 0; rid < 3; rid++) {
            for(let cid = 0; cid < 3; cid++) {
                const boxId = `${rid}${cid}`;
                const location = {
                    x: cid * (boxSize + 5),
                    y: rid * (boxSize + 70),
                };
                window.open(
                    `/box?id=${boxId}`, 
                    
                    `field-${boxId}`, 
                    
                    `width=${boxSize},
                    height=${boxSize},
                    left=${location.x},
                    top=${location.y}`
                );       
            }
        }
    }

    updateMatrixField(data) {
        const rowId = data.boxId[0];
        const colId = data.boxId[1];

        this.matrixField[rowId][colId] = data.state;
    }

}