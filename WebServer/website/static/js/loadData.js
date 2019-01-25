// Load data for sidebar
loadDataSideBar();


// load data for Post
loadPostData();

// Load data for mainContent
loadDataMainContent();



addService();

// load sidebar data
function loadDataSideBar() {
	

	var item = ["Multithread", "Java", "polymorphisam", "OOP","Big data","hadoop","linux","ssh",
	"linux command","Android","Maven","Jenkin","Kafka","Tomcat","Apple","IOS","Class","Fragment","Iot","Virus","Process","Window Command","zip file","class java"];

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
	 }

function loadDataMainContent() {

    var div_main = document.getElementById('main_top');
	  div_main.innerHTML += getMainContent();
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
                author:result[i].author, date:result[i].timestamp});
               }
  
              }
          }, error: function(result) {
                console.log('Error during fetching main data loadPostData() in loadData')
          }

        });

}