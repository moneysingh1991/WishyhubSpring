
  //click on window event handler
// $(window).click(function(e) {
//   if(e.target.className != "dropdown") {
//     showService(0);
//   } else {
//       if(document.getElementById('addService').style.display === "block") {

//       }
//   }
   
// });

  $(document).ready(function(){
      $("button").change(function(){
          alert("The text has been changed.");
      });
      
  });

  document.getElementsByName("UploadFiles_input[]").onchange = function () {
      alert();
  };
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
  function searchFunction() {
      var input, input1, filter, ul, li, a, i;
      input = document.getElementById("mySearch");
      input1 = document.getElementById("id_main_search");
      if(input1.value.length > 0) {
        input = input1;
      }
      
      filter = input.value.toUpperCase();
      ul = document.getElementById("myMenu");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          
          if (li[i].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(filter) == 0) {
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

    if(gloabl_array_item.length < 1) {
        console.log('Data load error from getMainContent()');
        return '';
    }
    if(!index || index < 0 || index > gloabl_array_item.length -1) {
      index = 0;
    } 
   
      var stringRet = '';
      for(var i = 0; i < 1; i++) {
          stringRet = stringRet + createMainItem(gloabl_array_item[index]["link"],gloabl_array_item[index]["detail"], gloabl_array_item[index]["title"], gloabl_array_item[index]["author"], gloabl_array_item[index]["date"]);
      }

      return stringRet ;
  }



  /*
  This function will open edit pop up
  and fill info in all filed according to currect item open.

  */
  function editPopup(id) {
       document.getElementById('modal-title').innerHTML = 'Edit Page';

       var valueArr = {author:gloabl_array_item[global_item_index_Count]["author"],
       title:gloabl_array_item[global_item_index_Count]["title"],
       link:gloabl_array_item[global_item_index_Count]["link"],
       upload:gloabl_array_item[global_item_index_Count]["upload"],
       detail:gloabl_array_item[global_item_index_Count]["detail"]
      }
       document.getElementById('modal-content-main').innerHTML = getEditPopupContent(valueArr);

       openPopup(id);
  }

  /*
  11/01/2018
   Method to handle  event on pressing some key on textArea
   */

  function textareaKeydown() {

       var input = document.getElementById("textAreaid");
       var v = input.value;
       var s = input.selectionStart;
       var e = input.selectionEnd;

  // handling tab key press event
      if (event.keyCode===9) {

       v = v.substring(0, s)+'\t'+v.substring(e);

       helperTextAreaKeydown(input, v, s, event);

      } 
// handling "Enter" key press event
      else if (event.keyCode===13) {
          v = v.substring(0, s)+'\n'+v.substring(e);
  helperTextAreaKeydown(input, v, s, event);

      }

  }

// function to handle end of pree key event on text area
  function helperTextAreaKeydown(input, v, s, event) {
      input.value = v;
       input.selectionStart = s + 1;
       input.selectionEnd = s+1;
       event.preventDefault();
  }

  // Save item on click on save
  function itemSave(edit) {
    var updateflag = false;
    var author = $("[name=author_input]").val().trim();
    var title = $("[name=title_input]").val().trim();
    var link = $("[name=link_input]").val().trim();
    //var image =  $("[name=UploadImage_input[]]")[0].files;

    var uploadImage = document.getElementsByName("UploadImage_input[]");

    if(uploadImage.length > 0){
      var file = document.getElementsByName("UploadImage_input[]")[0].files;
    }
    
    var textArea =  $("[name=textarea_input]").val().trim();

    if( author == ""  || title == "" || textArea.length < 2) {
      alert("Enter all field mendatory filed");
      return;
    }

    var data = null;

// save clicked from edit box
    if(edit) {
          if (author != gloabl_array_item[global_item_index_Count].author || title != gloabl_array_item[global_item_index_Count].title || 
            link != gloabl_array_item[global_item_index_Count].link || textArea != gloabl_array_item[global_item_index_Count].detail ) {

            // something got changed in post 
          
             gloabl_array_item[global_item_index_Count] = {
                          id:gloabl_array_item[global_item_index_Count].id, 
                          link:link,
                          detail:textArea,
                          title:title,
                          author:author, 
                          date:getCurrentDate()
                };
                  data = {edit:edit,
                  id:gloabl_array_item[global_item_index_Count].id, 
                  author: author, 
                  title:title, 
                  link:link, 
                  image:file,
                  textArea:textArea};
             updateflag = true;
          } else {
              alert("Save Without change");
          }
    } 
// save clicked from new post box
    else {
       gloabl_array_item.push({link:link,
                detail:textArea,
                title:title,
                author:author, 
                date:getCurrentDate()
      });

       data = {edit:edit,id:-1, author: author, title:title, link:link, image:file, textArea:textArea};
       global_item_index_Count = gloabl_array_item.length -1;

       // to send data for new post
       updateflag = true;
    }

  
if(updateflag) {


    var response = ajaxRequest("post",global_site_domain + "/post/save",data, false);

    if(response.data.error == "success") {
        setMainContentInList();
      if(response.data.data && !isNaN(response.data.data)) {
       gloabl_array_item[global_item_index_Count].id = Number(response.data.data);
      }

    } else {
      console.log("Need to handle bad ajax request error");
      
      if (confirm("Server Error, You want to save Ofline") == true) {
          setMainContentInList();
      } 
    }
}
    //close popup with id = modal_pop
      close_popup({id:"modal_popup"});
  }

/*
This helper function will save update main item content 
*/
  function setMainContentInList() {
    var div_main = document.getElementById('main_top');
       
      if(gloabl_array_item.length > global_item_index_Count) {
             
                  div_main.innerHTML = getMainContent(global_item_index_Count);
            
        } else {
              alert("Index not valid")
        }   
  }

  /*
  Ajax request 
  return result 
  */
    function ajaxRequest(type,localUrl,data, async) {

      var finalResult = null;

      if(!(type || localUrl || data)) {
        console.log("One of the field is empty (type,url,data) in ajaxRequest() , home.js")
        return {error:true, data:""};
      }
       $.ajax({
          type:type,
          url: localUrl,
          data:data,
          async:async,

          success: function(result){
              //console.log(result);
          
              finalResult =  {error:false, data:result};
          }, error: function(result) {

            finalResult =  {error:true, data:result};
          }

        });

       return finalResult;
    }

  function upload() {
     
      var files = document.getElementsByName("UploadFiles_input[]")[0].files;
      var fileListDisplay = document.getElementById('file-list-display');
      
      fileListDisplay.innerHTML = '';
      var table = document.createElement('TABLE');
      var table_tr = document.createElement('TR');
      var table_td = document.createElement('TD');
      var table_th = document.createElement('TH');
      var node = document.createTextNode("File Name");
      
      table_tr.innerHTML = '<th>No</th> <th> Name </th> <th> Size </th> <th> Status </th>';

     // table_tr.appendChild(document.createElement('TH').appendChild(document.createTextNode("Size")));
      //table_tr.appendChild(document.createElement('TH').appendChild(document.createTextNode("Status")));
      table.appendChild(table_tr);
      
       fileListDisplay.appendChild(table);
     
      for (var i = 0; i < files.length; i++) {
      	sendFile(files[i],table);
      }
      document.getElementsByName("UploadFiles_input[]")[0].value = null
      global_total_uploaded_count= 1;
     
  }

  function sendFile(file, table) {
   console.log("uploading");
    var url = global_site_domain + "/upload";
    var formData = new FormData(file);
    formData.set('files', file);
     formData.append("extraField", "This is some extra data, testing");
    $.ajax({
      type:"post",
      enctype: 'multipart/form-data',
      url: url,
      data:formData,
      cache: false,
      contentType: false,
      processData: false,
      async:true,

       success: function(result){
          // comment hello
          console.log(result);
          var table_tr = document.createElement('TR');
          table_tr.innerHTML = '<td>'+  global_total_uploaded_count +'</td>';
          global_total_uploaded_count++;
          table_tr.innerHTML += '<td>'+  file.name +'</td>';
          table_tr.innerHTML += '<td>'+  Math.ceil(file.size/1024) +' KB</td>';
          table_tr.innerHTML += '<td> uploaded </td>';
          table.appendChild(table_tr);
       
      },
      error:function(result) {
        console.log("Error in file uploading");
          var table_tr = document.createElement('TR');
          table_tr.innerHTML = '<td>'+  global_total_uploaded_count +'</td>';
          global_total_uploaded_count++;
          table_tr.innerHTML += '<td>'+  file.name +'</td>';
          table_tr.innerHTML += '<td>'+  Math.ceil(file.size/1024) +' KB</td>';
          table_tr.innerHTML += '<td> Failed </td>';
          table.appendChild(table_tr);

      }

    });
    
    }

      // pop open based on param
  // if param = "edit" then edit popup open
  function openPopup(id) {
   
          var modal = document.getElementById(id.id);
          modal.style.display = "block";
    // disable window scrolling
          document.body.style.overflow = "hidden";
         
  }

  // pop close based on param
  // if param = "edit" then edit popup open
  function close_popup(id) {
    
          var modal = document.getElementById(id.id);
           if(modal) {
                 modal.style.display = "none";
           } else {
               console.log("close_pop() : id not exist");
           }
// enable window scrolling
           document.body.style.overflow = "visible";
             
  }


/*
Method for delete post
*/
function deletePost() {
  if(confirm("Are you Sure, You want to delete Post") ) {
    
    var data = {id: gloabl_array_item[global_item_index_Count].id};
    var response = ajaxRequest("POST",global_site_domain + "/post/delete",data, false);
    gloabl_array_item.splice(global_item_index_Count,1);

alert("Post deleted successfully");
    if(global_item_index_Count+1 <  gloabl_array_item.length ) {
      goToNext();
      
    } else if (global_item_index_Count-1 >  -1){
      goToPrev();
    }
  } 
}
  /*
  @param id

   function handle Go to Prev page functionality

  */

  function goToPrev(id) {
    var div_main = document.getElementById('main_top');
    if((global_item_index_Count - 1 > -1) && (global_item_index_Count - 1 < gloabl_array_item.length )) {

         global_item_index_Count -=1;
        div_main.innerHTML = getMainContent(global_item_index_Count);
       
        
    }  

    else {
      alert("No More Page")
    }
        
  }

  /*
  @param id

   function handle Go to next page functionality

  */
  function goToNext(id) {
    var div_main = document.getElementById('main_top');
   
    if(gloabl_array_item.length > global_item_index_Count + 1 && (-1 < global_item_index_Count + 1)) {
         global_item_index_Count +=1;
        div_main.innerHTML = getMainContent(global_item_index_Count);
        
    } else {
      alert("No More Page")
    }
  }


// Show Service dropdown on clcik
 function showService(args) {
 
       if(document.getElementById('addService').style.display === "block") {
        document.getElementById('addService').style.display = "none";
      } else {
        document.getElementById('addService').style.display = "block";
      }
 
  }




