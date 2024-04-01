const Webcam = () => {
  // === this is the insane code for the webcam from the old site lol ===
  {
    /* <script type="text/javascript">
		var webcam_counter = 0;
		var webcam_counter_offset = 1711987567;
		var webcam_buffer=new Image;
		var picture_id = 0;
		function webcam_reload() {
			webcam_counter++;
			document.getElementById("webcam").src = webcam_buffer.src;
			if(webcam_counter<=500) {
				window.setTimeout("webcam_preload()", 10);
			} else {
				document.getElementById("div_webcam_reload").innerHTML = "<input type='button' value='Webcam weiter ansehen' onClick='window.location.reload()'>";
			}
		}
		
		function webcam_preload() {
			picture_id = webcam_counter+webcam_counter_offset;
			if(webcam_counter<500) {
				webcam_buffer.src = "https://www.cvjm-ratzeburg.de/webcam/webcam"+picture_id+".jpg";
			} else {
				webcam_buffer.src = "https://www.cvjm-ratzeburg.de/webcam/webcam"+picture_id+"_reload.jpg";
			}
			window.setTimeout("webcam_wait()", 500);
		}
		
		function webcam_wait() {
			window.setTimeout("webcam_reload()", 500);
		}
		</script> */
  }

  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Webcam</h1>
        <p>
          Hier gibt es erst was zu sehen wenn ich auf die Webcam Zugriff bekomme
          haha
        </p>
      </section>
    </div>
  );
};

export default Webcam;
