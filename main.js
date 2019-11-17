//функция конструктор, суммирует и умножает числа
//@param num число, num число
//@return num возвращает арифметическую сумму, num возвращает арифметически перемноженные числа
function Calc(a,b){
    this.a = +a;
    this.b = +b;
    this.sum=function(){
        return this.a+this.b;
    };
    this.mul = function(){
        return this.a*this.b;
    };
}
let a=prompt('1 num',''),
    b=prompt('2 num',''),
    calcu = new Calc(a, b);
let s=calcu.sum(),
    m=calcu.mul();
//возвращеет сумму числовых элементов в массиве
//@param array массив
//@return num сумма числовыых элементов
function sum_arr(mass){
    let sum=0;
    for (key in mass){
       if (isFinite (mass[key])){
            sum+=mass[key];
       }
    }
return sum;
}
//сортирует по алфавиту слова  в строке
//@param str строка
//@return str отсортированная строка
function sort_str(st){
    let mass=st.split(' ');
    mass.sort();
    st=mass.join(' ');
return st;
}
//определяет максимальное значение элемента в массиве
//@param array массив с элементами
//@return num максимальное значение элемента
function get_max(arr){
    let max=-Infinity;
    for (key in arr){
        if (arr[key]>max){
            max=arr[key];
        }
    }
return max;
}
//удаляет в массиве повторяющиеся элементы
//@param array массив с элементами
//@return array отредактированный массив без повторяющихся элементов
function get_uniq_arr(arr){
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                arr.splice(j--, 1);
            }
        }
    }
return arr;
}
//заменяет в строке символ
//@param str строка, str символ в строке который будет заменен, str символ которым будет заменен символ
//@return str отредактированная строка
function replaceSymbol(str, symbol1, symbol2){
  let d=str.length,
    str_2='';
  for (i=0; i<d; i++){
    if (str[i]==symbol1){
      str_2=str_2+symbol2;
    }
    else {
      str_2=str_2+str[i];
    }
  }
  return str_2;
}
//определяет тип файла по его названию
//@param str имя файла в фортате "имя.тип"
//@return str "тип"
function getTypefile(str){
  a=(str.indexOf('.')+1);
  str=str.slice(a);
  return str;
}
//удаляет из строки числа и возвращает строку без чисел
//@param str строка
//@return str отредактированная строка
function only_letters(str){
  let d=str.length,
    str_2='';
  for (i=0; i<d; i++){
    if (isFinite(str[i])) {
      str_2=str_2;
    }
    else {
      str_2=str_2+str[i];
    }
  }
  return str_2;
}
//возвращает "имя" с заглавной буквы
//@param str "имя"
//@return str "Имя"
function up_first(str){
  let str_2='',d=str.length;
  for (i=1; i<d; i++){
    str_2=str_2+str[i];
  }
  str=str[0].toLocaleUpperCase()+str_2.toLowerCase();
return str;
}
//возвращаетя полное ФИО в сокращенный вариант
//@param str полное ФИО через пробелы
//@return str сокращенное ФИО Фамилия И.О.
function get_short_fio(full_fio){
    let first_name_0=full_fio[0].toUpperCase(),
        first_name='',
        second_name='',
        third_name='';
    first_name=full_fio.slice(1,full_fio.indexOf(' '));
    second_name=full_fio.slice((full_fio.indexOf(' ')+1),(full_fio.indexOf(' ')+2))+'.';
    third_name=full_fio.slice(full_fio.lastIndexOf(' '),(full_fio.lastIndexOf(' ')+2))+ '.';
    full_fio=first_name_0+first_name+' '+second_name.toUpperCase()+third_name.toUpperCase();
return full_fio;
}
//подсчитывает кол-во введенных символов в html элементе и возвращает значение в html элемент
let count=0;
p=document.createElement('p');
document.body.append(p);
document.getElementById('text_arr').onkeypress=function(){
    count++;
    p.innerHTML=`Your enter ${count} symbol`;
}
//возвращает целое случайное число в заданном диапазоне
//@param num первое число, num второе число
//@return num случайное число
function range_random(min_num,max_num){
let min=Math.round(min_num),
    max=Math.round(max_num),
    r=Math.round(Math.random() * (max - min) + min);
return r;
}
range_random(5,10);
//обрезает строку до заданного кол-ва символов и додавляет '...'
//@param str строка, num максимальное количество символов в новой строке
//@return str возвращает строку с заданным кол-вом символов+'...'
function truncate(str, maxlength){
    let d=str.length,
        symbol='...',
        str_2='';
    if (d>maxlength){
        for (i=0; i<maxlength; i++){
            str_2=str_2+str[i];
        }
        str_2=str_2+symbol;
    }
return str_2;
}
//возвращает завтрашнее число
function get_tomorrow(){
    let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'деккабря'];
    let date= new Date();
    let n_num=date.getDate();
    date.setDate(n_num+1);
    let n_month=date.getMonth();
    let n_year=date.getFullYear();
    tomorrow=(date.getDate()+' '+month[n_month]+' '+n_year+'г');
