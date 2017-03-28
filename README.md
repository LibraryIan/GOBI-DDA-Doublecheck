# GOBI-DDA-Doublecheck
Based on the <a href="https://github.com/ericwbailey/millennials-to-snake-people">Millennials to Snake People</a> extension, this extension modifies gobi3.com to alert librarians and acquisitions staff when a title is part of a DDA profile to avoid duplicate purchases in print, JSTOR, or other ebook platforms while the DDA is in place.

The extension looks for ISBN-13s from UC Berkeley's JSTOR holdings, and modifies the ISBN by adding a short string of asterisks and a text note to alert users that the title is part of the DDA profile, and should not be purchased until after the DDA pilot concludes. 
The text note varies depending on if it is the print or ebook, based on the respective ISBN/eISBN (though not all records in the holdings file have a print ISBN attached). Once installed via the Chrome store, the extension requires no additional input from the user, and will only work on gobi3.com sites.

In gobi3.com, make sure that preferences are set to display ISBN-13/EAN, not ISBN-10 (Options > My Preferences, under "Bibliographic Display Preferences"). If you are displaying ISBN-10, the extension will never work as it only finds ISBN-13s to modify.

At each update, the manifest is updated to reflect the holdings date in the title and version. Hovering over the extension button in Chrome will pop up the title and date, so users can check how up-to-date the information is
  
Full disclosure: The extension is not 100% foolproof, as it only has the ISBNs of the version held by JSTOR. 

Process for maintaning & updating for UC Berkeley (for other UC libraries as part of the CDL DDA Pilot)
===
This is currently done manually by downloading our tab-delimited KBART holdings file from <a href="http://about.jstor.org/holdings">http://about.jstor.org/holdings</a>, loading the .txt in excel, and filtering to only include 2017 titles. 
I copy and paste the ISBN ("print_identifier") and eISBN ("online-identifier") into column A in respective sheets in a separate excel file, and use find & replace to remove the hyphens. 
Each sheet has a formula that appends and prepends the relevant javascript around the ISBN in column A.
For the eISBN, that looks like:
="v = v.replace(/\b"&A1&"\b/g, '"&A1&"****** JSTOR DDA***************');" 

and for the print ISBN, we have:
="v = v.replace(/\b"&A1&"\b/g, '"&A1&"**** Alt Ed - eBook in JSTOR DDA**********');"

The resultant columns are copied and pasted into the content_script.js, and the manifest is updated to reflect the date of the holdings that are being loaded in the title and version. I am sure there is a way to automate this, but thus far doing this 2-3 times a week has been fairly easy and low investment time-wise.

Because UCB has a smaller set of holdings in the DDA that does not include Project Muse titles, the current code would need to be adjusted to reflect the larger holdings other campuses have access to at JSTOR.

Potential future modifications
===
-The KBART file also gives info about how you have access: via purchase as a firm order, purchase triggered via DDA, access via DDA, or Open Access. I have thought about adding a third string for those where a purchase has been triggered, so selectors would be able to see that info quickly in GOBI

-Modify permissions to include gmail/bmail, so that slips in your inbox would also be modified (but would also modify other instances of the ISBN in your inbox...)

-any number of other uses where you might want to flag something on gobi3.com (or another site, by modifying the permissions in the manifest)


Acknowledgments
===
GOBI DDA Doublecheck was inspired by Steven Frank's <a href="https://github.com/panicsteve/cloud-to-butt">Cloud To Butt</a>, and almost 100% cloned from Eric Bailey's <a href="https://github.com/ericwbailey/millennials-to-snake-people">Millennials to Snake People</a>
