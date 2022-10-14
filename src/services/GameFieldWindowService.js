export default class GameFieldWindowService {
    static createField(boxSize) {
        let fieldWindows = [];

        for(let rid = 0; rid < 3; rid++) {
            for(let cid = 0; cid < 3; cid++) {
                const boxId = `${rid}${cid}`;
                const location = {
                    x: cid * (boxSize + 5),
                    y: rid * (boxSize + 70),
                };
                fieldWindows.push(window.open(`/box`, `field-${boxId}`, 
                    
                    `width=${boxSize},
                    height=${boxSize},
                    left=${location.x},
                    top=${location.y}`
                ));       
            }
        }

        return fieldWindows;
    }

    static destroyField(fieldWindows) {
        fieldWindows.forEach(window => window.close());
    }
}