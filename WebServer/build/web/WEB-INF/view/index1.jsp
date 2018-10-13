<%-- 
    Document   : index1
    Created on : Oct 9, 2018, 11:33:13 PM
    Author     : maninderpal
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/nav.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/index.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/popup.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/class.css">
   
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!--   <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->
  <script src="${pageContext.request.contextPath}/resources/js/home.js"></script>
  <script src="${pageContext.request.contextPath}/resources/js/jQuery_method.js"></script>


  <meta name="viewport" content="width=device-width, initial-scale=1">

  </head>
  <body>

  <div id="idnavbar"class="topnav"></div>

  <script>


  // Maninder 10/3/2018 : Add navBar to div
  document.getElementById('idnavbar').innerHTML =  getNavBarContent();
  // Maninder 10/3/2018 : END Add navBar to div
  </script>


  <div id="parent">
  <div id="page_selection_title">Page Content</div>



  <div class="row">

    <div id="sidebar" class="left" >
      
      <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category">
      <ul id="myMenu">
        <!-- <li><a href="#">html</a></li> -->
       
      </ul>
    </div>
    
    <div id="main" class="right" ">

      <div id="main_top" >
      
     
    </div>

    </div>

   
  <!-- End of Row div -->
  </div>


  <!-- End of parent div -->
  </div>

  <div  class="footer" id="footer-placeholder"></div>

  <script>
      var div_main = document.getElementById('main_top');
      div_main.innerHTML += getMainContent();

      var item = ["Multithread", "Java", "polymorphisam", "object","big data","hadoop","linux","ssh","linux command","android"];

      var ul = document.getElementById("myMenu");

      for (var i = 0; i < item.length; i++) {
        
        var li = document.createElement("li");
        var a = document.createElement("a");
         //a.setAttribute("href", item[i]);
         a.setAttribute("onclick", "selectSideMenu(this)");
        a.appendChild(document.createTextNode(item[i]));
        li.appendChild(a);
        ul.appendChild(li);
      }

  </script>


  <script>
  var div = document.getElementById('footer-placeholder');

  div.innerHTML += getFooterContent();


  // create modal 
  createModal("modal_popup", "modal-content-main","modal-title") ;
  
  var data = ${message};
  console.log("Name : " + data['name'] + ", Age : " + data['age']);

  </script>


  </body>
  </html>