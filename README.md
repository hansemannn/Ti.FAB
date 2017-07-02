# Ti.FAB
Ti.FAB is an Android Hyperloop wrapper of the native Floating Action Button component.
A Floating Action Button represents the primary action in an application.

Project originally posted on LoopModules: https://loopmodules.com/downloads/ti-fab/

![alt text](https://i2.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/1wJtS.png?w=329&ssl=1)
![alt text](https://i2.wp.com/loopmodules.com/wp-content/uploads/2016/09/patterns_actions_fab2.png?w=720&ssl=1)

# Environment setup
This module was tested and developed with the following environment:

  * Titanium SDK 5.5.0.v20160821213142
  * HyperLoop 1.2.5

# Creating a HyperLoop-enabled project
  * Create a new Alloy project like you would normally do.
  * Take a look at the example tiapp.xml file that you’ve received from us. Your tiapp.xml should have the same properties defined in this example
otherwise you’ll face some issues while building your project later on. Remember to change the GUID AND PROJECT ID!
  * Copy the files provided in the “app” folder to your project’s “app” folder as well.
 

# Usage
You’ll find inside this zip a very simple example of how to implement Floating Action Buttons and Floating Action Menus in your app with Hyperloop.
HyperLoop DOES NOT work with LiveView as of now, so you will need to rebuild your project every time you change anything.

Creating a FAB is simple:

```javascript
var FAB = require('HL_FloatingActionButton');
  $.view.add(FAB.createFloatingActionButton({
  activity: activity,
  size: HL_FloatingActionButton.SIZE_MINI,
  normalColor: '#ca2127',
  pressedColor: '#8a2020',
  disabledColor: '#939595',
  icon: 'guitar',
  onClick: clickListener
}));
```

You can use whatever icon you want by simply placing them inside your project’s app/platform/android/res/drawable-XXXX/ folders.
When creating the component with “createFloatingActionButton”, just pass a parameter named “icon” with the name of the icon image file.

# Demo
![alt text](https://i0.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/Screen-Shot-2016-09-09-at-5.17.11-PM.png?w=591&ssl=1)