return tomorrow;
}
//находит разницу в днях
//@param str задает дату в фомате 'число/месяц/год'
//@return num возвращает разницу в днях
function d_day(d1,d2){
    let mas_1=[n_date_1,n_month_1,n_year_1]=d1.split('/'),mas_2=[n_date_2,n_month_2,n_year_2]=d2.split('/');
    let date_1=new Date(n_year_1+'-'+n_month_1+'-'+n_date_1),date_2=new Date(n_year_2+'-'+n_month_2+'-'+n_date_2);
    let num_date_1=+date_1,num_date_2=+date_2;
    let dif=Math.abs(num_date_1 - num_date_2)/(24*60*60*1000);
return dif;
}
//возвращает кол-во рабочих дней между датами
//@param str дата в фортате 'год-месяц-число'
//@return num кол-во дней
function get_count_days(date1,date2){
    let n_work_days=0;
    let d1=new Date(date1),d2=new Date(date2);
    let n_date=d1.getDate();
    while (d1<=d2){
        if (d1.getDay()!=0 && d1.getDay()!=6){
            n_work_days++;
        }
        d1.setDate(++n_date);
    }
return n_work_days;
}
//кол-во дней до нового года
//@param str дата в формате 'год-месяц-число'
//@return num кол-во дней
function get_count_days(date){
    if (isFinite(date)){
        date=new Date();
    }
    else{
        date=date;
    }
    let d=new Date(date);
    let d_end= new Date();
    d_end.setDate(30);
    d_end.setMonth(11);
    let dif=Math.round((Math.abs(d_end-d)/(24*60*60*1000))+1);
return dif;
}
//возвращает день недели от заданной даты
//@param str дата в формате 'число-месяц-год'
//@return str день недели
function get_day(date){
    let mass_days=['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let mas_date=[n_date,n_month,n_year]=date.split('-');
    let d=new Date(n_year+'-'+n_month+'-'+n_date);
    let n_day=d.getDay();
    day=mass_days[n_day];
return day;
}
//проверяет объект на пустоту
//@param object объект
//@return boolean false-не пустой, true-пустой
function is_empty(obj){
    for (prop in obj){
        return false;
    }
return true;
}

let salaries={
    'Вася':200,
    'Петя':300,
    'Даша':250
}
//определяет максимальное и минимальное значение ключей объекта
//@param object объект
//@return key минимальный и максимальный ключ объекта
function min_max(obj){
    let min=+Infinity,min_value,max=-Infinity,max_value;
    for (prop in obj){
        if (obj[prop]>max){
           max=obj[prop];
           max_value=prop;
        }
        if (obj[prop]<min){
            min=obj[prop];
            min_value=prop;
        }
    }
let resalt_value=(`min:${min_value} max:${max_value}`);
return resalt_value;
}
//определяет сумму значений ключей в объекте
//@param object объект
//@return num сумма значений
function sum (obj){
    let s=0;
    for (prop in obj){
        s+=obj[prop];
    }
return s;
}
//проверяет инпуты на пустоту при клике на кнопку, true добавляет класс error
$(function(){
    $('#button_enter').click(function(){
        log=$('#login');
        pass=$('#password');
        log.removeClass('error');
        pass.removeClass('error');
        if (log.val()==''){
            log.addClass('error');
        }
        if (pass.val()==''){
            pass.addClass('error');
        }
    });
})
