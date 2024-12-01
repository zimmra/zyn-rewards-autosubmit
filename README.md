# zyn-rewards-autosubmit
Tampermonkey Script / Userscript for Auto-Submitting the code for Zyn Rewards when scanning from a QR code


## Process / Workflow:
After importing the script into Tampermonkey, all you have to do is scan the QR code on the can with your webcam (Using the built-in [Windows Camera](https://www.microsoft.com/store/productId/9WZDNCRFJBBG?ocid=pdpshare) app works for me on Windows 11, or any QR scanning browser-extension or app should work - also successfuly tested with [QR Code](https://chromewebstore.google.com/detail/qr-code/cbimgpnbgalffiohilfglgkkhpegpjlo) from the Chrome Web Store)

When the page loads from the QR code's link the submit button will be automatically clicked, eliminating that step from the scanning process.

Currently it leaves the page open so you can view the successful confirmation
