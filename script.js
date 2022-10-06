function run() {
    if(document.URL.includes("https://twitter.com/")) {
        let taskID = window.setInterval(() => {
            if(document.getElementsByTagName('html')[0].getAttribute('style').includes("overflow: hidden; overscroll-behavior-y: none;")) {
                document.getElementsByTagName('html')[0].setAttribute('style', '');
                document.getElementsByClassName('css-1dbjc4n r-1awozwy r-16y2uox r-1777fci r-13qz1uu')[0].parentNode.removeChild(document.getElementsByClassName('css-1dbjc4n r-1awozwy r-16y2uox r-1777fci r-13qz1uu')[0]);
                console.log("Connect obligation removed");
                window.clearInterval(taskID);
            }
        }, 1);
    }
}
run();