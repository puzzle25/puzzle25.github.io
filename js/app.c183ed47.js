(function(a){function t(t){for(var n,l,r=t[0],o=t[1],b=t[2],d=0,_=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&_.push(i[l][0]),i[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);c&&c(t);while(_.length)_.shift()();return e.push.apply(e,b||[]),s()}function s(){for(var a,t=0;t<e.length;t++){for(var s=e[t],n=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(n=!1)}n&&(e.splice(t--,1),a=l(l.s=s[0]))}return a}var n={},i={app:0},e=[];function l(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return a[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=a,l.c=n,l.d=function(a,t,s){l.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:s})},l.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,t){if(1&t&&(a=l(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)l.d(s,n,function(t){return a[t]}.bind(null,n));return s},l.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return l.d(t,"a",t),t},l.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var b=0;b<r.length;b++)t(r[b]);var c=o;e.push([0,"chunk-vendors"]),s()})({0:function(a,t,s){a.exports=s("56d7")},"037d":function(a,t,s){a.exports=s.p+"img/kotak_tisu.edabe4f4.png"},"06bf":function(a,t,s){"use strict";var n=s("6d90"),i=s.n(n);i.a},"0d14":function(a,t,s){a.exports=s.p+"img/kuis_3_2.12da2499.png"},"0e72":function(a,t,s){a.exports=s.p+"img/kue.42593f96.jpg"},"243d":function(a,t,s){a.exports=s.p+"img/kuis_2_2.9ae22939.png"},"263e":function(a,t,s){a.exports=s.p+"img/ncube_logo.ab3d09aa.png"},"31fe":function(a,t,s){"use strict";var n=s("cbe2"),i=s.n(n);i.a},5221:function(a,t,s){a.exports=s.p+"media/luas_permukaan.076f9ab9.mp4"},"54ad":function(a,t,s){a.exports=s.p+"img/kuis_7.78f5b52d.png"},"54b3":function(a,t,s){"use strict";var n=s("d870"),i=s.n(n);i.a},"56d7":function(a,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("v-app",[s("v-main",{staticClass:"layout"},[s("router-view")],1)],1)},e=[],l=(s("31fe"),s("2877")),r=s("6544"),o=s.n(r),b=s("7496"),c=s("f6c4"),d={},_=Object(l["a"])(d,i,e,!1,null,"9071f17a",null),g=_.exports;o()(_,{VApp:b["a"],VMain:c["a"]});var h=s("8c4f"),u=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"layoutpadding"},[s("v-card",{staticClass:"text-center cardbody",attrs:{elevation:"10"}},[s("v-row",[s("v-col",{staticClass:"welcomebg",attrs:{cols:"12",sm:"6"}},[s("img",{staticClass:"logo",attrs:{src:a.logo}}),s("br"),s("h3",[a._v(a._s(a.deskripsi[0]))]),s("h3",[a._v(a._s(a.deskripsi[1]))])]),s("v-col",{staticClass:"choicebg",attrs:{cols:"12",sm:"6"}},a._l(a.button_text,(function(t,n){return s("div",{key:n},[s("router-link",{staticClass:"rute",attrs:{to:a.button_route[n]}},[s("button",{staticClass:"btn"},[s("strong",[a._v(a._s(t))])])])],1)})),0)],1)],1)],1)},v=[],k={data:function(){return{logo:s("263e"),deskripsi:["Website mengenai dasar-dasar kubus","Berisi penjelasan dan latihan"],button_text:["PENGENALAN","TEORI","KUIS"],button_route:["/pengenalan","/teori","/kuis"]}}},w=k,j=(s("842b"),s("b0af")),m=s("62ad"),p=s("0fd9"),C=Object(l["a"])(w,u,v,!1,null,"474d2f31",null),f=C.exports;o()(C,{VCard:j["a"],VCol:m["a"],VRow:p["a"]});var x=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("v-card",{staticClass:"rowbg"},[s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("a",{attrs:{href:"/"}},[s("v-icon",{staticClass:"btn_navbar",attrs:{color:"dark"}},[a._v("mdi-arrow-left")])],1)]),s("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[s("h3",[a._v("Pengenalan Kubus")])]),s("v-col",{staticClass:"text-end",attrs:{cols:"4"}},[s("a",{attrs:{href:"teori"}},[s("v-icon",{staticClass:"btn_navbar",attrs:{color:"dark"}},[a._v("mdi-arrow-right")])],1)])],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6"}},[s("center",[s("v-card",{staticClass:"card_soal",attrs:{elevation:"0"}},[s("h3",{staticClass:"soal"},[a._v('Masukkan gambar ke kotak yang tersedia, apakah gambar merupakan "kubus" atau "balok"')]),s("center",[a.index>=0?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[0],id:"0",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),0==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[0]))]):a._e(),a.index>0?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[1],id:"1",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),1==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[1]))]):a._e(),a.index>1?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[2],id:"2",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),2==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[2]))]):a._e(),a.index>2?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[3],id:"3",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),3==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[3]))]):a._e(),a.index>3?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[4],id:"4",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),4==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[4]))]):a._e(),a.index>4?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[5],id:"5",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),5==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[5]))]):a._e(),a.index>5?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[6],id:"6",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),6==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[6]))]):a._e(),a.index>6?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[7],id:"7",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),7==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[7]))]):a._e(),a.index>7?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[8],id:"8",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),8==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[8]))]):a._e(),a.index>8?s("img",{staticClass:"img_soal",attrs:{src:a.gambar[9],id:"9",draggable:"true"},on:{dragstart:a.dragstart,dragover:function(a){a.stopPropagation()}}}):a._e(),9==a.index?s("h3",{staticClass:"soal"},[a._v(a._s(a.nama_gambar[9]))]):a._e(),10==a.index?s("div",[s("br"),s("br"),s("br"),s("v-btn",{attrs:{icon:""},on:{click:a.retry}},[s("v-icon",{attrs:{size:"200px",color:"#606060"}},[a._v("mdi-refresh")])],1),s("br"),s("br"),s("h6",{staticClass:"mt-8"},[a._v("RETRY")])],1):a._e()])],1)],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6"}},[s("v-container",[s("v-row",[s("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[s("center",[s("v-card",{staticClass:"divdiv1",attrs:{id:"11"},on:{dragover:function(a){a.preventDefault()},drop:a.drop}},[s("v-card-title",{staticClass:"headline card_title"},[s("h5",[a._v("Kubus")])])],1)],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[s("center",[s("v-card",{staticClass:"divdiv1",attrs:{id:"11"},on:{dragover:function(a){a.preventDefault()},drop:a.drop1}},[s("v-card-title",{staticClass:"headline card_title"},[s("h5",[a._v("Balok")])])],1)],1)],1)],1)],1)],1)],1)],1)},y=[],V={data:function(){return{gambar:[s("8fb4"),s("d18b"),s("810e"),s("e102"),s("0e72"),s("b55f"),s("937d"),s("8d15"),s("e724"),s("037d")],nama_gambar:["- Aquarium -","- Kasur -","- Celengan -","- Dadu -","- Kue Coklat -","- Milo -","- Rubik -","- Penghapus -","- Semangka -","- Kotak Tisu -"],index:0}},methods:{asta:function(){var a=document.getElementById("1");a.addEventListener("touchstart",(function(a){console.log("asdasd")}))},dragstart:function(a){var t=a.target;a.dataTransfer.setData("card_id",t.id),setTimeout((function(){t.style.display="block"}),0)},drop:function(a){var t=a.dataTransfer.getData("card_id"),s=document.getElementById(t);2==t||3==t||5==t||6==t||8==t?(s.style.display="block",s.style.width="30%",a.target.appendChild(s),this.index+=1):console.log("salah dong")},drop1:function(a){var t=a.dataTransfer.getData("card_id"),s=document.getElementById(t);0==t||1==t||4==t||7==t||9==t?(s.style.display="block",s.style.width="40%",a.target.appendChild(s),this.index+=1):console.log("salah dong")},retry:function(){location.reload()}}},B=V,O=(s("974d"),s("8336")),P=s("99d9"),S=s("a523"),K=s("132d"),T=Object(l["a"])(B,x,y,!1,null,"71e9e40a",null),E=T.exports;o()(T,{VBtn:O["a"],VCard:j["a"],VCardTitle:P["c"],VCol:m["a"],VContainer:S["a"],VIcon:K["a"],VRow:p["a"]});var J=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("v-card",{staticClass:"rowbg"},[s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("a",{attrs:{href:"/pengenalan"}},[s("v-icon",{staticClass:"btn_navbar",attrs:{color:"dark"}},[a._v("mdi-arrow-left")])],1)]),s("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[s("h3",[a._v(a._s(a.title_navbar))])]),s("v-col",{staticClass:"text-end",attrs:{cols:"4"}},[s("a",{attrs:{href:"/kuis"}},[s("v-icon",{staticClass:"btn_navbar",attrs:{color:"dark"}},[a._v("mdi-arrow-right")])],1)])],1)],1),s("v-row",{staticClass:"mt-7"},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("center",[s("v-card",{staticClass:"cardbody",attrs:{elevation:"10"}},[s("v-dialog",{attrs:{"max-width":"1000",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[s("v-btn",a._g(a._b({staticClass:"btn",attrs:{color:"#f70025",dark:""}},"v-btn",i,!1),n),[a._v(" "+a._s(a.dialog_title[0])+" ")])]}}]),model:{value:a.dialog_unsur,callback:function(t){a.dialog_unsur=t},expression:"dialog_unsur"}},[s("v-card",[s("v-card-title",{staticClass:"headline card_title"},[s("h6",[a._v(a._s(a.dialog_title[0]))])]),s("v-card-text",[s("center",[s("video",{staticClass:"video_lebar",attrs:{id:"video_unsur",controls:"",autoplay:""}},[s("source",{attrs:{src:a.list_video[0],type:"video/mp4"}})])])],1),s("v-divider"),s("v-card-actions",{staticClass:"card_title"},[s("v-spacer"),s("v-btn",{attrs:{color:"red",rounded:"",dark:""},on:{click:a.dialog_unsur_close}},[s("font",{staticClass:"btn_card"},[a._v(a._s(a.back))])],1)],1)],1)],1),a._v(" "),s("br"),s("br"),s("v-dialog",{attrs:{"max-width":"1000",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[s("v-btn",a._g(a._b({staticClass:"btn",attrs:{color:"#f70025",dark:""}},"v-btn",i,!1),n),[a._v(" "+a._s(a.dialog_title[1])+" ")])]}}]),model:{value:a.dialog_jaring,callback:function(t){a.dialog_jaring=t},expression:"dialog_jaring"}},[s("v-card",[s("v-card-title",{staticClass:"headline card_title"},[s("h6",[a._v(a._s(a.dialog_title[1]))])]),s("v-card-text",[s("center",[s("video",{staticClass:"video_lebar",attrs:{id:"video_jaring",controls:"",autoplay:""}},[s("source",{attrs:{src:a.list_video[1],type:"video/mp4"}})])])],1),s("v-divider"),s("v-card-actions",{staticClass:"card_title"},[s("v-spacer"),s("v-btn",{attrs:{color:"red",rounded:"",dark:""},on:{click:a.dialog_jaring_close}},[s("font",{staticClass:"btn_card"},[a._v(a._s(a.back))])],1)],1)],1)],1),a._v(" "),s("br"),s("br"),s("v-dialog",{attrs:{"max-width":"1000",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[s("v-btn",a._g(a._b({staticClass:"btn",attrs:{color:"#f70025",dark:""}},"v-btn",i,!1),n),[a._v(" "+a._s(a.dialog_title[2])+" ")])]}}]),model:{value:a.dialog_luas,callback:function(t){a.dialog_luas=t},expression:"dialog_luas"}},[s("v-card",[s("v-card-title",{staticClass:"headline card_title"},[s("h6",[a._v(a._s(a.dialog_title[2]))])]),s("v-card-text",[s("center",[s("video",{staticClass:"video_lebar",attrs:{id:"video_luas",controls:"",autoplay:""}},[s("source",{attrs:{src:a.list_video[2],type:"video/mp4"}})])])],1),s("v-divider"),s("v-card-actions",{staticClass:"card_title"},[s("v-spacer"),s("v-btn",{attrs:{color:"red",rounded:"",dark:""},on:{click:a.dialog_luas_close}},[s("font",{staticClass:"btn_card"},[a._v(a._s(a.back))])],1)],1)],1)],1),a._v(" "),s("br"),s("br"),s("v-dialog",{attrs:{"max-width":"1000",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[s("v-btn",a._g(a._b({staticClass:"btn",attrs:{color:"#f70025",dark:""}},"v-btn",i,!1),n),[a._v(" "+a._s(a.dialog_title[3])+" ")])]}}]),model:{value:a.dialog_volume,callback:function(t){a.dialog_volume=t},expression:"dialog_volume"}},[s("v-card",[s("v-card-title",{staticClass:"headline card_title"},[s("h6",[a._v(a._s(a.dialog_title[3]))])]),s("v-card-text",[s("center",[s("video",{staticClass:"video_lebar",attrs:{id:"video_volume",controls:"",autoplay:""}},[s("source",{attrs:{src:a.list_video[3],type:"video/mp4"}})])])],1),s("v-divider"),s("v-card-actions",{staticClass:"card_title"},[s("v-spacer"),s("v-btn",{attrs:{color:"red",rounded:"",dark:""},on:{click:a.dialog_volume_close}},[s("font",{staticClass:"btn_card"},[a._v(a._s(a.back))])],1)],1)],1)],1)],1)],1)],1)],1)],1)},I=[],D={data:function(){return{list_video:[s("fe5b"),s("62a6"),s("5221"),s("6b56")],dialog_title:["Unsur-Unsur Kubus","Jaring-Jaring Kubus","Luas Permukaan Kubus","Volume Ruang Kubus"],dialog_id:["video_unsur","video_jaring","video_luas","video_volume"],dialog_unsur:!1,dialog_jaring:!1,dialog_luas:!1,dialog_volume:!1,back:"Kembali",title_navbar:"Teori Kubus"}},methods:{dialog_unsur_close:function(){this.dialog_unsur=!1;var a=document.getElementById("video_unsur");a.pause(),a.currentTime=0},dialog_jaring_close:function(){this.dialog_jaring=!1;var a=document.getElementById("video_jaring");a.pause(),a.currentTime=0},dialog_luas_close:function(){this.dialog_luas=!1;var a=document.getElementById("video_luas");a.pause(),a.currentTime=0},dialog_volume_close:function(){this.dialog_volume=!1;var a=document.getElementById("video_volume");a.pause(),a.currentTime=0}}},R=D,A=(s("06bf"),s("169a")),M=s("ce7e"),$=s("2fa4"),U=Object(l["a"])(R,J,I,!1,null,"a463b166",null),L=U.exports;o()(U,{VBtn:O["a"],VCard:j["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:m["a"],VDialog:A["a"],VDivider:M["a"],VIcon:K["a"],VRow:p["a"],VSpacer:$["a"]});var N=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("v-card",{staticClass:"rowbg"},[n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("a",{attrs:{href:"/teori"}},[n("v-icon",{staticClass:"btn_navbar",attrs:{color:"dark"}},[a._v("mdi-arrow-left")])],1)]),n("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[n("h3",[a._v("Kuis Kubus")])])],1)],1),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("center",[0==a.bukaan1?n("div",{staticClass:"lingkaran",on:{click:a.buka_1}},[n("h3",[a._v("Soal 1")])]):1==a.bukaan1?n("div",{staticClass:"lingkaran1"},[n("h3",[a._v("Soal 1")])]):a._e()])],1)],1),0!=a.soal1?n("div",{staticClass:"bg"},[2==a.soal1?n("v-row",{staticClass:"text-center mt-7"},[n("v-col",{staticClass:"warna_div",attrs:{cols:"12"}},[n("h1",[a._v("Jawaban Benar")])])],1):a._e(),1==a.soal1||2==a.soal1?n("v-row",[n("v-col",{attrs:{cols:"12",sm:"7"}},[n("div",{staticClass:"div_soal"},[n("h3",{staticClass:"hsoal"},[a._v("Berikut ini adalah tampilan sebuah model bangunan yang dilihat dari sisi depan, atas, dan samping kanan")]),n("center",[n("img",{staticClass:"img_soal",attrs:{src:s("8c4c")}})]),n("h3",{staticClass:"hsoal"},[a._v("Berapa banyak kubus penyusunnya?")])],1)]),n("v-col",{staticClass:"mt-5",attrs:{cols:"12",sm:"5"}},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("center",[""!=a.jawaban1?n("button",{staticClass:"btn_answe"},[n("h2",[a._v(a._s(a.jawaban1))])]):a._e()])],1),n("v-col",{attrs:{cols:"10"}},[n("div",{staticClass:"angka_angka"},[n("center",[n("button",{staticClass:"btn_angka",attrs:{disabled:a.disable1},on:{click:a.angka1}},[a._v("1")]),n("button",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable1},on:{click:a.angka2}},[a._v("2")]),n("button",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable1},on:{click:a.angka3}},[a._v("3")]),a._v(" "),n("br"),n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.angka4}},[a._v("4")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.angka5}},[a._v("5")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.angka6}},[a._v("6")]),a._v(" "),n("br"),n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.angka7}},[a._v("7")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.angka8}},[a._v("8")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.angka9}},[a._v("9")]),a._v(" "),n("br"),""!=a.jawaban1?n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.reset}},[a._v("C")]):a._e(),""==a.jawaban1?n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.angka0}},[a._v("0")]):a._e(),""!=a.jawaban1?n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.angka0}},[a._v("0")]):a._e(),""!=a.jawaban1?n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable1},on:{click:a.submit_jawaban_1}},[a._v("OK")]):a._e(),a._v(" "),n("br")])],1)])],1)],1)],1):a._e(),2==a.soal1?n("v-row",{staticClass:"text-center mt-7"},[n("v-col",{staticClass:"warna_div",attrs:{cols:"12"}},[n("h1",[a._v("Jawaban Benar")])])],1):a._e()],1):a._e(),n("v-row",[n("v-col",{staticClass:"text-center mt-7",attrs:{cols:"12"}},[n("center",[0==a.bukaan2?n("div",{staticClass:"lingkaran",on:{click:a.buka_2}},[n("h3",[a._v("Soal 2")])]):1==a.bukaan2?n("div",{staticClass:"lingkaran1"},[n("h3",[a._v("Soal 2")])]):a._e()])],1)],1),0!=a.soal2?n("div",{staticClass:"bg"},[2==a.soal2?n("v-row",{staticClass:"text-center mt-7"},[n("v-col",{staticClass:"warna_div",attrs:{cols:"12"}},[n("h1",[a._v("Jawaban Benar")])])],1):a._e(),1==a.soal2||2==a.soal2?n("v-row",[n("v-col",{attrs:{cols:"12",sm:"7"}},[n("div",{staticClass:"div_soal"},[n("center",[1==a.index_soal2?n("img",{staticClass:"img_soal",attrs:{src:s("c369")}}):a._e(),2==a.index_soal2?n("img",{staticClass:"img_soal",attrs:{src:s("243d")}}):a._e(),3==a.index_soal2?n("img",{staticClass:"img_soal",attrs:{src:s("db0d")}}):a._e()])],1),n("h3",{staticClass:"hsoal"},[a._v("Berapa banyak jumlah kubus pada gambar di atas?")])]),n("v-col",{staticClass:"mt-5",attrs:{cols:"12",sm:"5"}},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("center",[""!=a.jawaban2?n("button",{staticClass:"btn_answe"},[n("h2",[a._v(a._s(a.jawaban2))])]):a._e()])],1),n("v-col",{attrs:{cols:"10"}},[n("div",{staticClass:"angka_angka"},[n("center",[n("button",{staticClass:"btn_angka",attrs:{disabled:a.disable2},on:{click:a.angka1}},[a._v("1")]),n("button",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable2},on:{click:a.angka2}},[a._v("2")]),n("button",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable2},on:{click:a.angka3}},[a._v("3")]),a._v(" "),n("br"),n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.angka4}},[a._v("4")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.angka5}},[a._v("5")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.angka6}},[a._v("6")]),a._v(" "),n("br"),n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.angka7}},[a._v("7")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.angka8}},[a._v("8")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.angka9}},[a._v("9")]),a._v(" "),n("br"),""!=a.jawaban2?n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.reset}},[a._v("C")]):a._e(),""==a.jawaban2?n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.angka0}},[a._v("0")]):a._e(),""!=a.jawaban2?n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.angka0}},[a._v("0")]):a._e(),""!=a.jawaban2?n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable2},on:{click:a.submit_jawaban_2}},[a._v("OK")]):a._e(),a._v(" "),n("br")])],1)])],1)],1)],1):a._e(),2==a.soal2?n("v-row",{staticClass:"text-center mt-7"},[n("v-col",{staticClass:"warna_div",attrs:{cols:"12"}},[n("h1",[a._v("Jawaban Benar")])])],1):a._e()],1):a._e(),n("v-row",[n("v-col",{staticClass:"text-center mt-7",attrs:{cols:"12"}},[n("center",[0==a.bukaan3?n("div",{staticClass:"lingkaran",on:{click:a.buka_3}},[n("h3",[a._v("Soal 3")])]):1==a.bukaan3?n("div",{staticClass:"lingkaran1"},[n("h3",[a._v("Soal 3")])]):a._e()])],1)],1),0!=a.soal3?n("div",{staticClass:"bg"},[2==a.soal3?n("v-row",{staticClass:"text-center mt-7"},[n("v-col",{staticClass:"warna_div",attrs:{cols:"12"}},[n("h1",[a._v("Jawaban Benar")])])],1):a._e(),1==a.soal3||2==a.soal3?n("v-row",[n("v-col",{attrs:{cols:"12",sm:"7"}},[n("div",{staticClass:"div_soal"},[n("center",[1==a.index_soal3?n("img",{staticClass:"img_soal",attrs:{src:s("bd5a")}}):a._e(),2==a.index_soal3?n("img",{staticClass:"img_soal",attrs:{src:s("0d14")}}):a._e(),3==a.index_soal3?n("img",{staticClass:"img_soal",attrs:{src:s("a2a8")}}):a._e()])],1),n("h3",{staticClass:"hsoal"},[a._v("Berapa banyak jumlah kubus pada gambar di atas?")])]),n("v-col",{staticClass:"mt-5",attrs:{cols:"12",sm:"5"}},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("center",[""!=a.jawaban3?n("button",{staticClass:"btn_answe"},[n("h2",[a._v(a._s(a.jawaban3))])]):a._e()])],1),n("v-col",{attrs:{cols:"10"}},[n("div",{staticClass:"angka_angka"},[n("center",[n("button",{staticClass:"btn_angka",attrs:{disabled:a.disable3},on:{click:a.angka1}},[a._v("1")]),n("button",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable3},on:{click:a.angka2}},[a._v("2")]),n("button",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable3},on:{click:a.angka3}},[a._v("3")]),a._v(" "),n("br"),n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.angka4}},[a._v("4")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.angka5}},[a._v("5")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.angka6}},[a._v("6")]),a._v(" "),n("br"),n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.angka7}},[a._v("7")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.angka8}},[a._v("8")]),n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.angka9}},[a._v("9")]),a._v(" "),n("br"),""!=a.jawaban3?n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.reset}},[a._v("C")]):a._e(),""==a.jawaban3?n("button",{staticClass:"btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.angka0}},[a._v("0")]):a._e(),""!=a.jawaban3?n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.angka0}},[a._v("0")]):a._e(),""!=a.jawaban3?n("button",{staticClass:"kiri btn_angka mt-2",attrs:{disabled:a.disable3},on:{click:a.submit_jawaban_3}},[a._v("OK")]):a._e(),a._v(" "),n("br")])],1)])],1)],1)],1):a._e(),2==a.soal3?n("v-row",{staticClass:"text-center mt-7"},[n("v-col",{staticClass:"warna_div",attrs:{cols:"12"}},[n("h1",[a._v("Jawaban Benar")])])],1):a._e()],1):a._e(),n("v-row",[n("v-col",{staticClass:"text-center mt-7",attrs:{cols:"12"}},[n("center",[0==a.bukaan6?n("div",{staticClass:"lingkaran",on:{click:a.buka_6}},[n("h3",[a._v("Soal 6")])]):1==a.bukaan6?n("div",{staticClass:"lingkaran1"},[n("h3",[a._v("Soal 6")])]):a._e()])],1)],1),0!=a.soal6?n("div",{staticClass:"bg"},[2==a.soal6?n("v-row",{staticClass:"text-center mt-7"},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"posisi warna_div"},[n("h1",[n("font",{attrs:{color:"#ffffff"}},[a._v("Jawaban Benar")])],1)])],1)],1):a._e(),1==a.soal6||2==a.soal6?n("v-row",[n("v-col",{staticClass:"text-center mt-7",attrs:{cols:"7"}},[n("img",{attrs:{src:s("eabd"),width:"200"}}),n("br"),n("br"),n("h4",[a._v("Ani ingin memberi hadiah kepada temannya sebagai hadiah ulang tahun. Ani menggunakan kotak kardus sebagai tempat hadiahnya. Untuk mempercantik hadiahnya, ani ingin membungkus kardus tersebut dengan kertas kado. Berapa ukuran minimal kertas kado yang dibutuhkan ani untuk membungkus kardus? ")])]),n("v-col",{staticClass:"mt-7",attrs:{cols:"5"}},[n("center",[n("v-btn",{staticClass:"btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka1}},[a._v("1")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka2}},[a._v("2")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka3}},[a._v("3")]),a._v(" "),n("br"),n("br"),n("v-btn",{staticClass:"btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka4}},[a._v("4")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka5}},[a._v("5")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka6}},[a._v("6")]),a._v(" "),n("br"),n("br"),n("v-btn",{staticClass:"btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka7}},[a._v("7")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka8}},[a._v("8")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka9}},[a._v("9")]),a._v(" "),n("br"),n("br"),n("v-btn",{staticClass:"btn_angka",attrs:{disabled:a.disable6},on:{click:a.reset}},[a._v("C")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable6},on:{click:a.angka0}},[a._v("0")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable6},on:{click:a.submit_jawaban_6}},[a._v("OK")]),a._v(" "),n("br"),n("br"),n("br"),""!=a.jawaban6?n("v-btn",{staticClass:"btn_answe"},[n("h1",[a._v(a._s(a.jawaban6))])]):a._e()],1)],1)],1):a._e()],1):a._e(),n("v-row",[n("v-col",{staticClass:"text-center mt-7",attrs:{cols:"12"}},[n("center",[0==a.bukaan7?n("div",{staticClass:"lingkaran",on:{click:a.buka_7}},[n("h3",[a._v("Soal 7")])]):1==a.bukaan7?n("div",{staticClass:"lingkaran1"},[n("h3",[a._v("Soal 7")])]):a._e()])],1)],1),0!=a.soal7?n("div",{staticClass:"bg"},[2==a.soal7?n("v-row",{staticClass:"text-center mt-7"},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"posisi warna_div"},[n("h1",[n("font",{attrs:{color:"#ffffff"}},[a._v("Jawaban Benar")])],1)])],1)],1):a._e(),1==a.soal7||2==a.soal7?n("v-row",[n("v-col",{staticClass:"text-center mt-7",attrs:{cols:"7"}},[n("img",{attrs:{src:s("54ad"),width:"200"}}),n("br"),n("br"),n("h4",[a._v("Jika pak amir mendapatkan pesanan untuk mengirimkan 2 kardus berisi rubik diatas. Dan kardus yang digunakan untuk mengemas rubik berukuran (30x18x12) cm. berapa banyakkah rubik yang harus diisi hingga kardus penuh? ")])]),n("v-col",{staticClass:"mt-7",attrs:{cols:"5"}},[n("center",[n("v-btn",{staticClass:"btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka1}},[a._v("1")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka2}},[a._v("2")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka3}},[a._v("3")]),a._v(" "),n("br"),n("br"),n("v-btn",{staticClass:"btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka4}},[a._v("4")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka5}},[a._v("5")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka6}},[a._v("6")]),a._v(" "),n("br"),n("br"),n("v-btn",{staticClass:"btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka7}},[a._v("7")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka8}},[a._v("8")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka9}},[a._v("9")]),a._v(" "),n("br"),n("br"),n("v-btn",{staticClass:"btn_angka",attrs:{disabled:a.disable7},on:{click:a.reset}},[a._v("C")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable7},on:{click:a.angka0}},[a._v("0")]),n("v-btn",{staticClass:"kiri btn_angka",attrs:{disabled:a.disable7},on:{click:a.submit_jawaban_7}},[a._v("OK")]),a._v(" "),n("br"),n("br"),n("br"),""!=a.jawaban7?n("v-btn",{staticClass:"btn_answe"},[n("h1",[a._v(a._s(a.jawaban7))])]):a._e()],1)],1)],1):a._e()],1):a._e()],1)},q=[],z={data:function(){return{bukaan1:!1,bukaan2:!0,bukaan3:!0,bukaan6:!0,bukaan7:!0,soal1:0,soal2:0,soal3:0,soal6:0,soal7:0,index_soal2:1,index_soal3:1,jawaban1:"",jawaban2:"",jawaban3:"1",jawaban4:"",jawaban5:"",jawaban6:"",jawaban7:"",index_jawaban:0,disable1:!1,disable2:!1,disable3:!1,disable6:!1,disable7:!1}},methods:{buka_1:function(){this.soal1=1,this.index_jawaban=1},buka_2:function(){this.soal2=1,this.index_jawaban=2},buka_3:function(){this.soal3=1,this.index_jawaban=3},buka_6:function(){this.soal6=1,this.index_jawaban=6},buka_7:function(){this.soal7=1,this.index_jawaban=7},angka1:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="1"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="1"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="1"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="1"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="1"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="1"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="1")},angka2:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="2"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="2"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="2"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="2"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="2"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="2"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="2")},angka3:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="3"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="3"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="3"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="3"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="3"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="3"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="3")},angka4:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="4"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="4"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="4"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="4"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="4"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="4"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="4")},angka5:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="5"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="5"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="5"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="5"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="5"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="5"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="5")},angka6:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="6"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="6"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="6"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="6"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="6"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="6"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="6")},angka7:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="7"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="7"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="7"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="7"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="7"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="7"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="7")},angka8:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="8"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="8"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="8"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="8"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="8"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="8"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="8")},angka9:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="9"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="9"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="9"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="9"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="9"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="9"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="9")},angka0:function(){1==this.index_jawaban&&this.jawaban1.length<3&&(this.jawaban1+="0"),2==this.index_jawaban&&this.jawaban2.length<3&&(this.jawaban2+="0"),3==this.index_jawaban&&this.jawaban3.length<3&&(this.jawaban3+="0"),4==this.index_jawaban&&this.jawaban4.length<3&&(this.jawaban4+="0"),5==this.index_jawaban&&this.jawaban5.length<3&&(this.jawaban5+="0"),6==this.index_jawaban&&this.jawaban6.length<3&&(this.jawaban6+="0"),7==this.index_jawaban&&this.jawaban7.length<3&&(this.jawaban7+="0")},reset:function(){1==this.index_jawaban&&(this.jawaban1=""),2==this.index_jawaban&&(this.jawaban2=""),3==this.index_jawaban&&(this.jawaban3=""),4==this.index_jawaban&&(this.jawaban4=""),5==this.index_jawaban&&(this.jawaban5=""),6==this.index_jawaban&&(this.jawaban6=""),7==this.index_jawaban&&(this.jawaban7="")},submit_jawaban_1:function(){""==this.jawaban1||20!=this.jawaban1?console.log("salah"):20==this.jawaban1&&(console.log("benar"),this.disable1=!0,this.soal1=2,this.bukaan2=!1,this.bukaan1=!0)},submit_jawaban_2:function(){1==this.index_soal2?""==this.jawaban2||4!=this.jawaban2?console.log("salah"):4==this.jawaban2&&(console.log("benar"),this.index_soal2=2,this.jawaban2=""):2==this.index_soal2?""==this.jawaban2||8!=this.jawaban2?console.log("salah"):8==this.jawaban2&&(console.log("benar"),this.index_soal2=3,this.jawaban2=""):3==this.index_soal2&&(""==this.jawaban2||9!=this.jawaban2?console.log("salah"):9==this.jawaban2&&(console.log("benar"),this.disable2=!0,this.soal2=2,this.bukaan3=!1,this.bukaan2=!0))},submit_jawaban_3:function(){1==this.index_soal3?""==this.jawaban3||11!=this.jawaban3?console.log("salah"):11==this.jawaban3&&(console.log("benar"),this.index_soal3=2,this.jawaban3=""):2==this.index_soal3?""==this.jawaban3||11!=this.jawaban3?console.log("salah"):11==this.jawaban3&&(console.log("benar"),this.index_soal3=3,this.jawaban3=""):3==this.index_soal3&&(""==this.jawaban3||13!=this.jawaban3?console.log("salah"):13==this.jawaban3&&(console.log("benar"),this.disable3=!0,this.soal3=2,this.bukaan6=!1,this.bukaan3=!0))},submit_jawaban_6:function(){""==this.jawaban6||900!=this.jawaban6?console.log("salah"):900==this.jawaban6&&(console.log("benar"),this.disable6=!0,this.soal6=2,this.bukaan7=!1,this.bukaan6=!0)},submit_jawaban_7:function(){""==this.jawaban7||30!=this.jawaban7?console.log("salah"):30==this.jawaban7&&(console.log("benar"),this.disable7=!0,this.soal7=2,this.bukaan7=!0)}}},G=z,W=(s("54b3"),Object(l["a"])(G,N,q,!1,null,"10d4642b",null)),Y=W.exports;o()(W,{VBtn:O["a"],VCard:j["a"],VCol:m["a"],VIcon:K["a"],VRow:p["a"]}),n["a"].use(h["a"]);var F=[{path:"/",name:"Awal",component:f},{path:"/pengenalan",name:"Pengenalan",component:E},{path:"/teori",name:"Teori",component:L},{path:"/kuis",name:"Kuis",component:Y}],H=new h["a"]({routes:F,mode:"history",hash:!1}),Q=H,X=s("f309");n["a"].use(X["a"]);var Z=new X["a"]({});s("5363");n["a"].config.productionTip=!1,new n["a"]({router:Q,vuetify:Z,render:function(a){return a(g)}}).$mount("#app");t["default"]=new Z({icons:{iconfont:"mdi"}})},"62a6":function(a,t,s){a.exports=s.p+"media/jaring_jaring.c4981055.mp4"},"6b56":function(a,t,s){a.exports=s.p+"media/volume_ruang.34b44cc3.mp4"},"6d90":function(a,t,s){},"810e":function(a,t,s){a.exports=s.p+"img/celengan.22c00253.png"},"842b":function(a,t,s){"use strict";var n=s("c3d6"),i=s.n(n);i.a},"8c4c":function(a,t,s){a.exports=s.p+"img/kuis_1.26317413.png"},"8d15":function(a,t,s){a.exports=s.p+"img/striper.dd5b79eb.png"},"8fb4":function(a,t,s){a.exports=s.p+"img/aquarium.42ab62a2.png"},"937d":function(a,t,s){a.exports=s.p+"img/rubik.478944b8.png"},"974d":function(a,t,s){"use strict";var n=s("a69a"),i=s.n(n);i.a},a2a8:function(a,t,s){a.exports=s.p+"img/kuis_3_3.f0017cbc.png"},a69a:function(a,t,s){},b55f:function(a,t,s){a.exports=s.p+"img/milo.2cec768e.jpg"},bd5a:function(a,t,s){a.exports=s.p+"img/kuis_3_1.6e8266e4.png"},c369:function(a,t,s){a.exports=s.p+"img/kuis_2_1.47c81466.png"},c3d6:function(a,t,s){},cbe2:function(a,t,s){},d18b:function(a,t,s){a.exports=s.p+"img/bed.d3bb59fb.png"},d870:function(a,t,s){},db0d:function(a,t,s){a.exports=s.p+"img/kuis_2_3.546711fe.png"},e102:function(a,t,s){a.exports=s.p+"img/dadu.5e047d8a.png"},e724:function(a,t,s){a.exports=s.p+"img/semongko.dc30d939.jpg"},eabd:function(a,t,s){a.exports=s.p+"img/kuis_6.48a478c9.png"},fe5b:function(a,t,s){a.exports=s.p+"media/unsur_unsur.ec4c13a3.mp4"}});
//# sourceMappingURL=app.c183ed47.js.map