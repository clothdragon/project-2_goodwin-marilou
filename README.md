# Project 2 - Your Daily Circus

#### Link to repository
[Project 2 github link](https://github.com/clothdragon/project-2_goodwin-marilou)

#### Link to website
[YDC Website Link](http://marilougoodwin.com/project-2_goodwin-marilou/)

#### Link to W3C's Validator
[W3C Validator Link](https://validator.w3.org/)

#### Link to HTML5 Outliner
[HTML5 Outliner](https://gsnedders.html5.org/outliner/)

#### Instructions on how to view
1. `git clone` the repository to view it locally.
2. Use `sass --watch sass:css --style compressed` to get sass started.

---

#### Resources

* [Reminder on flexbox codes](https://www.w3schools.com/css/css3_flexbox.asp)
* [Reminder on grid codes](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Reminder on modals - used on index page, sign in buttons](https://www.w3schools.com/howto/howto_css_modals.asp)


##### Custom jQuery

Used on index page social media buttons and close button hover for modal

```$(".social").hover(function(){
  $(this).toggleClass("social--hover");
  });
$(".close").hover(function(){
  $(this).css('color', 'green').css('font-weight', 'bold')
  });```

##### Custom javaScript

Used on modal for index page

```var modal = document.getElementById('signInModal');
var sinButton = document.getElementById('signinButton');
var closeButton = document.getElementsByClassName("close")[0];
sinButton.onclick = function() {
  modal.style.display = "block";
}
closeButton.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}```

##### Plugin 1

* [Magnification jquery plugin on index page](https://www.jqueryscript.net/zoom/Magnify-Image-On-Hover-Magnifier.html)

##### Plugin 2

* [Tabs jquery plugin on about page](https://www.jqueryscript.net/other/Tiny-Adaptive-Tabbed-Interface-Plugin-With-jQuery-Organic-Tabs.html)

#### Deductions
I have reviewed the list of deductions for this project and in the syllabus.

#### Comments
Usually, I would fiddle with this forever until it was exactly right - the display at least, if not the code formatting - but I can't this time. I need to have my entire 4-person house packed by Saturday and while it hurts me to do the minimum on a project, I can't miss that deadline.

---
