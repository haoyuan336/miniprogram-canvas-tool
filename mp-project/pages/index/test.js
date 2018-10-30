
import Scene from './engine/scene'
import sprite from './engine/sprite'
import resourcesManager from './engine/resources-manager'
import resources  from './resources'
import Sprite from './engine/sprite';
import Vec2 from './engine/vec2'
import Button from './engine/button';
import Text from './engine/text'
import Node from './engine/node'
class Test{
    constructor(spec) {
        console.log("创建canvas" + JSON.stringify(spec));
        this.scene = new Scene(spec.canvasName);

        let resList = [
            resources.icon_1
        ]
        resourcesManager.loadList(resList, ()=>{
            console.log('load res success');
            this.onLoaded();
        })

    }
    onLoaded(){
        let sp = new Sprite(resourcesManager.resources[resources.icon_1]);
        // this.scene.addChild(sp);
        sp.scale.set(0.5);
        sp.registerUpdate((dt)=>{
            sp.rotation += dt * 0.001;
        });
        sp.position = new Vec2(wx.getSystemInfoSync().screenWidth * 0.5, wx.getSystemInfoSync().screenHeight * 0.5);
        this.scene.addChild(sp);
        // let text = new Text('10000');
        // node.addChild(text);
        // text.position = new Vec2(100,100);


        let button = new Button();
        button.position = new Vec2(200,100);    

        this.scene.addChild(button);
    }
}
export default Test;