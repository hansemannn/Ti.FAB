var Activity = require('android.app.Activity'),
    activity = new Activity(Ti.Android.currentActivity),
    OnClickListener = require('android.view.View.OnClickListener'),
    HL_FloatingActionButton = require('HL_FloatingActionButton');

var clickListener = new OnClickListener({
    onClick: onFabClick
});

function onFabClick(view) {
    alert('Clicked on FAB with id: ' + view.getId());
}

(function() {
    $.fabContainer.add(HL_FloatingActionButton.createFloatingActionButton({
        activity: activity,
        size: HL_FloatingActionButton.SIZE_MINI,
        normalColor: '#ca2127',
        pressedColor: '#8a2020',
        disabledColor: '#939595',
        icon: 'guitar',
        onClick: clickListener
    }));

    $.famContainer.add(HL_FloatingActionButton.createFloatingActionMenu({
        activity: activity,
        size: HL_FloatingActionButton.SIZE_NORMAL,
        menuNormalColor: '#ca2127',
        menuPressedColor: '#8a2020',
        buttons: [
            {
                activity: activity,
                size: HL_FloatingActionButton.SIZE_MINI,
                normalColor: '#ca2127',
                pressedColor: '#8a2020',
                disabledColor: '#939595',
                icon: 'search_small',
                onClick: clickListener
            },
            {
                activity: activity,
                size: HL_FloatingActionButton.SIZE_MINI,
                normalColor: '#ca2127',
                pressedColor: '#8a2020',
                disabledColor: '#939595',
                icon: 'guitar',
                onClick: clickListener
            }
        ]
    }));
})();

$.index.open();