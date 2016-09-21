

function initEvents(){
   frmIdeal.btnSave.onClick=function(){
       var questionSegment = frmIdeal.segLeftQues.selectedIndex;
       var subQuestionSegment=frmIdeal.segRightQues.selectedIndices;
       kony.store.setItem("questionIndex",questionSegment);
       kony.store.setItem("subQuestionIndex",subQuestionSegment);  
   }
}

function highLightRows(){
         var questionIndex = kony.store.getItem("questionIndex");
         var subQuestionIndices=kony.store.getItem("subQuestionIndex");
         if(questionIndex!=null || subQuestionIndices!=null){ 
	           frmIdeal.segLeftQues.selectedIndex = questionIndex;
	           frmIdeal.segRightQues.selectedIndices=subQuestionIndices;     
         }       
}





