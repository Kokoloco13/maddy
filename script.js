const wrapper = document.querySelector(".wrapper")
const facts = document.querySelector(".facts")

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            addFacts(entry)
        }
    })
}, { rootMargin: "0px 0px 200% 0px" })

function addFacts(entry) {
    console.log("fact is on screen!")
    observer.unobserve(entry.target)

    const clonedFacts = facts.cloneNode(true);
    wrapper.appendChild(clonedFacts)
    observer.observe(clonedFacts)
}

observer.observe(facts)