var args = arguments[0] || {};


if (args.beer_image) {
    var activityIndicator = Ti.UI.createActivityIndicator({
      style: Ti.Platform.name === 'iPhone OS' ? Ti.UI.iPhone.ActivityIndicatorStyle.DARK : Ti.UI.ActivityIndicatorStyle.DARK,
      height:Ti.UI.SIZE, width:Ti.UI.SIZE,
      top: 50
    });
    $.image.add(activityIndicator);
    activityIndicator.show();
    $.image.image = args.beer_image;
}

$.name.text = args.name.toUpperCase();
$.brewery.text = utils.buildBreweryAndPercentString(args.brewery, args.percent);


if (args.notes) {
    $.notes.text = args.notes;
} else {
    $.notes.textAlign = "center";
    $.notes.color = Alloy.CFG.colour.grey;
    $.notes.text = L("search_detail_no_notes");
}

var addBeerButton = Ti.UI.createButton({ titleid: "search_detail_add_button" });

if (OS_IOS) {       
    $.searchResultDetail.setRightNavButton(addBeerButton);
}


// Add beer - open up addBeer controller, passing in args

addBeerButton.addEventListener("click", function () {
    args.addingFromSearch = true;
    var addBeerWin = Alloy.createController("addBeer", args).getView();
    addBeerWin.open();
});