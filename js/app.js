( ( globalContext, libraryName ) => {
    "use strict";

    const defaultWidth  = 400;
    const defaultHeight = 400;

    class App {
        constructor() {
            this.handleCanvas();
            this.setCanvasContext();
        }

        handleCanvas() {
            this.canvas = document.createElement( "canvas" );
            this.canvas.width  = defaultWidth;
            this.canvas.height = defaultHeight;

            document.body.appendChild( this.canvas );
        }

        setCanvasContext() {
            this.context = this.canvas.getContext( "2d" );
        }

        generateNoise() {
            let pixels = new ImageData( defaultWidth, defaultHeight );

            for ( let i = 0; i < pixels.data.length; i++ )
                pixels.data[ i ] = Math.random() * 100;

            this.context.putImageData( pixels, 0, 0 );
        }

        render() {
            this.generateNoise();
            globalContext.requestAnimationFrame( this.render.bind( this ) );
        }
    }

    globalContext.addEventListener( "DOMContentLoaded", ( event ) => {
        let app = new App();
        app.render();
    });

})( window, "Library" );