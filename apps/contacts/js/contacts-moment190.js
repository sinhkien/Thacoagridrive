/*! For license information please see contacts-moment190.js.LICENSE.txt */
(self.webpackChunkcontacts=self.webpackChunkcontacts||[]).push([["moment190"],{64495:function(e,t,i){!function(e){"use strict";var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),i="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),s=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^paź/i,/^lis/i,/^gru/i];function a(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function n(e,t,i){var s=e+" ";switch(i){case"ss":return s+(a(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return s+(a(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return s+(a(e)?"godziny":"godzin");case"ww":return s+(a(e)?"tygodnie":"tygodni");case"MM":return s+(a(e)?"miesiące":"miesięcy");case"yy":return s+(a(e)?"lata":"lat")}}e.defineLocale("pl",{months:function(e,s){return e?/D MMMM/.test(s)?i[e.month()]:t[e.month()]:t},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),monthsParse:s,longMonthsParse:s,shortMonthsParse:s,weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:n,m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",w:"tydzień",ww:n,M:"miesiąc",MM:n,y:"rok",yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(i(30381))}}]);
//# sourceMappingURL=contacts-moment190.js.map?v=824f1ca9727d4885c46d