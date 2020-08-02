# Connection Detector
 
Checks if the is internet connection on your browser is connected or not connected or the detector trigger when the connection is lost or offline. It is a pure **JAVASCRIPT** module that does not require dependency to use.

## Why do need ?
Connection Detector helps the user or audience that visit or make uses of your application to know when there his or her internet connection is active.

## Support
    Working on PC and mobile browsers, Safari, Opera, Mozilla, Chrome, Explore etc.


Note:

    Calling direct function might cause conflict if others module in your application uses thesame function name **isClient()** and **isActive()**, if you happend  to experience conflict or ```function name already exist or defined``` then you have to call it as an Object.


## Installation 

````
npm install connection-detector
````

## Getting started

Include css and js into the head of the web page

````html
<link href="css/connection-detector.css" rel="stylesheet" type="text/css" />
<script src="js/connection-detector.js"></script>

````
## Call 

```javascript
<script>
    isClient();
</script>
```

## Default Parameters

    ```javascript
    url;// Default Application url. it can be replace with url of your choice
    theme = 'Black' 
    ```
    

## Color and Themes

Connection detector default color theme is set to **Black**

    * Black
    * Blue
    * Green
    * Orange
    * Red

## Set Customize Theme

Call as an object 

```javascript
    <script>
        let connection = new Connection();
        connection.isClient({
            theme: 'blue' // or Blue
        });
    </script>
```

Call as a function

```javascript
    <script>
        isClient({
            theme: 'blue' // or Blue
        });
    </script>
```

## Check Connection

Call as an object

```javascript
    <script>
        let connection = new Connection();
        if(connection.isActive() === true){
        //  Do What you want here 
            }else{
                // Do What you want here
            }
</script>
```

Call as a function

```javascript
    <script>
    if(isActive() === true){
        //  Do What you want here 
    }else{
        // Do What you want here
    }
</script>
```
