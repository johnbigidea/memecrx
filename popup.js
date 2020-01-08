'use strict';

let btn = document.getElementById("btn");
let cla = document.getElementById("cla");
let hista = document.getElementById("hista");
let nex = document.getElementById("nex");
let welcome = document.getElementById("welcome");
nex.addEventListener("click", reshow);
var sortlist = new Array()
var hist = new Array()
var w = $('ol')
let clearAm = document.getElementById("al");

// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// var p = new Date().getTime();
// chrome.alarms.create('a',{when: p+20*1000});
// chrome.alarms.create('c',{when: new Date(Date.now()+120*1000).getTime()});
// chrome.alarms.create('b',{when: p+8*1000});
clearAm.addEventListener("click", clearall);

function clearall(){
  chrome.alarms.clearAll();
  window.close();
}

function ralarm(e){
  chrome.alarms.clearAll();
  for(var i = 0;i<e.length;i++){
    var a = 'this is ' + i
    chrome.alarms.create(a,{when: e[i][2]});
  } 
  
}




//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute incriments if released
// document.getElementById('sampleSecond').addEventListener('click', setAlarm);
// document.getElementById('15min').addEventListener('click', setAlarm);
// document.getElementById('30min').addEventListener('click', setAlarm);
// document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);



function reshow(){
  w.empty();
  if(sortlist){


  for(var i  = 0;i<sortlist.length;i++) {
    w.append('<li value = i>' +sortlist[i][0]+'   ------   '+sortlist[i][1]+'<button class="dele" value=' +i+'>delete</button></li>')
    w.append('<br>')
    name.value = "";
  }
}

} 



var sortlist = new Array()
var hist = new Array()
w.on('click','.dele',function(e){
  // $(this).parent().remove();
   var ahashuchuan = e.target.value
   console.log(ahashuchuan)
   console.log(sortlist)
   sortlist.splice(ahashuchuan,1)

   chrome.storage.local.set({ 'sortlist': (sortlist)}, ralarm(sortlist));

  w.empty()
  for(var i  = 0;i<sortlist.length;i++) {
    w.append('<li value = i>' +sortlist[i][0]+'   ------   '+sortlist[i][1]+'<button class="dele" value=' +i+'>delete</button></li>')
    w.append('<br>')
    name.value = "";
  }


  //  updateShow(sortlist);

  
})
w.on('click','.delehis',function(e){

  // $(this).parent().remove();

    if(confirm('are you sure')){
      if(confirm('are you really sure')){

        var ahachuanhis = e.target.value


        hist.splice(ahachuanhis,1)
     
        chrome.storage.local.set({ 'hist': (hist)}, function() {
       });
     
       w.empty()
       for(var i  = 0;i<hist.length;i++) {
         w.append('<li value = i>' +hist[i][0]+ '   ------   '+hist[i][1]+'<button class="delehis" value=' +i+'>delete</button></li>')
         w.append('<br>')
         // name.value = "";
       }
        alert('done')
      }else{
        alert('undo')
      }
    
    }else{
      alert('you save data')
  
    }
  

  //  updateShow(sortlist);

  
})

let name = document.getElementById("nameField");

btn.addEventListener("click", storeName);
cla.addEventListener("click", clear);
// console.log(cla);
// console.log(hista);
hista.addEventListener("click", showHist);


function showHist(){
  w.empty();
  for(var i  = 0;i<hist.length;i++) {
    w.append('<li value = i>' +hist[i][0]+ '   ------   '+hist[i][1]+'<button class="delehis" value=' +i+'>delete</button></li>')
    w.append('<br>')


  }

}
// dele.addEventListener("click", remm);

chrome.storage.local.remove(["Key1","key2"],function(){
  var error = chrome.runtime.lastError;
  if (error) {
    console.error(error);
  }
})

function clear(){
  if(confirm('are you sure')){
    if(confirm('are you really sure')){
      chrome.storage.local.clear(function(obj){
        console.log("cleared");
        window.location.reload();
      });
      alert('done')
    }else{
      alert('undo')
    }
  
  }else{
    alert('you save data')

  }


}

//加载。。。。

load();
function load(){
  chrome.storage.local.get('hist', function(result){
    hist = result.hist;


  });


  chrome.storage.local.get('sortlist', function(result){
    sortlist = result.sortlist;
    console.log(sortlist)

    w.empty();
    
    if(sortlist){
      for(var i  = 0;i<sortlist.length;i++) {
        w.append('<li value  = i>' +sortlist[i][0]+  '   ------   '+sortlist[i][1]+'<button class="dele" value=' +i+'>delete</button></li>')
        w.append('<br>')
  
      }

    }

    
  });
}

// chrome.storage.local.get('key2', function(result) {
//   // welcome.innerHTML = `Welcome, ${result.key}`;
//   w.empty();
//   console.log(result.key2)

//   for(var i  = 0;i<result.key2.length;i++) {
//     w.append('<li value  = i>' +result.key2[i][0]+ '<button class="dele" value=' +i+'>delete</button></li>')
//     w.append('<br>')
//     let dele = document.getElementsByClassName("dele");
//   }
//   sortlist = result.key2
//   console(sortlist.length)
  
// });
// chrome.storage.local.get('key1', function(result2) {
//   console.log('asdf')
//   console.log(result2)
//   hist = result2.key1
//   console.log(hist.length)

// });

// chrome.storage.local.get({ key: (hist)}, function(result) {
//   // welcome.innerHTML = `Welcome, ${result.key}`;
  
//   for(var i  = 0;i<result.key.length;i++) {
//     w.append('<li value  = i>' +result.key[i][0]+ '<button class="dele" value=' +i+'>delete</button></li>')
//     w.append('<br>')
//     let dele = document.getElementsByClassName("dele");
//   }
//   hist = result.key
//   console.log('safd')
//   console.log(hist)
// });

var ebin = [0.1,1,120,360,720,1440,2880,5760,11660,0.5]

function storeName() {
  var lhist;
  if (name.value.trim() !== "") {
    var l;
    if(typeof sortlist === "undefined"){
      l = 0
      sortlist = new Array(0)
    }else{
      l  = sortlist.length;
    }
    if(typeof hist === "undefined"){
      lhist = 0
      hist = new Array(0)
    }else{
      lhist  = hist.length;
    }
  




    for(var i  = 0;i<10;i++) {
      // w.append('<li>' + name.value.trim() + '</li>')
      // w.append('<br>')
      var temp = new Array(3)
      let d = new Date()
      sortlist[l+i] = temp
      sortlist[l+i][0] = name.value
      sortlist[l+i][1] = new Date(d.getTime()+ebin[i]*60*1000).toLocaleString();
      sortlist[l+i][2] = d.getTime()+ebin[i]*60*1000

    }

        
     var temp2 = new Array(2)
     hist[lhist] = temp2
     hist[lhist][0] = name.value
     hist[lhist][1] = new Date().toLocaleString();




  

    chrome.storage.local.set({ 'hist': (hist)}, function() {



    });

    chrome.storage.local.set({ 'sortlist': (sortlist)}, ralarm(sortlist));

    welcome.innerHTML = `NEW, ${sortlist[l][0]}`;
    w.empty();

    for(var i  = 0;i<sortlist.length;i++) {
      w.append('<li value = i>' +sortlist[i][0]+  '   ------   '+sortlist[i][1]+'<button class="dele" value=' +i+'>delete</button></li>')
      w.append('<br>')
      name.value = "";
    }

  } else {
    welcome.innerHTML = "Welcome";
    name.value = "";
  }
}

