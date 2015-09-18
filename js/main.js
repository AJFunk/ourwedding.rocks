/* ===================================================
                  preloader
=======================================================*/

if( device.tablet() && device.mobile() ) {
            
    window.addEventListener("DOMContentLoaded", function() {
        $("body").queryLoader2({
              minimumTime: 500,
              showbar: true,                 
              barColor: "#fff",
              textColor: "#000;",
              backgroundColor: "#ff9192",
              barHeight: '10',
              percentage: true,                       
              completeAnimation: "fade",
              onComplete: function() {
                  $(".bghide").fadeOut("fast", "easeInSine", function(){
                    $(this).remove();
                  }); 
                  }
            
        });
    });
    
} else {
    $(document).ready(function() {
        $("body").queryLoader2({
            minimumTime: 500,
            showbar: true,                 
            barColor: "#fff",
            textColor: "#000;",
            backgroundColor: "#ff9192",
            barHeight: '10',
            percentage: true,                       
            completeAnimation: "fade",
            onComplete: function() {
                $(".bghide").fadeOut("fast", "easeInSine", function(){
                    $(this).remove();
                }); 
             }
        
        });

        /* ===================================================
            add fakeheight and hide classes
        ======================================================= */ 
        //$('.home .groommom, .home .groomdad, .home .theyear .post, .home .bridemom, .home .thebride, .home .bridedad, .home .thegroom, .home #weddinglocation .location, .home .hotels, .home .attractions, .home #blog2 .container .row, .home .registry, .home .donation').addClass('fakeheight');
        //$('.home .groommom > div, .home .groomdad > div, .home .groomsmaid > div, .home .thegroom > div, .home .bridemom > div, .home .bridedad > div, .home .bridesmaid > div, .home .thebride > div, .home .location .thelocation, .home .hotels .row, .home .attractions >div, .home .section-overlay .row > header, .home .couple-photos .round-frame-bg, .home .hearts, .home .post .post-content, .home #blog2 .post, .home .registry .container, .home .donation .container').addClass('hide');

    });
    
};


$(document).ready(function() {

    $('.expandable').readmore();

/* ===================================================
          RSVP form
=======================================================*/

    $(".border .row > div").click(function(){
                    
        var eventValue = $(this).find("h5").text();
        var theID = $(this).find("h5").attr('class');
        
        var eventParticipating = "<div class='eventTag'><label class='checkbox-inline' for='"+theID+"'><input type='checkbox' checked='checked' id='"+theID+"' name='event[]' value='"+eventValue+"'>"+eventValue+"</label><span class='remove'>x</span></div>";  

        var currentCheckbox = $('input#'+theID);
        var n = currentCheckbox.length;
        
        if (n == 0) {
           $( eventParticipating ).appendTo( $( "#thecheckboxes" ) );
        }  
                
        $('.remove').click(function(){
            $(this).parent().remove();
            
        });
    });


/* ===================================================
                  "collapse mobile menu after click"
=======================================================*/
if( device.tablet() && device.mobile() ) {
    $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
    });
}




/* ===================================================
            initialize the flexslider
======================================================= */  

  $('.flexslider').flexslider({
        animation: "fade",
        smoothHeight: false,
    });
  

/* ===================================================
            set the megafolio
======================================================= */ 

    var api=jQuery('.megafolio-container').megafoliopro(
    {
        filterChangeAnimation:"rotatescale",
        filterChangeSpeed:600,
        filterChangeRotate:99,
        filterChangeScale:0.6,          
        delay:20,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[0]
     });

    var api2=jQuery('.megafolio-container2').megafoliopro(
    {
        filterChangeAnimation:"rotatescale",
        filterChangeSpeed:600,
        filterChangeRotate:99,
        filterChangeScale:0.6,          
        delay:20,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[13]
     });

    var api3=jQuery('.megafolio-container3').megafoliopro(
    {
        filterChangeAnimation:"scale",          // fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
        filterChangeSpeed:400,                  // Speed of Transition
        filterChangeRotate:99,                  // If you ue scalerotate or rotate you can set the rotation (99 = random !!)
        filterChangeScale:0.6,                  // Scale Animation Endparameter
        delay:20,
        defaultWidth:980,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[2]      // Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.
     });

      // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
    $('#gallery1 .filter').click(function() {            
        api.megafilter(jQuery(this).data('category'));  
        $.waypoints('refresh');
    });

    // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
    $('#blog1 .filter').click(function() {            
        api3.megafilter(jQuery(this).data('category'));  
        $.waypoints('refresh');
    });

    // THE FANCYBOX PLUGIN INITALISATION
    $(".fancybox").fancybox({
         openEffect  : 'none',
         closeEffect : 'none',
         helpers : {
                     media : {}
                    }
    });

    // ADD/REMOVE the class "selected" from the gallery filters
    $('.filter-list li').click(function(){
        $('.filter-list li').each(function() { 
            $(this).removeClass("selected")
        });
        $(this).addClass("selected");
    });


         
});

