var domYes=document.getElementById?1:0;

function getElemById(id) {
	
	// help method to get an object by id, independent of the client's browser
	if (domYes) {
		return document.getElementById(id);
	} else {
		return document.all[id];
	}
}

function setChildListBox(parentObject, childObject, childArray) {

	if (childObject  && childObject.options) {
		// clear child listbox
		for(var i=childObject.length;i>0;i--) {
			childObject.options[i] = null;
		} 
		// add default value
		childObject.options[0] = new Option("Select Value","");
		
		// get select item
		var selIndex = parentObject.options[parentObject.selectedIndex].value;
		if (selIndex == "") {
			// if nothing selected, disable and hide child list box
			childObject.disabled = true;
			getElemById(childObject.id + "Display").style.display="none";
		} else {
			// fill the child list box with the associated items
			var childIndex = 1;
			for (i = 0; i < childArray.length; i++) {
				if (childArray[i][1] == selIndex) {
					childObject.options[childIndex] = new Option(childArray[i][2], childArray[i][0]);
					childIndex++;
				}
			}
			// if at least one item available
			if (childIndex > 1) {
				// display the child list box
			    childObject.disabled = false;
			    getElemById(childObject.id + "Display").style.display="";
	        }
		}
	
		// select the first option
		childObject.selectedIndex = 0;
		if (typeof(childObject.onChange) != "undefined") { 
			childObject.onchange();
		}
		
		// set the widget value
		setWidgetValue(childObject.id.substring(0, childObject.id.length - 6));
	}
}

/**
 * Esta funcion espera un array de la siguiente forma:
 * var aChildrens = [

	{"idParent" : "22e82f50-45e6-11de-bd49-dc8014ec3a6b", "nameParent" : "area1" , "idChild" : "22e85660-45e6-11de-bd49-7b334d7d6c89", "nameChild" : "materia11"},

   ];
 * @param parentObject
 * @param childObject
 * @param childArray
 * @return
 */
function setChildListBoxWithMessages(parentObject, childObject, childArray, messageDefault) {
	
	if (childObject  && childObject.options) {
		// clear child listbox
		for(var i=childObject.length;i>0;i--) {
			childObject.options[i] = null;
		} 
		// add default value
		childObject.options[0] = new Option(messageDefault,"");
		
		// get select item
		var selIndex = parentObject.options[parentObject.selectedIndex].value;
		if (selIndex == "") {
			// if nothing selected, disable and hide child list box
		} else {
			// fill the child list box with the associated items
			$.each(childArray, function(i, v) {
				if (v) {
					if (v.idParent == selIndex) {
						childObject.add(new Option(v.nameChild, v.idChild));
					}
				}
			});
		}
		if (childObject.length > 1) {		
			$(childObject).removeClass("oculto");
			$("label[for="+childObject.id+"]").removeClass("oculto");
		} else {
			$(childObject).addClass("oculto");
			$("label[for="+childObject.id+"]").addClass("oculto");
		}
	
		// select the first option
		childObject.selectedIndex = 0;
		if (typeof(childObject.onChange) != "undefined") { 
			childObject.onchange();
		}
		
		// set the widget value
		//setWidgetValue(childObject.id.substring(0, childObject.id.length - 6));
	}
}

/**
 * Esta funcion espera un array de la siguiente forma:
 * var aChildrens = [

	{"idParent" : "22e82f50-45e6-11de-bd49-dc8014ec3a6b", "nameParent" : "area1" , "idChild" : "22e85660-45e6-11de-bd49-7b334d7d6c89", "nameChild" : "materia11"},

   ];
   Si le llega el valor seleccionado igual a vacio ""
 * @param parentObject
 * @param childObject
 * @param childArray
 * @return
 */
