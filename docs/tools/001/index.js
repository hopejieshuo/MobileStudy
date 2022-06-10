//Add meta tag dynamically.
//动态添加meta标签。
var metaElement=document.createElement("meta");
var metaText=document.createAttribute("name");
metaText.value="viewport";
metaElement.setAttributeNode(metaText);
var metaText2=document.createAttribute("content");
metaText2.value="user-scalable=no";
metaElement.setAttributeNode(metaText2);
document.head.appendChild(metaElement);

//From side to other options.
//由边转化为其他选项。
function sideChange(a){
    
    //Judge whether it is a value.
    //判断是否为数值。
    if(a=="" || a.indexOf(" ")==0 || isNaN(a)==true){
        alert("请输入数值!");
        exit;
    }
    
    //Judge whether the value is greater than or equal to 100000.
    //判断数值是否大于等于100000。
    if(a>=100000){
        alert("边数过大,无法运算!");
        exit;
    }
    
    //Judge whether the number is less than or equal to 2.
    //判断数字是否小于等于2。
    if(a<=2){
        alert("边数不得小于3!");
        exit;
    }
    
    //Calculates values and loads objects.
    //计算数值并载入对象。
    var sendData=new Object();
    a=Number(a);
    sendData.side=a; //Side：边
    sendData.IA=IA(a); //Interior Angle：内角
    sendData.SIA=SIA(a); //Sum of Interior Angle：内角总和
    sendData.EA=EA(a); //Exterior Angle：外角
    sendData.SEA=SEA(a); //Sum of Exterior Angle：外角总和
    sendData.NDL=NDL(a); //Number of Diagonal Line：对角线个数
    sendData.SDL=SDL(a); //Sum of Diagonal Line：对角线总数
    sendData.CA=CA(a); //Center Angle：中心角
    
    //Returns the result.
    //将结果返回。
    return sendData;
}

//Number of sides converted to interior angle.
//边数转化为内角度数。
function IA(side){
    var angle;
    angle=(180*(side-2))/side;
    return angle;
}

//Number of sides converted to sum of interior angles.
//边数转化为内角和度数。
function SIA(side){
    var angle;
    angle=180*(side-2);
    return angle;
}

//Number of sides converted to exterior angle.
//边数转化为外角度数。
function EA(side){
    var angle;
    angle=360/side;
    return angle;
}

//Number of sides converted to sum of exterior angles.
//边数转化为外角和度数。
function SEA(side){
    var angle;
    angle=360;
    return angle;
}

//Number of sides converted to number of diagonal lines.
//边数转化为对角线个数。
function NDL(side){
    var line;
    line=side-3;
    return line;
}

//Number of sides converted to sum of diagonal lines.
//边数转化为对角线总数。
function SDL(side){
    var line;
    line=(side*(side-3))/2;
    return line;
}

//Number of sides converted to center angles.
//边数转化为中心角度数。
function CA(side){
    var angle;
    angle=360/side;
    return angle;
}