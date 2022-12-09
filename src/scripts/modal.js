function renderModal(){
    const modal = document.querySelector(".modalContainer");
    const buttons = document.querySelectorAll(".openPost");

    for(let i = 0; i < buttons.length; i++){
        const button = buttons[i];

        button.addEventListener("click", (event) => {
            event.preventDefault();
            const modalContent = createPostModal(button.dataset.id);

            modal.innerHTML = '';

            modal.appendChild(modalContent);
            
            modal.showModal();
            closePostModal();
        })
    }
}

function createPostModal(id){
    let element = {};

    const section = document.createElement("div");
    const divModalCard = document.createElement("div");
    const divPostCardTitle = document.createElement("div");
    const cardTitleImg = document.createElement("img");
    const cardTitleInfo = document.createElement("div");
    const cardUser = document.createElement("p");
    const cardOffice = document.createElement("span");
    const closeBtn = document.createElement("button");
    const divModalPostContent = document.createElement("div");
    const modalPostTitle = document.createElement("span");
    const modalPostText = document.createElement("p");

    for(let i = 0; i < posts.length; i++){
        if(posts[i].id_post === Number(id)){
            element = posts[i];
        }
    }

    section.classList.add("modalBoxContainer");
    divModalCard.classList.add("modalCard");
    divPostCardTitle.classList.add("postCardTitle");
    cardTitleImg.classList.add("userMiniature");
    cardTitleImg.src = `./src/assets/img/user${element.user}.svg`
    cardTitleInfo.classList.add("cardInfo");
    cardUser.innerText = `${users[element.user-1].user}`
    cardOffice.innerText = `${users[element.user-1].stack}`
    closeBtn.classList.add("closeBtn");
    closeBtn.innerText = "X"
    divModalPostContent.classList.add("modalPostContent");
    modalPostTitle.innerText = `${element.title}`;
    modalPostText.innerText = `${element.text}`;
    
    section.appendChild(divModalCard);
    divModalCard.appendChild(divPostCardTitle);
    divPostCardTitle.appendChild(cardTitleImg);
    divPostCardTitle.appendChild(cardTitleInfo);
    cardTitleInfo.append(cardUser, cardOffice);
    divModalCard.appendChild(closeBtn);
    divModalCard.appendChild(divModalPostContent);
    divModalPostContent.append(modalPostTitle, modalPostText);

    return section;
    

}

function closePostModal(){
    const modal = document.querySelector(".modalContainer");
    const closeButton = document.querySelector(".closeBtn");

    closeButton.addEventListener("click", () => {
        modal.close();
    })
}

renderModal();