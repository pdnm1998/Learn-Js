function f1()
{
    var N = 0; // N luon duoc khoi tao khoi ham f1 dduowcj thuc thi
    console.log(N);
    function f2() // Ham f2
    {
        N += 1; // cong don cho bien N
        console.log('-->>',N);
    }

    return f2;
}

var result = f1();

result(); // Chay lan 1
result(); // Chay lan 2
result(); // Chay lan 3