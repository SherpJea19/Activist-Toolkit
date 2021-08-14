window.onload = function () 
{
var factList =["Cancer is a group of diseases characterized by uncontrolled growth and spread of abnormal cells. There are over 100 types of cancer, and any part of the body can be affected.","Childhood cancers account for 1 percent of all new cancer diagnoses. In 2018, about 15,590 children and teens ages (ages 0-19) were diagnosed with cancer. Although uncommon, cancer is the leading cause of death by disease in children.","Cancer is the second leading cause of death globally -- it accounts for 1 in 6 deaths around the world."];

var factText = document.getElementById("factText");
  var factButton = document.getElementById("factButton");
  var clickCount = 0;

  factButton.addEventListener("click", displayFact);

  function displayFact() 
  {
    console.log(clickCount);
    console.log(factList[clickCount]);
    factText.innerHTML = factList[clickCount];
    clickCount = clickCount + 1;
    if (clickCount == factList.length) 
    {
      clickCount = 0;
    }
  }
}