function scrollTitle() {
    document.querySelector("#title").scrollIntoView({behavior:"smooth"})
    
}

function scrollSkill(){
     document.querySelector("#Skills").scrollIntoView({behavior:"smooth", block:"end"});
}
function scrollProject(){
    $("nav-project").click(function() {
        $('html,body').animate({
            scrollTop: $("#projects").offset().top},
            'slow');
    });}
function scrollContact(params) {
    document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
}

$(function(){
    $(".enlarge").click(function() {
        $(".modal-zoom").attr("src", $(this).find("img").attr('src'))
    })
})

$(".editmodal").click((e) =>{
    let idbtn = e.target.id
    console.log(idbtn);
    switch (idbtn) {
        case "covid":
            $(".modal-title-mini").text("COVID 19 Cases")
            $(".modal-body-mini").text("A web that gets API from COVID 19 API and display the current info of COVID casualty numbers. Made with Nodejs, bootstrap, and jquery. Link Below")
            $(".btn-link").attr('href', "https://covid-cases.glitch.me/" );
          break;
        case "mailchimp" :
            $(".modal-title-mini").text("MailChimp POST API")
            $(".modal-body-mini").text("A webpage that able to input your email to MailChimp API currently connected to my account.Made with Nodejs, bootstrap, and jquery Link Below. ")
            $(".btn-link").attr('href', "https://mailchimp-getter.glitch.me/" );
            break;
        case "laravel" :
            $(".modal-title-mini").text("Laravel CRUD")
            $(".modal-body-mini").text("A Simple CRUD app made with Laravel and pagination" )
            $(".btn-link").attr('href', "https://nutechikram.000webhostapp.com" );
        default:
            break;
    }
})


var modal = document.getElementById("image-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

$(".modal-image").click((e) =>{
    
    let imagesrc = e.target.src
    console.log(imagesrc);
    $("#image-modal").css("display", "block");
    $("#img01").attr("src", imagesrc);


})
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-img")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    console.log("clicked")
    $("#image-modal").css("display", "none");
} 
