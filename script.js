addEventListener("load", executeApp);

function executeApp() {
    const user = {
        name: "Jeff the chef",
        imgURL: "https://randomuser.me/api/portraits/lego/8.jpg",
        imgAlt: "User's photo",
    };

    const form = document.getElementById("user-history-form");
    const histories = document.getElementById("histories");

    fillForm(user);
    form.addEventListener("submit", generateComment);

    function fillForm(user) {
        const formImg = document.getElementById("form-img");
        formImg.setAttribute("src", user.imgURL);
        formImg.setAttribute("alt", user.imgAlt);
    }

    function generateComment(event) {
        event.preventDefault();
        const comment = document.getElementById("user-history").value;
        const history = createComment(user, comment);
        histories.append(history);
    }

    function createComment(user, comment) {
        // CONTAINER ELEMENT
        const item = document.createElement("li");
        const figure = document.createElement("figure");
        const commentBody = document.createElement("div");

        // CONTENT ELEMENTS
        const img = document.createElement("img");
        const nameParagraph = document.createElement("p");
        const commentParagraph = document.createElement("p");

        // SETTING CLASSES
        item.classList.add("row");
        figure.classList.add("col-1");
        commentBody.classList.add("col-11");

        img.classList.add("img-fluid");
        nameParagraph.classList.add("comment-title");
        commentParagraph.classList.add("comment-body");

        // SETTING ATTRIBUTES
        img.setAttribute("src", user.imgURL);
        img.setAttribute("alt", user.imgAlt);

        // SETTING CONTENT
        nameParagraph.textContent = user.name;
        commentParagraph.textContent = comment;

        // APPENDING ELEMENTS
        figure.append(img);
        commentBody.append(nameParagraph, commentParagraph);
        item.append(figure, commentBody);

        return item;
    }
}
