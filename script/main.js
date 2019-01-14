var lastIndex = 0;

window.onload = init;

function init() {
	var interval = setInterval(handleRefresh, 3000);
	handleRefresh();
}

function handleRefresh()
{
    var images = ["250X110668568400.jpg", "banner_atar.jpg","paz_250x110059890678.jpg", "paz_250x110103131473.jpg", "paz_250X110571325734.jpg"];
    document.getElementById("changedImage").src = "img/" +images[lastIndex++];
    console.log(document.getElementById("changedImage").src);
    if (lastIndex==images.length)
    {
        lastIndex=0;
    }
}