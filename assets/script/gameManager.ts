import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameManager')
export class gameManager extends Component {

    @property(Node)
    public loadingUI:Node = null;

    start() {

        
    }

    update(deltaTime: number) {
        
    }
}