$(window).load(function(){



/* ===================================================
                  parallax effects
=======================================================*/

    // if( !device.tablet() && !device.mobile() ) {
    //     $('#ourstoryphoto').parallax("50%", 0.1); 
    //     $('#thebridesidephoto').parallax("50%", 0.1); 
    //     $('#thegroomsidephoto').parallax("50%", 0.18);
    //     $('#weddinglocationphoto').parallax("50%", 0.1);
    //     $('#blog1photo').parallax("50%", 0.1);
    //     $('#blog2photo').parallax("50%", 0.1);
    //     $('#gallery1photo').parallax("50%", 0.1);
    //     $('#gallery2photo').parallax("50%", 0.1);
    //     $('#registryphoto').parallax("50%", 0.1);
    //     $('#guestbookphoto').parallax("50%", 0.1);
    //     $('#rsvpphoto').parallax("50%", 0.1);
    //     $('.parallax-elements').parallax("50%", 0.4);
    

    // $('.parallax-hook').each(function(index, element) {
    //     $(this).addClass('bgfixed');
    // });
    // } 


    function bgAdjust(){  
        $('#ourstoryphoto').css('background-attachment', 'scroll'); 
        $('#thebridesidephoto').css('background-attachment', 'scroll'); 
        $('#thegroomsidephoto').css('background-attachment', 'scroll');
        $('#weddinglocationphoto').css('background-attachment', 'scroll');
        $('#blog1photo').css('background-attachment', 'scroll');
        $('#blog2photo').css('background-attachment', 'scroll');
        $('#gallery1photo').css('background-attachment', 'scroll');
        $('#gallery2photo').css('background-attachment', 'scroll');
        $('#registryphoto').css('background-attachment', 'scroll');
        $('#guestbookphoto').css('background-attachment', 'scroll');
        $('#rsvpphoto').css('background-attachment', 'scroll');
        $('.parallax-elements').css('background-attachment', 'scroll');  
    }

        window.ondevicemotion = function(event) {
            if (navigator.platform.indexOf("iPad") != -1) {
                bgAdjust();
            }
            window.ondevicemotion = null;
        }

    function mobileAdjust(){
    //Check for mobile
    window.mobilecheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check; }

        var mobile = window.mobilecheck();
        if(mobile == true){
          bgAdjust();
          $('#map').hide();
        } 
    }

    $(document).ready(function() {
        mobileAdjust();
    });
/* ===================================================
            initialize the one page scroll 
=======================================================*/
  
    $(".navbar-collapse ul li a[href^='#'], #home .col-md-12 a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // store hash
       var hash = this.hash;

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top,

         }, 1000, 'easeInQuart', function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = hash;
         });

    });


