var Bookmark = document.getElementById ('Bookmark Name');
var WebsiteURL =  document.getElementById('WebsiteURL');
let pup =document.getElementById('pup')



var productconteine ;
 if (localStorage.getItem('myproduct') !=null) {
    productconteine = JSON.parse(localStorage.getItem('myproduct'))
    disblay(productconteine); 
    
 }else{
    productconteine=[]
 }



var productconteine = []
function text() {
    var product = {
       
        Bookmark : Bookmark.value,
        WebsiteURL : WebsiteURL.value,
    }
   if (validate(product)) {

    console.log(product);
    disblay(productconteine);
    clear()
    productconteine.push(product);
   console.log(product);
   disblay(productconteine);
    
    localStorage.setItem('myproduct' , JSON.stringify(productconteine));
    
   }
    else{
      pup.classList.add("open-pup")
    
    }
    
    
    }
    

    function clear(){
      Bookmark.value=''
      WebsiteURL.value=''
      
    }
    
    
    function disblay(productconteine)
     {
    
        var y =``;
        for(var i=0 ; i < productconteine.length ; i++){
    
    var productindex = i +1;

    y +=`
    <tr>
    
      <td>${productindex}</td>
      <td>`+ productconteine[i].Bookmark+`</td>
      <td><button onclick="visitBook(${i})"  class="btn btn-success pe-3 ps-3">

                    <i class="fa-solid fa-eye me-2"></i>
                    Visit</button></td>
      <td><button onclick="Deletprodct(${i})" class="btn btn-danger pe-3 ps-3">

        <i class="fa-solid fa-trash me-2 "></i>
        
        
        Delet</button></td>

    
    
      </tr>
    
    `
     
      
        }
        tbody.innerHTML=y

        
    }
    function Deletprodct(DeletIndex) {
      productconteine.splice(DeletIndex , 1);
      console.log(productconteine);
      localStorage.setItem('myproduct' , JSON.stringify(productconteine));
      disblay(productconteine);
    }

    function visitBook(index) {
      var url = productconteine[index].WebsiteURL;
      localStorage.setItem('myproduct',JSON.stringify(productconteine));
      window.open(url, '_blank');
  }
  function validate(product) {
    var x =  /^[a-z,A-Z,1-9]{3}/; 
    if (x.test(product.Bookmark)) {
      return true
    }
    else{
      return false

     

    }
  }
 function rem() {
  pup.classList.remove("open-pup")
 }
  
  