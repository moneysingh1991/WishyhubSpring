

function main() {
   
}

/*
This function is when user select side item
*/
function selectSideMenu(val) {

     var title = document.getElementById("page_selection_title");
     title.innerHTML = val.innerHTML;
    
    //title.innerHTML = getContent(val.innerHTML.toUpperCase());

}


function getContent(val) {
    var item = {"ONE":"ONE page content","TWO":"TWO page content"};

    return item[val] ? item[val] : "Content" ;
}

/*
Dynamic search function for left side bar 
*/
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// this is content for footer
function getFooterContent() {
    return '<p align="center">Maninderpal Singh </p>';

}


// get current date
function getCurrentDate() {

  var item_Date = new Date();
    //item_Date.setDate(new Date().getDate());
    return  (item_Date.getMonth()+1) +'/'+ item_Date.getDay() +'/'+ item_Date.getFullYear();
  
}


// this function will get main content
function getMainContent(index) {

  if(!index) {
    index = 0;
  } 
   var image_link = "https://i.imgur.com/uFiL7hq.jpg";
    var item_desc = "This is item ";
     var item_title = "Introduction to programming"; 
     var item_Author= "Author: " +"Maninderpal Singh"; 
    var item_Date = getCurrentDate();

    var obj = [];
    obj.push({image_link:"https://i.imgur.com/uFiL7hq.jpg",
              item_desc:"This is item 1 ",
              item_title:"Introduction to programming",
              item_Author:"Author: " +"Maninderpal Singh", 
              item_Date:getCurrentDate()
    });

    obj.push({image_link:"https://i.imgur.com/uFiL7hq.jpg",
              item_desc:"This is item 2 ",
              item_title:"Introduction to JAVA",
              item_Author:"Author: " +"Gery Singh", 
              item_Date:getCurrentDate()
    });

  obj.push({image_link:"https://i.imgur.com/uFiL7hq.jpg",
              item_desc:"This is item 3 ",
              item_title:"Introduction to C++",
              item_Author:"Author: " +"AMAR Singh", 
              item_Date:getCurrentDate()
    });
    var stringRet = '';
    for(var i = 0; i < 1; i++) {
        stringRet = stringRet + createMainItem(obj[index]["image_link"],obj[index]["item_desc"], obj[index]["item_title"], obj[index]["item_Author"], obj[index]["item_Date"]);
    }

   
    return stringRet ;
}

// Create main  item

function createMainItem(image_link,item_desc, item_title, item_Author, item_Date) {
    stringRet =  '<div class="main_item">' 
    + '<div class="main_item_top1"> <div id="main_item_author"> '+item_Author+' </div> <div id="main_item_Date"> '+item_Date+'</div>  </div> '
    
    + '<div class="main_item_title">  '+item_title+' </div> '
    +' <div class="main_item_img_container"><img class="main_item_img" src='+image_link+' alt="Italian Trulli"></div> ' 
    + '<div class="main_item_content"> ' + item_desc + '</div>'
    + '<div class="main_item_top1"> <Button  class="main_item_Button id="main_item_edit" onclick="openPopup(modal_popup)"> Edit </Button></div> '
     + '<div class="main_item_top2"> <div class="main_item_div_left"> <Button class="main_item_Button id="main_item_Prev" onclick="goToPrev(modal_popup)"> Prev </Button> </div>  <div class="main_item_div_right"> <Button class="main_item_Button id="main_item_Prev" onclick="goToNext(modal_popup)"> Next </Button> </div></div> '
 + '</div>';
    return stringRet;
}

/*
Create Modal which shows in middle of screen

param1: modal-id , to create new modal always give unique id 
param2: modal content-id where u want to add content


*/

function createModal(modalId, modalContentId, modal_title) {
    var modal = '<div id= '+ modalId +' class="modal">'
    +'<div class="modal-content" >'
    +'<div class="container-verticle"> <div id= '+ modal_title +' style="float: left;" ></div>' 
    + ' <div  style="float: right;" ><button  class="button small"  onclick="close_popup('+modalId+')">Close</button></div>'
    + '</div>'
     +'<div id= '+ modalContentId +' class="container" > </div>'
      
    +'</div></div>';

    document.body.innerHTML += modal;
    
  }


/*
To add something in nav bar add in this function
return navigation content
*/

function getNavBarContent() {
    var navbar = '<a class="active" href="#home">Home</a>'+
    ' <div class="search-container"><form action="/action_page.php"><input type="text" placeholder="Search.." name="search">'+
      '<button type="submit"><i class="fa fa-search"></i> Search</button></form></div>'+
      '<div class="nav-menu">'+ 
      '<a href="#about">Project</a><a href="#about">About</a><a href="#contact">Contact</a></div>';
    return navbar;
}

// pop open based on param
// if param = "edit" then edit popup open
function openPopup(id) {


        var modal = document.getElementById(id.id);
        document.getElementById('modal-title').innerHTML = 'Edit Page';

        document.getElementById('modal-content-main').innerHTML = getEditPopupContent();
        
        modal.style.display = "block";
    
}

// this is login popup content
function getloginPopupContent() {
  loginPop =  '<div class="container"> <label for="uname"><b>Username</b></label>'
   + ' <input type="text" placeholder="Enter Username" name="uname" required>'

    + '<label for="psw"><b>Password</b></label> <input type="password" placeholder="Enter Password" name="psw" required>'
        
    + '<button class="button large" type="submit">Login</button>'
  + '  <label>  <input type="checkbox" checked="checked" name="remember"> Remember me </label>'
  + '</div>';

    return loginPop;
}

// this is create  or edit item content
function getEditPopupContent() {
  loginPop =  '<div> <label for="aname"><b>Author</b></label>'
   + ' <input type="text" placeholder="Enter Author Name" name="author_input" required>'

    + '<label for="title"><b>Title</b></label> <input type="text" placeholder="Enter title" name="title_input" required>'
    + '<div class = "padding-top-small"><label for="UploadImage"><b>Upload Image</b></label> <input type="file" placeholder="Enter title" name="UploadImage_input" required></div>'
    + '<div class = "padding-top-small"><textarea id = "textAreaid" class= "textArea" placeholder="Enter Code" name="textarea_input"> </textarea></div>'
    + '<div class = "padding-top-large"><button class="button medium fullwidth" onclick="itemSave()" type="submit">Save</button></div>'
 
  + '</div>';

    return loginPop;
}

// Save item on click on save
function itemSave() {
  
  var author = $("[name=author_input]").val();
  var title = $("[name=title_input]").val();
  var image =  $("[name=UploadImage_input]").val();
  var textArea =  $("[name=textarea_input]").val();


  $.ajax({
    type:"get",
    url: "http://localhost:8080/WebServer/post", 

    success: function(result){
        console.log(result);
    }

  });

}

// pop close based on param
// if param = "edit" then edit popup open
function close_popup(id) {
  
        var modal = document.getElementById(id.id);
         modal.style.display = "none";
    
}

function goToPrev(id) {
  var div_main = document.getElementById('main_top');
      div_main.innerHTML = getMainContent(1);
  
}


function goToNext(id) {
  var div_main = document.getElementById('main_top');
      div_main.innerHTML = getMainContent(1);
}




