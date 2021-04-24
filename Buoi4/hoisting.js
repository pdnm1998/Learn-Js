// Funtion scopes : {} ==> các biến trong funtion scopes không dùng được bên ngoài {}
// Closure : Các biến khai báo bên ngoài funtion scopes dùng được trong {}
let y=9
y = 5
if (true)
{
let  y=8
console.log(y);
}
console.log(y);
// hoisting : Tất cả các biến dù khai báo ở đâu đều bị đẩy lên đầu khai báo và gán sau
// hoisting : Khó kiểm soát biến 
// Bỏ hẳn var dùng let
