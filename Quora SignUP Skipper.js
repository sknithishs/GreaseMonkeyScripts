// ==UserScript==
// @name		Quora signup skipper
// @version		1.1
// @description		Read Quora.com without the need to signin
// @match			https://www.quora.com/*
// @grant			none
// @author       NithishSharavanan
// @installURL https://greasyfork.org/en/scripts/409639
// @namespace https://greasyfork.org/en/users/681399 
// ==/UserScript==

(function() {
    'use strict';

    document.body.classList.remove("signup_wall_prevent_scroll");

    let divs = document.body.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        let item = divs[i];
        if (item.id.endsWith("_signup_wall_wrapper")) {
            item.remove();
        }
    }

    document.body.style.overflow = "auto";
  	setTimeout(function(){ document.body.classList.remove("signup_wall_prevent_scroll"); }, 5000);
  	
})();
