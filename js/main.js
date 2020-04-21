"use strict";

let login = prompt('Введите свой логин:','');

if (login == 'Админ'){
	let password = prompt("Введите пароль:", '');
	if (password == 'Я главный'){
		alert("Добро пожаловать!")
	}
	else if(password == ''){
		alert("Вы не ввели пароль")
	}
	else alert("Вы ввели неверный пароль");
}
else if (login == ''|| login == null){
	alert("Отмена");
}
else alert('Вы ввели неправильный логин!');