/* ===================================================
            set the waypoints
======================================================= */ 
  
    if( !device.tablet() && !device.mobile() ) {

        // waypoint to the slider names
        $('.navbar').waypoint(function(){
            //$('.names').removeClass('hide');
            //$('.names').addClass('animated fadeInUp');
        }, { offset: 60 });

        //WAYPOINTS to the sections HEADERS

            // waypoint to the 'our story' section
            $('#ourstory').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'the bride's side' section
            $('#thebrideside').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');        
            }, { offset: '10%' });

            // waypoint to the 'the groom's side' section
            $('#thegroomside').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'the wedding location' section
            $('#weddinglocation').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'blog version 1' section
            $('#blog1').waypoint(function() {
               // $(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'blog version 2' section
            $('#blog2').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'gallery version 1' section
            $('#gallery1').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'gallery version 2' section
            $('#gallery2').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'registry' section
            $('#registry').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'guestbook' section
            $('#guestbook').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });

            // waypoint to the 'rsvp' section
            $('#rsvp').waypoint(function() {
                //$(this).find('header').removeClass('hide').addClass('animated fadeIn');
            }, { offset: '10%' });


        //WAYPOINTS to the sections different PARTS

            // waypoint for "our story" section
            $('#ourstoryphoto').waypoint(function() {
                //$('.bride .round-frame-bg, .groom .round-frame-bg, .hearts').removeClass('hide');
                //$('.bride').addClass('animated fadeInLeft');
                //$('.groom').addClass('animated fadeInRight');
                //$('.hearts').addClass('animated fadeIn');  
            });

            // intermediary waypoint for "our story" section
            $('#ourstory .intermediary-waypoint').waypoint(function() {
                //$('.post').removeClass('fakeheight');
                //$('.odd .post-content, .even .post-content').removeClass('hide');
                //$('.odd .post-content').addClass('animated fadeInLeft');
                //$('.even .post-content').addClass('animated fadeInRight');
            }, { offset: -100 });


            // waypoint for "the bride side" section
            $('#thebridesidephoto').waypoint(function() {
               //$('.bridemom, .bridedad, .thebride').removeClass('fakeheight');
                //$('.bridemom > div, .bridedad > div, .thebride > div').removeClass('hide');
                //$('.thebride').addClass('animated fadeIn');
                //$('.bridemom').addClass('animated slideInLeft');
                //$('.bridedad').addClass('animated slideInRight');

            }, { offset: -450 });

            $('#thebrideside .intermediary-waypoint').waypoint(function() {
               //$('.bridesmaid > div').removeClass('hide');
                //$('.bridesmaid:eq( 1 )').addClass('animated fadeIn');
                //$('.bridesmaid:eq( 0 )').addClass('animated slideInLeft');
                //$('.bridesmaid:eq( 2 )').addClass('animated slideInRight');
            }, { offset: -450 });

            // waypoint for "the groom side" section
            $('#thegroomsidephoto').waypoint(function() {
               //$('.groommom, .groomdad, .thegroom').removeClass('fakeheight');
                //$('.groommom > div, .groomdad > div, .thegroom > div').removeClass('hide');
               // $('.thegroom').addClass('animated fadeIn');
               // $('.groommom').addClass('animated slideInLeft');
               // $('.groomdad').addClass('animated slideInRight');

            }, { offset: -450 });
        
            $('#thegroomside .intermediary-waypoint').waypoint(function() {
              // $('.groomsmaid > div').removeClass('hide');
               // $('.groomsmaid:eq( 1 )').addClass('animated fadeIn');
               // $('.groomsmaid:eq( 0 )').addClass('animated slideInLeft');
               // $('.groomsmaid:eq( 2 )').addClass('animated slideInRight');
            }, { offset: -450 });

            // waypoint for "the ceremony location" section
            $('#weddinglocationphoto').waypoint(function() {
               // $('.location, .hotels, .attractions').removeClass('fakeheight');
               // $('.location .thelocation, .hotels .row, .attractions .row').removeClass('hide');
               // $('.location .thelocation, .hotels .row, .attractions .row').addClass('animated fadeInUp');

            }, { offset: -450 });


            // waypoint for "the ceremony location" section
            $('#registryphoto').waypoint(function() {
                //$('.registry').removeClass('fakeheight');
                //$('.registry .container').removeClass('hide');
                //$('.registry').addClass('animated fadeInRight');

            }, { offset: -450 });

            // waypoint for "the ceremony location" section
            $('#registry .intermediary-waypoint').waypoint(function() {
                //$('.donation').removeClass('fakeheight');
                //$('.donation .container').removeClass('hide');
                //$('.donation').addClass('animated fadeInLeft');

            }, { offset: -450 });

    }else{

        $('header, div').removeClass('hide');
        $('div').removeClass('fakeheight');

    }

/* ===================================================
            TABS
======================================================= */ 
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

