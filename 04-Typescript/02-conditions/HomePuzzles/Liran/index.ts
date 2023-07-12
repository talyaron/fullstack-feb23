let use = confirm("Welcome to Age verefication for byuing alcohol, press ok to continue")
while(use)
{
    const np = prompt("Enter your name")
    var ap = Number(prompt("Enter your age"))
    while((Number.isNaN(ap)) || (ap == null) || (ap <= 0))
    {
        if(ap == 0)
        {
            ap = Number(prompt("Don't leave empty, please enter your age"))
        }
        else if(ap < 0){
            ap = Number(prompt("Enter your age, please use only positive numbers"))
        }
        else{
            ap = Number(prompt("Enter your age, please use only digits"))
        }

    }
    if(ap >= 18)
    {

        alert(np + " You are " + ap +  " years old, therefor you are allowed to buy alcohol")
    }
    else
    {
        alert(np + " You are " + ap + " years old, therefor you are not allowed to buy alcohol")
    }
    use = confirm("press ok to for another, cancle to exit")
}
alert("Bye Bye...")



