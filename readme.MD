# Vn Native 3 Webview
This package will help us draw layout application.

### How to install 

This package installed in Vn Native version 3. To install it

    `npm install vnnative3-webview`
### How to use 

To use it us need 

    `import VnNative3HTMLElement from 'vnnative3-webview/dist/HTMLElement/index';`

# Feature 

### Add example 

    `(new VnNative3HTMLElement).head({
        title: "Site name",
        slogan: "Slogan site"
    }).add(element_id,`<span>{{test}}</span>`,{
        test : "hello world"
    })`

Or

    `(new VnNative3HTMLElement).next(() => {
        console.log("Do a something.");
    }).add(element_id,`<span>{{test}}</span>`,{
        test : "hello world"
    })`

Or

    (new VnNative3HTMLElement).add(element_id,`<span>{{test}}</span>`,{
        test : "hello world"
    }).next(() => {
        console.log("Do a something.");
    }).next(() => {
        console.log("Do a something.");
    }).next(() => {
        console.log("Do a something.");
    }).add(element_id,`<span>{{test}}</span>`,{
        test : "hello world"
    })

### Make example 

    let makeExample = (new VnNative3HTMLElement).make(`<span>{{test}}</span>`,{
        test : "hello world"
    });

Or

    let makeExample = (new VnNative3HTMLElement).next(() => {
        console.log("Do a something.");
    }).make(`<span>{{test}}</span>`,{
        test : "hello world"
    });

### Remove example 

    (new VnNative3HTMLElement).remove(element_id)

# Licence

Licence : MIT