!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","../grid.base"],a):a(jQuery)}(function(a){a.jgrid=a.jgrid||{},a.jgrid.hasOwnProperty("regional")||(a.jgrid.regional=[]),a.jgrid.regional.en={defaults:{recordtext:"Vista {0} - {1} of {2}",emptyrecords:"No hay entradas para mostrar",loadtext:"Cargando...",savetext:"Guardando...",pgtext:"Página {0} of {1}",pgfirst:"Primer página",pglast:"Última Page",pgnext:"Página siguiente",pgprev:"Página anterior",pgrecs:"Datos por página",showhide:"Alternar expansión",pagerCaption:"Grid::Page Settings",pageText:"Pagina:",recordPage:"Datos por página",nomorerecs:"No hay más entradas...",scrollPullup:"De clic para cargar más...",scrollPulldown:"Hacía abajo para refrescar...",scrollRefresh:"Liberar..."},search:{caption:"Buscar...",Find:"Encontrar",Reset:"Limpiar",odata:[{oper:"eq",text:"igual a"},{oper:"ne",text:"diferente de"},{oper:"lt",text:"menor que"},{oper:"le",text:"menor o igual que"},{oper:"gt",text:"mayor que"},{oper:"ge",text:"mayor o igual que"},{oper:"bw",text:"comienza en"},{oper:"gidentro de",text:"se encuentra entre"},{oper:"ew",text:"termina en"}],groupOps:[{op:"AND",text:"todo"},{op:"OR",text:"cualquiera"}],operandTitle:"Clic para seleccionar una opión de búsqueda.",resetTitle:"Reiniciar el valor de busqueda"},edit:{addCaption:"Agregar registro",editCaption:"Editar Registro",bSubmit:"Enviar",bCancel:"Cancelar",bClose:"Cerrar",saveData:"Los datos cambiaron! Guardar cambios?",bYes:"Si",bNo:"No",bExit:"Cancelar",msg:{required:"Se requiere el campo",number:"Por favor ingresa un número valido",minValue:"valor debe ser mayor o igual a ",maxValue:"valor debe ser menor o igual a",email:"No es un e-mail válido",integer:"Por favor, ingrese un número entero",date:"Por favor ingresa una fecha válida",url:"No es una URL válda. Requiere ('http://' o 'https://')",nodefined:" No se definió!",novalue:" Se requiere valor para retornar!",customarray:"Función personalizada para devolver el arreglo!",customfcheck:"La función personalizada debe estar presente en caso de personalizar el control!"}},view:{caption:"ver registro",bClose:"Cerrar"},del:{caption:"Eliminar",msg:"Eliminar registro(s) seleccionados?",bSubmit:"Eliminar",bCancel:"Cancelar"},nav:{edittext:"",edittitle:"Editar renglón seleccionado",addtext:"",addtitle:"Agregar nuevo rengón",deltext:"",deltitle:"Eliminar el renglón seleccionado",searchtext:"",searchtitle:"Buscar entradas",refreshtext:"",refreshtitle:"Recargar",alertcap:"Advertencia",alerttext:"Por favor, selecciona un renglón",viewtext:"",viewtitle:"Ver más sobre el renglón seleccionado",savetext:"",savetitle:"Guardar renglón",canceltext:"",canceltitle:"Cancelar la edición",selectcaption:"Acciones..."},col:{caption:"Selecciona las columnas",bSubmit:"Continuar",bCancel:"Cancelar"},errors:{errcap:"Error",nourl:"No hay url establecida",norecords:"No hay registros para procesar",model:"Length of colNames <> colModel!"},formatter:{integer:{thousandsSeparator:",",defaultValue:"0"},number:{decimalSeparator:".",thousandsSeparator:",",decimalPlaces:2,defaultValue:"0.00"},currency:{decimalSeparator:".",thousandsSeparator:",",decimalPlaces:2,prefix:"",suffix:"",defaultValue:"0.00"},date:{dayNames:["Dom","Lun","Mar","Mie","Jue","Vie","Sab","Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],monthNames:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],AmPm:["am","pm","AM","PM"],S:function(a){return 11>a||a>13?["st","nd","rd","th"][Math.min((a-1)%10,3)]:"th"},srcformat:"Y-m-d",newformat:"n/j/Y",parseRe:/[#%\\\/:_;.,\t\s-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate:"n/j/Y",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO",YearMonth:"F, Y"},reformatAfterEdit:!1,userLocalTime:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0},idName:"id"}}});