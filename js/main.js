$("#example").typer({
    strings: [
        "A Lovely Girl",
        "A Drama Queen",
        "My Bootifooool Girlfiriend 😘",
        "Nicest Person on Earth.."
    ]
});

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the link! Enjoy. 😍");
}

function open(){
    window.open("https://rachit2400.github.io/kiss/");
}