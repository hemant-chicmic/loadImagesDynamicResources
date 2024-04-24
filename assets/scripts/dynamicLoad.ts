import { _decorator, assetManager, Component, error, ImageAsset, Node, resources, Sprite, SpriteFrame, Texture2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dynamicLoad')
export class dynamicLoad extends Component {

    @property({type : Node})
    objectImg : Node| null = null ;


    start() 
    {
        console.log( "start " ) ;


        // //   for remote asset loading 
        // this.loadImageAutomatically() ;
        // //  call the funcion to load image automatically



        // // // asset loading from ther project resources folder
        this.loadImageFromResources() ;


    }
    
    update(deltaTime: number) {
        
    }
    
    // //  call the funcion from the start as screen load and load image automatically after 2 second
    // //  call the funcion from the start as screen load and load image automatically after 2 second
    loadImageAutomatically()
    {
        console.log( "load image => " ) ;

        this.scheduleOnce( () => {8
            let remoteUrl = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDBfDB8fHww.png";
            assetManager.loadRemote<ImageAsset>(remoteUrl,  (err, imageAsset) => {
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;

                this.objectImg.getComponent(Sprite).spriteFrame = spriteFrame ;
            });
        } , 2 )
    }




    // // // load image when user click on the button
    // // // load image when user click on the button
    
    onClickLoadButton()
    {
        console.log( " click button to load images " ) ;


        // //   for remote asset loading  when user click on buttom 
        // this.loadImageByButton() ;



        // // // asset loading from ther project resources folder when user click on buttom   
        this.loadImageFromResourcesBybutton() ;
    }
    
    

    // // // remote load image when user click on the button
    // // // remote load image when user click on the button
    loadImageByButton()
    {
        console.log( " remote load image by button => " ) ;

        let remoteUrl = "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.png";
        assetManager.loadRemote<ImageAsset>(remoteUrl,  (err, imageAsset) => {
            const spriteFrame = new SpriteFrame();
            const texture = new Texture2D();
            texture.image = imageAsset;
            spriteFrame.texture = texture;

            this.objectImg.getComponent(Sprite).spriteFrame = spriteFrame ;
        });
    }














    // // // // // asset loading from ther project resources folder
    // // // // // asset loading from ther project resources folder
    // // // // // asset loading from ther project resources folder
    // // // // // asset loading from ther project resources folder

    loadImageFromResources()
    {
        console.log( "load image from resources => " ) ;
        this.scheduleOnce( () => {
            resources.load( 'texture/car1/spriteFrame' , SpriteFrame , (err , asset) => {
                this.objectImg.getComponent(Sprite).spriteFrame = asset  ;
            } )

        } , 2 )

    }



    // // // resources load image when user click on the button
    // // // resources load image when user click on the button
    loadImageFromResourcesBybutton()
    {
        console.log( "load image from resources by buttom => " ) ;

        resources.load( 'texture/car2/spriteFrame' , SpriteFrame , (err , asset) => {
            this.objectImg.getComponent(Sprite).spriteFrame = asset  ;
        } )

    }


    



}

