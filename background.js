// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';
chrome.runtime.onMessage.addListener('hh',function(){
  alert(hh)
});

chrome.alarms.onAlarm.addListener(function() {
  chrome.storage.sync.get(['tim','ci'], function(item) {
    var b = item.ci.toString();
    var params={
      type:     'basic',
      iconUrl:  'iconoficon.jpg',
      title:    '提醒一下，兄弟',
      message:  b,
      priority: 0,
      requireInteraction:false
    };

  
    chrome.notifications.create(params);
  });
});



// // Copyright 2017 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.
// 'use strict';

// chrome.alarms.onAlarm.addListener(function() {
//   chrome.storage.sync.get(['tim'], function(item) {

//     var a = new String(item.tim)
   


//     var params={
//       type:     'basic',
//       iconUrl:  'stay_hydrated.png',
//       title: 'asdf',
//       message:  'Everyday I\'m Guzzlin\'!' ,
//       priority: 0
//     };

      
//     chrome.notifications.create(params);
//   });
// });
