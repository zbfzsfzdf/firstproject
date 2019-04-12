

            function dzt(){
				//document.getElementById("loading").style.display="none";
				$("#loading").hide();
				$("#scene2").hide();
				$("#i0").attr("src","img/image_pig_1.gif")
						.css("top","700px")
						.css("left","200px")
						.show();
				$("#i1").show();		
				$("#musicplayer").show();
				$("#biaoti").show();
				$("#bg").show();
				$("#xuyuanzhe").show();
				//music.pause();
			}
			window.setTimeout("dzt()", 2000);
			 function dztt(){
				
			 }
			window.setTimeout("dztt()", 5000);
			
// 			$(document).ready(function(){
// 				//alert(1);
// 				function oneSleep(){
// 					for(i=0;i<9999999;i++){
// 						for(j=0;j<100;j++){
// 							
// 						}
// 					}
// 					$("#i0").attr("src","img/image_pig_1.gif")
// 					        .css("top","0px")
// 					        .css("left","0px");
// 				}
// 				oneSleep();
// 				
// 			});
   


	
	
	
	$(document).ready(function(){
		var music = document.getElementById("music");
		var musicon = document.getElementById("musicon");
		var musicoff = document.getElementById("musicoff");
		
		//弹窗
		var div = document.getElementById('background');
		var close = document.getElementById('close-button');
		 
		
		$("#i1").click(function(){
            music.play(); 
			//$("#scene1").hide();
			div.style.display = "block";
		});
		$("#musicoff").click(function(){
			musicon.className = musicon.className ? "":"hidden";
			musicoff.className = musicoff.className ? "":"hidden";
			music.play(); 
			//alert(1);
		});
		$("#musicon").click(function(){
			musicon.className = musicon.className ? "":"hidden";
			musicoff.className = musicoff.className ? "":"hidden";
			music.pause(); 
			//alert(0);
		});
		
		
		 
		close.onclick = function close() {
			div.style.display = "none";
		}
		 
		window.onclick = function close(e) {
			if (e.target == div) {
				div.style.display = "none";
			}
		}
		
		
	});