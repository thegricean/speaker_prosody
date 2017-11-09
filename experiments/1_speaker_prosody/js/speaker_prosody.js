function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.trial = slide({
    name : "trial",
    present: exp.all_stims,
 
    // PRESENT THE SLIDE
    present_handle: function(stim) {
      this.trial_start = new Date();
      this.stim = stim;
      this.type = stim.title;
      this.not_paid_attention = false;
      exp.sliderPost = {};
      $("#audio_player").data("num-plays", 0);

      console.log("Trial: " + stim.audio);
      $("#error_audio").hide();
      // $("#attention_check").hide();
      // $("#speakerutt").hide();
      // $("#done_check").hide();
      $("#error_check").hide();
      $("#perception").hide();
      $("#done_percept").hide();
      $("#error_percept").hide();
      $("#audio_container").hide();
      $("#attention_check").data("dont-show", false);
      $("input[type=radio]").attr("checked", null);
      $("textarea").val("");

      // $("#audio_src_ogg").attr("src", 'audio/'+ stim.audio + '.ogg');//XXX
      // $("#audio_src_wav").attr("src", 'audio/strenuous-RFR.wav');//XXX
      // $("#audio_src_ogg").attr("src", 'audio/'+ stim.audio + '.ogg');//XXX
      $("#audio_src_wav").attr("src", 'audio/'+ stim.audio + "-" + stim.pcondition + '.wav');

      var context = stim.context; 
      var question = stim.question; 
      var speakerutt = stim.speakerutt; 
      var exchange = stim.exchange; 
      var responsequestion = stim.responsequestion;// +"<br>Please adjust the slider to indicate your answer.";
      
      $("#context").html(context);
      $("#question").html(question);
      $("#speakerutt").html(speakerutt);
      $("#exchange").html(exchange);
      $("#responsequestion").html(responsequestion);


      $("#firstpart").show();

      // $("#radio_1").val(this.stim.topics[0]);
      // $("#radio_2").val(this.stim.topics[1]);


      
      //this.sentences = ["Speaker 2 agrees with Speaker 1","Speaker 2 disagrees with Speaker 1","Speaker 2 likes the " + this.stim.topic,"Speaker 2 dislikes the " + this.stim.topic,"Speaker 2 is happy","Speaker 2 is unhappy"];
      //this.sentences = _.shuffle([["Speaker 2 disagrees with Speaker 1","Speaker 2 agrees with Speaker 1"],["Speaker 2 dislikes the " + this.stim.topic, "Speaker 2 likes the " + this.stim.topic],["Speaker 2 is unhappy", "Speaker 2 is happy"]]);


    },

   


   init_sliders : function() {
      utils.make_slider("#single_slider", function(event, ui) {
        exp.sliderPost = ui.value;
        //$("#number_guess").html(Math.round(ui.value*N));
      });
    },
    

    // //SECOND BUTTON: CHECK THAT THEY SELECT THE CORRECT ATTENTION CHECK ANSWER
    button_check : function() {
      // function check_check(){
      var checked_radio  = $('input[name="audio"]:checked');

      //this.response  = true;
      if (checked_radio == undefined  || checked_radio.val() != this.stim.rightanswer) { 
     //if (this.response == false) {
        $("#error_check").show();
        if (checked_radio.val() != this.stim.rightanswer) { 
          this.not_paid_attention = true;
        }
      } else { 
        this.pre_check_response = checked_radio.val();
        $("#perception").show();
        $("#audio_container").show();
        $("#done_percept").show();
        $("#firstpart").hide();
        // $("#question").hide();
        // $("#attention_fill").hide();
        // $("#done_check").hide();
        // $("#error_check").hide();
        // $("#attention_check").hide();
        $("#attention_check").data("dont-show", true);

        $("#audio_player").load();
        $("#audio_player").trigger("play");
        this.init_sliders();
        
      };
    },

    // //THIRD BUTTON: CHECK THAT THEY MOVED ALL SLIDERS
    button_percept : function() {
    if (exp.sliderPost > -1 && exp.sliderPost < 16) {
        $("#error_percept").hide();
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      } else {
        $("#error_percept").show();
      }

    },

    log_responses : function() {

      exp.data_trials.push({
          "condition_prosody": this.stim.pcondition,
          "condition_knowledge": this.stim.kcondition,
          "adjective" : this.stim.audio,
          "not_paid_attention": this.not_paid_attention,
          "pre_check_response": this.pre_check_response,
          "time": (new Date()) - this.trial_start,
          "response": exp.sliderPost,
          "num_plays": $("#audio_player").data("num-plays")
        });
    }

  });



  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "hit_information" : exp.hit_data,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

  function makeStim(rawstim,cond) {
    var stim = {
      audio: rawstim.audio,
      question: rawstim.question,
      speakerutt: rawstim.speakerutt,
      exchange: rawstim.exchange,
      responsequestion: rawstim.responsequestion
    };
    stim.pcondition = cond[0];
    stim.kcondition = cond[1];
    if (cond[1] == "knowledgeable") {
      stim.rightanswer = "yes";
      stim.context = rawstim.kcontext;
    } else {
        stim.rightanswer = "no";
        stim.context = rawstim.icontext;
    }
    exp.all_stims.push(stim);
  }

/// init ///
function init() {
  var conditions = [["RFR","knowledgeable"]];//,["RFR","ignorant"]];//_.shuffle(["RFR","neutral","filler"]);
  exp.all_stims = [];
  exp.data_trials = [];

  var stims = _.shuffle(stimuli); //can randomize between subject conditions here
  
  for (j = 0; j< conditions.length; j++) {
    makeStim(stims[j],conditions[j]);
  }

  console.log(exp.all_stims);
 
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["i0", "instructions", "trial", "subj_info", "thanks"];

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything



  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  $("#audio_player").bind("ended", function () {
        // if (! $("#attention_check").data("dont-show")) {
          // $("#attention_check").show();
          
        // }
        $("#audio_player").data("num-plays", $("#audio_player").data("num-plays") + 1);

      });

  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
