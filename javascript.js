    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
function func1(){
          
            var n=$("#name1").val();
            var e=$("#email1").val();
            var p=$("#phone1").val();
            var x= "hello "+n+ " <br>"+ "email-id:" + e + " <br>"+ "phone:"+p;
         
            $("#put").html(x);
        
        }