window.onload = function(){
	var todoList = [];//пустой лист

	if(localStorage.getItem('todo')!=undefined)// проверяем наличие записи
	{
		todoList = JSON.parse(localStorage.getItem('todo'));// если есть преобразует в массив и записывает в out
		out();
	}

	document.getElementById('add').onclick = function (){//обработка событий
		var temp = {}; // промеж. массив
		var d = document.getElementById('n').value; //значение со строки
		temp.todo = d; // запись из строки в массив
		temp.check = false; //состояние
		if(temp.todo != '')// недопускаем пустых записей
		{
			todoList.push(temp);
		}
		console.log(todoList); //выводим в консоль
		out();// после нажатия на кнопку
		localStorage.setItem('todo', JSON.stringify(todoList));// сохраняем на localStorage
		document.getElementById('n').value = ''; // пустая строка
	}

	document.getElementById('out').onchange = function (event){
		currentKey = event.target.parentNode.childNodes[1].data.slice(1);// будет работать если есть данные(зачеркивает)
		for (a = 0; a<todoList.length; a++) { //обработчик 
			if (todoList[a].todo == currentKey) {
				todoList[a].check = !todoList[a].check;
				out();
				localStorage.setItem('todo', JSON.stringify(todoList));// сохраняем на localStorage
				break;
			}
		}
	}

	function out() {//вывод на экран
		var out = '';//пустая строка
		for (var a=0; a<todoList.length; a++) 
		{
			if (todoList[a].check)
			{
				out += '<span class="underlined"><input type="checkbox" checked> '+todoList[a].todo + '<button id = "remove" class="btn">&#10006;</button></span><br>'; //зачеркивает
				
			}
			else 
			{
				out+='<span class="navList" ><input type="checkbox" class="checkText"> '+todoList[a].todo + '<button id = "remove" class="btn">&#10006;</button></span><br>';
			}
			document.getElementById('out').innerHTML = out;//записываем
		}
		
	}
}