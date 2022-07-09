(function () 
{
            document.addEventListener("click", (event)=>
            {
                if(event.target.getAttribute('btn') === "header__btn")
                {
                    scrollToTarget(event.target.getAttribute('goTo'))
                }
       
               if(event.target.id === "whatsapp")
               {
                
               }
               if(event.target.id === "email")
               {
                let textArea = document.querySelector('.email');
                textArea.select();
                document.execCommand('copy');
                alert(`E-mail copied ${textArea.textContent}`)
               }
            })
            
            function scrollToTarget(target)
            {
                const topValue = document.getElementById(target).getBoundingClientRect().top
                window.scrollTo({
                top: topValue - (document.body.getBoundingClientRect().y + 100),
                left: 0,
                behavior: "smooth"
               })
            }
})()