function setChildListBoxWithMessagesAll(parentObject, childObject, childArray, messageDefault) {

	if (childObject  && childObject.options) {
		// clear child listbox
		for(var i=childObject.length;i>0;i--) {
			childObject.options[i] = null;
		} 
		// add default value
		childObject.options[0] = new Option(messageDefault,"");
		
		// get select item
		var selIndex = parentObject.options[parentObject.selectedIndex].value;
		var val = parentObject.options[parentObject.selectedIndex].text;
		
		// fill the child list box with the associated items
		var childIndex = 1;
		for (i = 0; i < childArray.length; i++) {
			//alert("childArray[i].nameParent.toUpperCase(): " + childArray[i].nameParent.toUpperCase());
			//alert("val.toUpperCase(): " + val.toUpperCase());
			if (childArray[i].nameParent.toUpperCase() == val.toUpperCase()) {
				childObject.options[childIndex] = new Option(childArray[i].nameChild, childArray[i].idChild);
				childIndex++;
			}
		}
	
		if (childObject.length > 1) {		
			$(childObject).removeClass("oculto");
			$("label[for="+childObject.id+"]").removeClass("oculto");
		} else {
			$(childObject).addClass("oculto");
			$("label[for="+childObject.id+"]").addClass("oculto");
		}
		
		// select the first option
		childObject.selectedIndex = 0;
		if (typeof(childObject.onChange) != "undefined") { 
			childObject.onchange();
		}
	}
	
}

/**
 * Esta funcion espera un array de la siguiente forma:
 * var aChildrens = [

	{"idParent" : "22e82f50-45e6-11de-bd49-dc8014ec3a6b", "nameParent" : "area1" , "idChild" : "22e85660-45e6-11de-bd49-7b334d7d6c89", "nameChild" : "materia11"},

   ];
 * @param parentUUID - parent seleccionado
 * @param childObject
 * @param childArray
 * @return
 */
function setChildListBoxParentSelected(parentUUID, childObject, childArray, messageDefault) {
	if (childObject.options){
		// clear child listbox
		for(var i=childObject.length;i>0;i--) {
			childObject.options[i] = null;
		} 
		// add default value
		childObject.options[0] = new Option(messageDefault,"");
		
		// get select item
		var selIndex = parentUUID;
		if (selIndex == "") {
			// if nothing selected, disable and hide child list box
	//		childObject.disabled = true;
	//		getElemById(childObject.id + "Display").style.display="none";
		} else {
			// fill the child list box with the associated items
			var childIndex = 1;
			for (i = 0; i < childArray.length; i++) {
				if (childArray[i].idParent == selIndex) {
					childObject.options[childIndex] = new Option(childArray[i].nameChild, childArray[i].idChild);
					childIndex++;
				}
			}
			// if at least one item available
	//		if (childIndex > 1) {
	//			//alert("Entra 3");
	//			// display the child list box
	//		    childObject.disabled = false;
	//		    getElemById(childObject.id + "Display").style.display="";
	//        }
		}
	
		// select the first option
		childObject.selectedIndex = 0;
		if(typeof childObject.change=='function'){
			childObject.change();
		}
		
		// set the widget value
		//setWidgetValue(childObject.id.substring(0, childObject.id.length - 6));
	}
}

/**
 * Esta funcion espera un array de la siguiente forma:
 * var aChildrens = [

	{"idParent" : "22e82f50-45e6-11de-bd49-dc8014ec3a6b", "nameParent" : "area1" , "idChild" : "22e85660-45e6-11de-bd49-7b334d7d6c89", "nameChild" : "materia11"},

   ];
 * @param parentUUID - parent seleccionado
 * @param childObject
 * @param childArray
 * @param childSelected id del hijo que se ha seleccionado si lo hubiera
 * @return
 */
