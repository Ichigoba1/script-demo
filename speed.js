// ==UserScript==
// @name         hello world
// @namespace    https://ichigoba1.github.io/
// @version      0.1
// @description  B站视频加速优化
// @author       1chigo
// @match        https://www.bilibili.com/video/*
// @license      AGPL-3.0
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(
    function () {
        "use strict";

        moreSpeed();
    }
)();

function moreSpeed(){
    let intervalID = setInterval( () => {
        let rate_2 = document.querySelector(
            "li.bpx-player-ctrl-playbackrate-menu-item"
        );
        if (rete_2) {
            clearInterval(intervalID);

            let rate_3 = rate_2.cloneNode(false);
            rate_3.setAttribute("data-value","3");
            rate_3.innerTest = "3.0x";
            rate_2.parentElement.insertBefore(rate_3,rate_2);
        }
    },200);
}