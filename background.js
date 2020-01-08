// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

chrome.alarms.onAlarm.addListener(function() {
  chrome.storage.sync.get(['minutes'], function(item) {

    chrome.notifications.create({
      type:     'basic',
      iconUrl:  'stay_hydrated.png',
      title:    'Time to Hydrate',
      message:  'Everyday I\'m Guzzlin\'!' ,
      buttons: [
        {title: 'Keep it Flowing.'}
      ],
      priority: 0});
  });
});
