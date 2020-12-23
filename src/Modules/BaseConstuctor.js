const Box = () => {
    const wrapper = document.createElement('div');

    //IMAGE
    const addImg = (source, altAtt) => {
        const image = document.createElement('img');
        image.src = source;
        image.alt = altAtt;
        wrapper.appendChild(image);
    }

    //LABEL
    const addLabel = (labelElement, labelContent, labelClass) => {
        const label = document.createElement(labelElement);

        if(labelClass){
            label.classList.add(labelClass);
        }

        label.textContent = labelContent;
        wrapper.appendChild(label);
    }


    //INPUT
    const addInput = (inputType, nameAtt, value) => {
        const input = document.createElement("input");
        input.setAttribute('type', inputType);
        if (nameAtt) {
            input.setAttribute('name', nameAtt);
        }
        if (value) {
            input.value = value;
        }
        wrapper.appendChild(input);
    }

    //SELECT
    const addSelect = (nameAtt) => {
        const select = document.createElement("select");
        if (nameAtt) {
            select.setAttribute('name', nameAtt);
        }

        //OPTION
        const addOption = (optionValue, optionText) => {
            const option = document.createElement("option");
            option.setAttribute('value', optionValue);
            option.style.backgroundImage = "url('./IMG/flag0.png')";
            option.textContent = optionText;
            select.appendChild(option);
        }
        wrapper.appendChild(select);
        return { addOption }
    }

    //TEXTAREA
    const addTextArea = (nameAtt, value) => {
        const textarea = document.createElement("textarea");
        textarea.rows = 3;
        if (nameAtt) {
            textarea.setAttribute('name', nameAtt);
        }
        if (value) {
            textarea.value = value;
        }
        wrapper.appendChild(textarea);
    }

    //BUTTON
    const addButton = (buttonText, valueAtt) => {
        const button = document.createElement("button");
        button.textContent = buttonText;
        button.setAttribute('value', valueAtt)
        wrapper.appendChild(button);
        return button;
    }

    const getWrapper = (wrapperClass) => {
        if(wrapperClass){
            wrapper.classList.add(wrapperClass)
        }
        return wrapper;
    }

    return { addImg, addLabel, addInput, addSelect, addTextArea, addButton, getWrapper }
};

export {Box}