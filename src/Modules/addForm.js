function createForm() {
    const container = document.createElement("div"); //formContainer

    const titleWrapper = document.createElement("div");
    const titleLabel = document.createElement("h3");
    const titleInput = document.createElement("input");
    titleInput.setAttribute('type', 'text');

    titleWrapper.append(titleLabel, titleInput);

    const descriptionWrapper = document.createElement("div");
    const descriptionLabel = document.createElement("h3");
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute('type', 'text');

    descriptionWrapper.append(descriptionLabel, descriptionInput);

    container.append(titleWrapper, descriptionWrapper);

    return container;
}

export {createForm}