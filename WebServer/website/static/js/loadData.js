


// load data for Post
loadPostData();

// Load data for sidebar
loadDataSideBar();
// Load data for mainContent
loadDataMainContent();


// add available service like (new post, upload) on the navigation bar 
addService();

// function to convert first char to capital of givin param
function firstCapconvert(string) {
  return  string.charAt(0).toUpperCase() + string.slice(1);
}
// load sidebar data
function loadDataSideBar() {
	
	var ul = document.getElementById("myMenu");

	for (let val of sidebar_items) {

		var li = document.createElement("li");
		var a = document.createElement("a");
	         //a.setAttribute("href", item[i]);
	         a.setAttribute("onclick", "selectSideMenu(this)");
	         a.appendChild(document.createTextNode(firstCapconvert(val)));
	         li.appendChild(a);
	         ul.appendChild(li);
	     }
	 }

function loadDataMainContent() {

    var div_main = document.getElementById('main_top');
	  // getMainContent();
    galleryView();
   
}

// load servies
function addService() {
   document.getElementById('addService').innerHTML = '<a onclick="uploadService()">Upload</a>'+
      '<a onclick="newPostService()">New Post</a>'+
      '<a onclick="browseService()">Browse</a>';
}

//load files into global array

function loadFileLinks() {
 
   $.ajax({
          type:"GET",
          url: global_site_domain+"/file/img/ALL",
          data:null,
          async:false,

          success: function(result){
              //console.log(result);

              for (var i = 0 ; i <result.length ; i++) {
                 gloabl_file_browse_array.push(global_site_domain+"/file/img?fileid=" + result[i].fileid);
                 
  
              }
          }, error: function(result) {
                console.log('Error during fetching main data loadFileLinks() in loadData')
          }

        });

}

//load files into global array

function loadPostData() {
 
   $.ajax({
          type:"GET",
          url: global_site_domain+"/post/all",
          data:null,
          async:false,

          success: function(result){
              //console.log(result);

              for (var i = 0 ; i <result.length ; i++) {
               if(result[i]) {              
                gloabl_array_item.push({id:result[i].postid, link:result[i].image,title: result[i].title, detail:result[i].text, 
                author:result[i].author, search:result[i].search,date:result[i].timestamp});

                var temp_search_arr = result[i].search;

                if(temp_search_arr != null) {
                var temp_search_arr = result[i].search.split(",");
                if(Array.isArray(temp_search_arr)) {
                     for (var j = 0 ; j <temp_search_arr.length ; j++) {
                         sidebar_items.add(temp_search_arr[j]);
                    }
                   
                } else if(temp_search_arr != null) {
                   sidebar_items.add(temp_search_arr);
                } 
               }
               }
  
              }
          }, error: function(result) {
                console.log('Error during fetching main data loadPostData() in loadData')
          }

        });

}