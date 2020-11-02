## casper - RTL - hebrew

this repository is my fork to "[casper](https://github.com/TryGhost/Casper)" theme - the default theme of [ghost](https://ghost.org/) blogging system.

my modification are mainly in the RTL support - who is fully worked at any part of the site.

i was also changed all the automatic creating texts - like "X minute read" etc - to hebrew, and RTL properly.

one more modification is the "back to top" circle in post pages - with status of the scrolling (from [here](https://www.jqueryscript.net/other/back-top-scroll-indicator.html)).

the theme is configured to always-dark, this is no depend on user-prefences.

**Feel free to use the theme on your blog!** i will happy if you let me know about that.

## automatic deploy

theres an cool option to configure automatic deploying of the theme from github to your ghost site - through github action + ghost admin API.

to do that you only need to do this steps:

go to your ghost site > admin > integrations - and create new custom inegration.

now go to the repository on github, where you fork this repository, go to settings > secrets and create new secret named ``GHOST_ADMIN_API_KEY``, in the value - paste the admin API key from newly created integration in ghost admin.

create one more secret with the name ``GHOST_ADMIN_API_URL``, paste the URL in the value.

now the theme will pushed to your site every 5 minutes (i do it like that because of my needs, you can manage that in the workflow file to push event or like).

<div dir="rtl" text-align="right">

## ערכת הנושא Casper - ערוכה לעברית RTL

במאגר זה שמתי את ערכת הנושא שערכתי לפלטפורמת הבלוגים Ghost - ערכת הנושא מותאמת לעברית הן מבחינת כיווני הטקסט והן מבחינת תרגום.

כל הטסקטים בכל הדפים של Ghost ייושרו לימין, עם תמיכה מלאה ב-RTL - ימין לשמאל. האנגלית שבתוך הטקסט מסתדרת מעולה ולא מתבלבלת.

כל הטקסטים האוטומטיים (כגון "שתי דקות קריאה" וכדו') תורגמו לעברית.

## העלאה אוטומטית לאתר שלכם

קראו כאן איך להגדיר בצורה הנכונה את ה-workflow שיעלה את ערכת הנושא שאתם עורכים בגיטהב, לבלוג שלכם.

זה יכול להיות שימושי מאוד, ובעיקר עזר לי בהגנה מפני קריסות.

</div>