function setChildListBoxChildSelected(parentUUID, childObject, childArray, messageDefault, childSelected) {
	if (childObject  && childObject.options) {
		// clear child listbox
		for(var i=childObject.length;i>0;i--) {
			childObject.options[i] = null;
		} 
		// add default value
		childObject.options[0] = new Option(messageDefault,"");
		
		// get select item
		var selIndex = parentUUID;
		var selectFirst = true;
		if (selIndex == "") {
			// if nothing selected, disable and hide child list box
	//		childObject.disabled = true;
	//		getElemById(childObject.id + "Display").style.display="none";
		} else {
			// fill the child list box with the associated items
			var childIndex = 1;
			for (i = 0; i < childArray.length; i++) {
				if (childArray[i].idParent == selIndex) {
					//childObject.options[childIndex] = new Option(childArray[i].nameChild, childArray[i].idChild);
					
					if(childSelected == childArray[i].idChild)
					{
						// Esta seleccionado
						//childObject.options[childIndex].selected = true;
						childObject.options[childIndex] = new Option(childArray[i].nameChild, childArray[i].idChild, true);
						selectFirst = false;
						childObject.selectedIndex = childIndex;		
					}else{
						childObject.options[childIndex] = new Option(childArray[i].nameChild, childArray[i].idChild);
					}	
					
					childIndex++;
				}
			}
			// if at least one item available
	//		if (childIndex > 1) {
	//			//alert("Entra 3");
	//			// display the child list box
	//		    childObject.disabled = false;
	//		    getElemById(childObject.id + "Display").style.display="";
	//        }
		}
	
		// select the first option
		if(selectFirst){
			childObject.selectedIndex = 0;		
		}
		if (typeof(childObject.onChange) != "undefined") { 
			childObject.onchange();
		}
		
		// set the widget value
		//setWidgetValue(childObject.id.substring(0, childObject.id.length - 6));
	}
}


/**
 * Esta funcion espera un array de la siguiente forma:
 * var aChildrens = [

	{"idParent" : "22e82f50-45e6-11de-bd49-dc8014ec3a6b", "nameParent" : "area1" , "idChild" : "22e85660-45e6-11de-bd49-7b334d7d6c89", "nameChild" : "materia11"},

   ];
 * @param parentObject
 * @param childObject
 * @param childArray
 * @return
 */
function setChildListBoxWithMessagesGrandParent(grandParentObject,parentObject, childObject, childArray, messageDefault) {
	if (childObject  && childObject.options) {
		// clear child listbox
		for(var i=childObject.length;i>0;i--) {
			childObject.options[i] = null;
		} 
		// add default value
		childObject.options[0] = new Option(messageDefault,"");
		
		// get select item
		var selIndex = parentObject.options[parentObject.selectedIndex].value;
		var selIndexGrandParent = grandParentObject.options[grandParentObject.selectedIndex].value;
		if (selIndex == "") {
			// if nothing selected, disable and hide child list box
	//		childObject.disabled = true;
	//		getElemById(childObject.id + "Display").style.display="none";
		} else {
			// fill the child list box with the associated items
			var childIndex = 1;
			for (i = 0; i < childArray.length; i++) {
				if (childArray[i].idParent == selIndex && childArray[i].idGrandParent == selIndexGrandParent) {
					childObject.options[childIndex] = new Option(childArray[i].nameChild, childArray[i].idChild);
					childIndex++;
				}
			}
			// if at least one item available
	//		if (childIndex > 1) {
	//			//alert("Entra 3");
	//			// display the child list box
	//		    childObject.disabled = false;
	//		    getElemById(childObject.id + "Display").style.display="";
	//        }
		}
		if (childObject.length > 1) {		
			$(childObject).removeClass("oculto");
			$("label[for="+childObject.id+"]").removeClass("oculto");
		} else {
			$(childObject).addClass("oculto");
			$("label[for="+childObject.id+"]").addClass("oculto");
		}
	
		// select the first option
		childObject.selectedIndex = 0;
		if (typeof(childObject.onChange) != "undefined") { 
			childObject.onchange();
		}
		
		// set the widget value
		//setWidgetValue(childObject.id.substring(0, childObject.id.length - 6));
	}
}
