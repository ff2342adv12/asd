import { _decorator, Component, Node, UITransform, size, view, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('wait')
export class wait extends Component {
    @property(Node)
    public turn:Node = null;

    @property(Label)
    public label:Label = null;
	
	onLoad() {
        const arr =
            [
                "加载中",
                "加载中.",
                "加载中..",
                "加载中...",
                "加载中....",
                "加载中.....",
                "加载中......",
            ]
        let count = 0;
        this.schedule(() => {
            this.label.string = arr[count];
            if (count < arr.length - 1) {
                count++;
            }
            else {
                count = 0;
            }
        }, 0.5);
    }
	
    start() {

        const ut = this.getComponent(UITransform);
        if(ut !== null)
        {
            ut.setContentSize(view.getVisibleSize());
        }
    }

    update(deltaTime: number) {
        this.turn.angle += deltaTime * 180;
    }
}