/* ===================================================
            jquery for the RSVP form:
======================================================= */
    $('#send_message').click(function(e){
            
            //stop the form from being submitted
            e.preventDefault();
            
            /* declare the variables, var error is the variable that we use on the end
            to determine if there was an error or not */
            var error = false;
            var name = $('#rsvp-name').val();
            var email = $('#rsvp-email').val();
            
            var message = $('#rsvp-message').val();
            
            if(name.length == 0){
                var error = true;
                //$('#name_error').fadeIn(500);
                $('#rsvp-name').addClass('notcompleted');
                $('#rsvp-name').attr('placeholder', 'Name is required!');
                $('#rsvp-name').focus (function(){
                    $(this).removeClass('notcompleted');
                });
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
               // $('#email_error').fadeIn(500);
                $('#rsvp-email').addClass('notcompleted');
                $('#rsvp-email').attr('placeholder', 'Email is required!');
                $('#rsvp-email').focus (function(){
                    $(this).removeClass('notcompleted');
                });
            }
            
            if(message.length == 0){
                var error = true;
                $('#rsvp-message').addClass('notcompleted');
                $('#rsvp-message').attr('placeholder', 'Please leave us a message!');
                $('#rsvp-message').focus (function(){
                    $(this).removeClass('notcompleted');
                });
            }
            
            //now when the validation is done we check if the error variable is false (no errors)
            if(error == false){
                //disable the submit button to avoid spamming
                //and change the button text to Sending...
                $('#send_message').attr({'value' : 'Sending...' });
                
                /* using the jquery's post(ajax) function and a lifesaver
                function serialize() which gets all the data from the form
                we submit it to send_email.php */
                $.post("send_rsvp.php", $("#rsvpform").serialize(),function(result){
                    //and after the ajax request ends we check the text returned
                    if(result == 'sent'){
                        //if the mail is sent remove the submit paragraph
                         $('#cf_submit_p').remove();
                        //and show the mail success div with fadeIn
                        $('#mail_success').fadeIn(500);
                    }else{
                        //show the mail failed div
                        $('#mail_fail').fadeIn(500);
                        //reenable the submit button by removing attribute disabled and change the text back to Send The Message
                        $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        }); 


/* ===================================================
            jquery for the "contact us" form:
======================================================= */

    $('#send_contact_message').click(function(e){
        
        //stop the form from being submitted
        e.preventDefault();
        
        /* declare the variables, var error is the variable that we use on the end
        to determine if there was an error or not */
        var error = false;
        var name = $('#contactname').val();
        var email = $('#contactemail').val();
        
        var message = $('#contactmessage').val();
        
        if(name.length == 0){
            var error = true;
            //$('#name_error').fadeIn(500);
            $('#contactname').addClass('notcompleted');
            $('#contactname').attr('placeholder', 'Name is required!');
            $('#contactname').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        if(email.length == 0 || email.indexOf('@') == '-1'){
            var error = true;
           // $('#email_error').fadeIn(500);
            $('#contactemail').addClass('notcompleted');
            $('#contactemail').attr('placeholder', 'Email is required!');
            $('#contactemail').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        
        if(message.length == 0){
            var error = true;
            $('#contactmessage').addClass('notcompleted');
            $('#contactmessage').attr('placeholder', 'Please leave us a message!');
            $('#contactmessage').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        
        //now when the validation is done we check if the error variable is false (no errors)
        if(error == false){
            //disable the submit button to avoid spamming
            //and change the button text to Sending...
            $('#send_contact_message').attr({'value' : 'Sending...' });
            
            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            $.post("send_mail.php", $("#contactus").serialize(),function(result){
                //and after the ajax request ends we check the text returned
                if(result == 'sent'){
                    //if the mail is sent remove the submit paragraph
                     $('#cf_submit_m').remove();
                    //and show the mail success div with fadeIn
                    $('#contact_success').fadeIn(500);
                }else{
                    //show the mail failed div
                    $('#contact_fail').fadeIn(500);
                    //reenable the submit button by removing attribute disabled and change the text back to Send The Message
                    $('#send_contact_message').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    }); 

    /* ===================================================
            jquery for the "guest book" form:
======================================================= */

    $('#send_guestbook').click(function(e){
        
        //stop the form from being submitted
        e.preventDefault();
        
        /* declare the variables, var error is the variable that we use on the end
        to determine if there was an error or not */
        var guesterror = false;
        var guestname = $('#guest-name').val();
        var guestemail = $('#guest-email').val();
        var guestmessage = $('#guest-message').val();
        
        if(guestname.length == 0){
            var guesterror = true;
            //$('#name_error').fadeIn(500);
            $('#guest-name').addClass('notcompleted');
            $('#guest-name').attr('placeholder', 'Name is required!');
            $('#guest-name').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        if(guestemail.length == 0 || guestemail.indexOf('@') == '-1'){
            var guesterror = true;
           // $('#email_error').fadeIn(500);
            $('#guest-email').addClass('notcompleted');
            $('#guest-email').attr('placeholder', 'Email is required!');
            $('#guest-email').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        
        if(guestmessage.length == 0){
            var guesterror = true;
            $('#guest-message').addClass('notcompleted');
            $('#guest-message').attr('placeholder', 'Please leave us a message!');
            $('#guest-message').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        
        //now when the validation is done we check if the error variable is false (no errors)
        if(guesterror == false){
            //disable the submit button to avoid spamming
            //and change the button text to Sending...
            $('#send_guestbook').attr({'value' : 'Sending...' });
            
            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            $.post("sign_guestbook.php", $("#signguestbook").serialize(),function(guestresult){
                //and after the ajax request ends we check the text returned
                if(guestresult == 'sent'){
                    //if the mail is sent remove the submit paragraph
                     $('#gb_submit_m').remove();
                    //and show the mail success div with fadeIn
                    $('#guestbook_success').fadeIn(500);
                }else{
                    //show the mail failed div
                    $('#guestbook_fail').fadeIn(500);
                    //reenable the submit button by removing attribute disabled and change the text back to Send The Message
                    $('#send_guestbook').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    });       
});