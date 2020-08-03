# Connection Detector
 
Connection Detector module asynchronously checks if there exists an internet connection on your browser and triggers 'an internet connection loss error message' when it goes offline.
It is a vanilla **JAVASCRIPT** module and does not require dependency to use.

## Why do need?
Connection Detector helps your application users to know exactly when they do not have an active internet connection, rather than blaming it on your app for taking too long to load.

## Support
Most of the browsers today, if not all ships with inbuilt support for javascript, hence a wide range of support across different browsers for both personal computers and mobile browsers: - Safari, Opera, Mozilla, Chrome, Explorer, etc.


Note:

> Calling the direct function might cause conflict if there is another module in your application that uses the same function name **isClient()** and **isActive()**.  if you encounter any conflict or ```function name already exist or defined``` then you have to call it as an Object.

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
    url;  // Default Application url. it can be replaced with url of your choice
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

Call as function

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

Call as function

```javascript
    <script>
    if(isActive() === true){
        //  Do What you want here 
    }else{
        // Do What you want here
    }
</script>
```
