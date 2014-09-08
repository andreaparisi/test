/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },



    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
	Puship.PushipAppId = "3zfk1YxR6zuPJ6w"; // Replace this with your Puship Application ID
	
	Puship.EnableLog=true; // Enable/Disable the Puship internal logger (default is false)
	
	if (Puship.Common.GetCurrentOs()==Puship.OS.ANDROID){
		var GCMCode = "66300571811"; // Replace this with your google senderID
		Puship.GCM.Register(GCMCode,
		{
			successCallback: function (pushipresult)
            {	
			
			
			
			//test tts
			
			
			window.plugins.tts.startup(startupWin, fail);
			
			
			
			
			
			function startupWin(result) {
 // When result is equal to STARTED we are ready to play
 if (result == TTS.STARTED) {
  //Ready to go
 }
};
			
			window.plugins.tts.speak("The text to speech service is ready");
			
			
			
			// start read mex
			
			Puship.Common.GetPushMessagesByDevice(


	        	{
					//limit: 10, //max limit is 50 default is 20
	   				//offset: 100,
					successCallback: function (regresult){
		                console.log("GetPushMessagesByDevice done");

		                if (regresult.length>0)
	                	{
		                	alert("Message 1 of "+regresult.length+": "+regresult[0].Message);
	                	}else{
	                		alert("Non ci sono mex");
	                	}
					},


					failCallback: function (regresult){
						console.log("error during GetPushMessagesByDevice: "+ regresult);
						alert("error during GetPushMessagesByDevice: "+ regresult);
					}
				});




    {
        navigator.notification.vibrate(2000);
    }



      },

			failCallback: function (pushipresult){
				navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
			}
		});
	} else if (Puship.Common.GetCurrentOs()==Puship.OS.IOS){
		Puship.APNS.Register(
		{
			successCallback: function (pushipresult){
				navigator.notification.alert("notifiche attivate");
			},
			failCallback: function (pushipresult){
				navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
			}
		});
	} else {
		Console.log("Not supported platform");
	}
	
	Puship.Common.OnPushReceived(function(event) {

		console.log('push received');





		try
		{
			alert(event.notification.Alert);
		}
		catch(err)
		{
			console.warn("Cannot display alert in background");
		}
	});

    }
};
