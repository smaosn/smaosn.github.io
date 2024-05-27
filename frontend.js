var titles = document.getElementsByClassName("skill-title")
    var contents = document.getElementsByClassName("skills")

    function display(skillset){
        for (title of titles){
            title.classList.remove("selected")
        }

        for (content of contents){
            if (!content.classList.contains("hide")){
            content.classList.add("hide")}
        }
        event.currentTarget.classList.add("selected")
        document.getElementById(skillset).classList.remove("hide")

    }
