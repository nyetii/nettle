function expand(element) {
    if (!element) {
        console.error("Could not expand or collapse element.");
        return;
    }

    const children = element.querySelectorAll(".collapsable");

    for (const child of children) {
        if (child.classList.contains("hidden")) {
            child.classList.remove("hidden");
        }
        else {
            child.classList.add("hidden");
        }
    }

    if (![...children].some(x => x.classList.contains("hidden"))) {
        const icon = element.querySelector('.headline').querySelector('#expand');
        icon.src = 'assets/icons/collapse.svg';
    }
    else {
        const icon = element.querySelector('.headline').querySelector('#expand');
        icon.src = 'assets/icons/expand.svg';
    }
}