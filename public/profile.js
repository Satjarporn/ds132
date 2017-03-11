function upload(input) {
			var url = input.value
			var fr = new FileReader()
        	fr.onload = function () {
        		var img = new Image()
            	img.src = fr.result
            	img.onload = function() {
            		var frame = new Image()
            		frame.src = "/ds132_frame.png" // dev
            		// frame.src = "https://ds132-161220.appspot.com/ds132_frame.png" //prod
            		frame.onload = function() {	
            			var c = document.getElementById("myCanvas")
            			var ctx = c.getContext("2d")
            			ctx.drawImage(img, 100, 100, 1400, 1400)
            			ctx.drawImage(frame, 0, 0, 1600, 1600)
            			var imageUrl = c.toDataURL("image/jpeg")
            			var result = document.getElementById("result")
            			result.src = imageUrl

            			var result = document.getElementById("download")
            			download.href = imageUrl

            			var a_href = $('#download').attr('href');
						var url_convert = a_href.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
						$('#download').attr('href',url_convert);
						$('#download').attr("download", "DS132_profile.jpg")
            			
            		}
            	}
        	}
        	fr.readAsDataURL(input.files[0]);
		}