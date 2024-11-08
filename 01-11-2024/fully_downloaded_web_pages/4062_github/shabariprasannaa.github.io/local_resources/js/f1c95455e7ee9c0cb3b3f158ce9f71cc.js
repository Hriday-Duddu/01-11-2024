function typing(event)
{

        event.preventDefault()
        name="ghuru_prsad@gmail.com"
        password="6280276"


        a=event.target[0].value
        a=a.toLowerCase()
        b=event.target[1].value

        if(a==name && b==password)
            {
                alert("Login Successfully")
                window.location.href = "project_1.html";
            }
            else
            {
                alert("Username or Password is Incorrect")
            }
}



$(document).ready(function()
    {
        $(".link2").click(function()
        {
            $(" .link2").fadeToggle(1000)

        })

        $(" .div1 .email").click(function()
    {
        $(".div1 .input").focus()
    }
    )
    $(".div_6 .email").click(function()
    {
        $(".div_6 .input").focus()
    }
    )




        $(".box1").click(function()
        {
            $(".box11").slideToggle(500)
            $(".one").animate({rotate:"+=45deg"},500)
        })
        
        $(".box2").click(function()
        {
            $(".box21").slideToggle(500)
            $(".two").animate({rotate:"+=45deg"},500)
        })
        
        $(".box3").click(function()
        {
            $(".box31").slideToggle(500)
            $(".three").animate({rotate:"+=45deg"},500)
        })
        
        $(".box4").click(function()
        {
            $(".box41").slideToggle(500)
            $(".four").animate({rotate:"+=45deg"},500)
        })
        
        $(".box5").click(function()
        {
            $(".box51").slideToggle(500)
            $(".five").animate({rotate:"+=45deg"},500)
        })
        
        $(".box6").click(function()
        {
            $(".box61").slideToggle(500)
            $(".six").animate({rotate:"+=45deg"},500)
        })





    }

    )


