HACKAVRORAtoolbar = {};

function HACKAVRORAfixAlgo() {
	console.info("Injecting QtThing");
	/*DS.ArmAPI = {"__id__": "ArmAPI","__objectSignals__": {},"objectNameChanged": {},"undefined": {},"enabled": true,"width": 1280,
"height": 720,"maximumWidth": 16777215,"maximumHeight": 16777215,"font": "Sans Serif,9,-1,5,50,0,0,0,0,0",
"isActiveWindow": true,"focusPolicy": 2,"contextMenuPolicy": 1,"updatesEnabled": true,"visible": true,"windowTitleChanged": {},
"windowTitle": "Student - ACO Avrora","windowIconChanged": {},"windowIconTextChanged": {},"windowOpacity": 1,
"toolTipDuration": -1,"animated": true,"dockOptions": 5,"destroyed": {},"destroyed(QObject*)": {},"destroyed()": {},"customContextMenuRequested": {},
"customContextMenuRequested(QPoint)": {},"iconSizeChanged": {},"iconSizeChanged(QSize)": {},"toolButtonStyleChanged": {},"toolButtonStyleChanged(Qt::ToolButtonStyle)": {},
"tabifiedDockWidgetActivated": {},"tabifiedDockWidgetActivated(QDockWidget*)": {},"DockOption": {"AllowNestedDocks": 2,"AllowTabbedDocks": 4,"AnimatedDocks": 1,
"ForceTabbedDocks": 8,"GroupedDragging": 32,"VerticalTabs": 16},"DockOptions": {"AllowNestedDocks": 2,"AllowTabbedDocks": 4,"AnimatedDocks": 1,
"ForceTabbedDocks": 8,"GroupedDragging": 32,"VerticalTabs": 16}}*/ // temp. removed due to browser key reverse progress
	console.info("QtThing injected sucessfully");
	DS.msg("Алгоритм исправлен", "green");
}
function HACKAVRORAspawnGraphSourceDialog() {
	var dlg = new EditDiagramDialog(window._mxGraph);
	window._mxGraph.showDialog(dlg.container, 620, 420, true, false);
	dlg.init();
}
function HACKAVRORAfinishLection() {
	DS.page.popModule();
}
function HACKAVRORAPasteMyTableHere() {
	window.frames[1].document.getElementById("tinymce").innerHTML += "<p>Функция: var f():<br>Функционал: <br>Параметры: <br>Возвращаемое значение: x - тип</p><table border=\"1\"><tbody><tr><td>№</td><td>Предикат</td><td>Действие</td><td>№ перехода</td></tr><tr><td>1</td><td></td><td></td><td>2</td></tr><tr><td>2</td><td></td><td></td><td>3</td></tr><tr><td>3</td><td></td><td></td><td>4</td></tr><tr><td>4</td><td></td><td></td><td>&Oslash;</td></tr></tbody></table><p></p><p></p>";
}
function HACKAVRORAreturnAllTasks() {
	DS.ARM.getTaskList = function(cb){
		DS.armCmd('getTaskList', {}, (d)=>{d.data.forEach(e=>{if(['4', '2'].includes(e.status))e.status=5;});cb(d);});
	}
	DS.msg("Жопа готова к самоуничтожению", "yellow");
}
function HACKAVRORAeditFrame(num) {
	options = {
	  "indent":"auto","indent-spaces":4,"wrap":180,"markup":true,"output-xml":false,
	  "numeric-entities":true,"quote-marks":true,"quote-nbsp":false,"show-body-only":true,
	  "quote-ampersand":false,"break-before-br":true,"uppercase-tags":false,
	  "uppercase-attributes":false,"drop-font-tags":true,"tidy-mark":false
	}
	var html = window.frames[num].document.getElementById("tinymce").innerHTML;
	var result = tidy_html5(html, options);
	var myframe = DS.create({
		DStype: 'window',position: 'auto',destroyOnClose: true,reqWidth: 900,
		items: [
			['title','Редактируй','->',{DStype: 'window-button-close'}],
			{DStype: 'form-panel',items: [
				{DStype: 'list-layout',items: [
					{DStype: 'textarea',editor: false,label: 'Исходный код','class': '',name: 'editing_data'},
					{DStype: 'button',label: 'Сохранить!',listeners: {
						click: function(){
							var $form = this.getForm();
							var data = $form.getFields();
							window.frames[num].document.getElementById("tinymce").innerHTML = data.editing_data;
							$form.parent().close();
						}
					}}
				]}
			]}
		]
	}).open();
	var data = {"editing_data": result};
	myframe.find('form-panel')[0].setFields(data);
}
function HACKAVRORAeditMethod() {
	HACKAVRORAeditFrame(0);
}
function HACKAVRORAeditAlgorithm() {
	HACKAVRORAeditFrame(1);
}
function HACKUTILaddScript(url) {
	var tidyscript = document.createElement("script");
	tidyscript.type = "text/javascript";
	tidyscript.src = url;
	document.getElementsByTagName("head")[0].appendChild(tidyscript);
}
function HACKUTILaddToolbarBtn(name, callback) {
	HACKAVRORAtoolbar.childrens[1].appendChild({DStype: 'button',label: name,listeners: { click: callback }})
}

(function() {
	console.log("Payload execution entry point");
	HACKUTILaddScript('https://lovasoa.github.io/tidy-html5/tidy.js');
	
	HACKAVRORAfixAlgo();

	HACKAVRORAtoolbar = DS.create({
		DStype: 'window', position: 'auto', destroyOnClose: false, reqWidth: 340,
		items: [
			['title','Подвал МИРЭА нахуй','->',{DStype: 'window-button-close'}],
			{DStype: 'button',label: "Я всё сломал",listeners: { click: function() {window.location.reload(true);} } }
		]
	}).open();
	
	HACKUTILaddToolbarBtn("Выключить афк кик", function() {
		setInterval(()=>{window.dispatchEvent(new MouseEvent('mousemove', {}));},133337);
		DS.msg("Автоотключение побеждено", "green");
	});
	HACKUTILaddToolbarBtn("Разрешить вставку", function() {
		DS.page.cb.canPaste = ()=>{return true;};
		DS.msg("Вставка разрешена", "green");
	});
	HACKUTILaddToolbarBtn("Исправить алгоритм", HACKAVRORAfixAlgo);
	HACKUTILaddToolbarBtn("Редактировать схему", HACKAVRORAspawnGraphSourceDialog);
	HACKUTILaddToolbarBtn("Редактировать метод", HACKAVRORAeditMethod);
	HACKUTILaddToolbarBtn("Редактировать алгоритм", HACKAVRORAeditAlgorithm);
	HACKUTILaddToolbarBtn("Выключть лекцию", HACKAVRORAfinishLection);
	HACKUTILaddToolbarBtn("Вставить таблицу", HACKAVRORAPasteMyTableHere);
	HACKUTILaddToolbarBtn("[ОПАСНО] Вернуть все задания", HACKAVRORAreturnAllTasks);
	
	//document.body.appendChild(HACKAVRORAtoolbar.getObjectSelf());
	
	document.onkeyup = function(e) {
		if (e.ctrlKey && e.shiftKey && e.which == 85) {
			HACKAVRORAtoolbar.open();
		}
	};
	
	DS.msg("Вы успешно победили защиту авроры", "green");
})();
