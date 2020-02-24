// $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {indicators:false});    
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });