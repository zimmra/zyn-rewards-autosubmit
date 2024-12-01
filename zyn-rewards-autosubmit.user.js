// ==UserScript==
// @name         Zyn Rewards Auto Submit
// @namespace    https://github.com/zimmra/zyn-rewards-autosubmit
// @version      0.2
// @description  Automatically clicks a specific button on the Zyn site for rewards submission.
// @author       Payton Zimmerer (Zimmra)
// @match        https://us.zyn.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to wait for the element to appear
    function waitForElement(selector, callback) {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                callback(element);
            }
        }, 100);
    }

    // Unique selector for the button
    const buttonSelector = 'div.flex.relative.shadow-sm.h-64 button.btn.btn--primary.w-112[x-html="buttonLabel"]';

    // Wait for the button to appear and validate its state before clicking
    waitForElement(buttonSelector, (button) => {
        if (button && !button.disabled) {
            console.log('Clicking the button...');
            button.click();
        } else {
            console.log('Button is disabled or not found.');
        }
    });
})();
