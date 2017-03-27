# GOBI-DDA-Doublecheck
Based on the <a href="https://github.com/ericwbailey/millennials-to-snake-people">Millennials to Snake People</a> extension, this extension modifies gobi3.com to alert librarians when a title is part of a DDA profile to avoid duplicate purchases in print, JSTOR, or other ebook platforms while the DDA is in place.

The extension looks for ISBN-13s from UC Berkeley's JSTOR holdings, and modifies the ISBN by adding a short string of asterisks and a text note to alert users that the title is part of the DDA profile, and should not be purchased until after the DDA pilot concludes. 
The text note varies depending on if it is the print or ebook, based on the respective ISBN/eISBN (though not all records in the holdings file have a print ISBN attached). 


Acknowledgments
===
GOBI DDA Doublecheck was inspired by Steven Frank's <a href="https://github.com/panicsteve/cloud-to-butt">Cloud To Butt</a>, and almost 100% cloned from Eric Bailey's <a href="https://github.com/ericwbailey/millennials-to-snake-people">Millennials to Snake People</a>
