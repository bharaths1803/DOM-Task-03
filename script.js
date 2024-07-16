function table_create(){
  var ele = document.createElement("table");
  ele.setAttribute("class","table");
  return ele;
}

function tele_create(element){
  var ele = document.createElement(element);
  return ele;
}

function thtd_create(tagname, content, attrname, attrvalue){
  var ele = document.createElement(tagname);
  ele.innerHTML = content;
  if(attrname != ""){
    ele.setAttribute(attrname,attrvalue);
  }
  return ele;
}


var table = table_create();
document.body.append(table);

var thead = tele_create("thead");
table.append(thead);

var tr = tele_create("tr");
thead.append(tr);
var th1 = thtd_create("th","#","scope","col");
tr.append(th1);
var th2 = thtd_create("th","First","scope","col");
tr.append(th2);
var th3 = thtd_create("th","Last","scope","col");
tr.append(th3);
var th4 = thtd_create("th","Handle","scope","col");
tr.append(th4);

var tbody = tele_create("tbody");
table.append(tbody);

var tr1 = tele_create("tr");
tbody.append(tr1);
var th11 = thtd_create("th","1","scope","row");
tr1.append(th11);
var td11 = thtd_create("td","Mark","","");
tr1.append(td11);
var td12 = thtd_create("td","Otto","","");
tr1.append(td12);
var td13 = thtd_create("td","@mdo","","");
tr1.append(td13);

var tr2 = tele_create("tr");
tbody.append(tr2);
var th22 = thtd_create("th","2","scope","row");
tr2.append(th22);
var td21 = thtd_create("td","Jacob","","");
tr2.append(td21);
var td22 = thtd_create("td","Thornton","","");
tr2.append(td22);
var td23 = thtd_create("td","@fat","","");
tr2.append(td23);

var tr3 = tele_create("tr");
tbody.append(tr3);
var th33 = thtd_create("th","3","scope","row");
tr3.append(th33);
var td31 = thtd_create("td","Larry the Bird","","");
tr3.append(td31);
var td32 = thtd_create("td","","","");
tr3.append(td32);
var td33 = thtd_create("td","@twitter","","");
tr3.append(td33);